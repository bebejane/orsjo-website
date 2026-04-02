const { buildClient, buildBlockRecord } = require('@datocms/cma-client-node');
const datoClient = buildClient({ apiToken: process.env.DATOCMS_API_TOKEN });
const fs = require('fs');
const XlsxStreamReader = require('xlsx-stream-reader');
const EventEmitter = require('events').EventEmitter;

// Zero index is 1
const ROW_INDEX = { article_no: 1, description: 2, price: 4 };

class PricelistController extends EventEmitter {
	import = async (base64Data) => {
		const products = await parsePriceList(base64Data, this);
		await updateProducts(products, this);
	};
	importFile = async (file, test = false) => {
		const base64Data = fs.readFileSync(file, { encoding: 'base64' });
		const products = await parsePriceList(base64Data, this, test);
		await updateProducts(products, this, test);
	};
}

const parsePriceList = (base64Data, controller, test) => {
	return new Promise((resolve, reject) => {
		console.log(`Parsing excel file...`);
		controller.emit('status', { type: 'PARSING' });

		let count = 0;
		let currentModel = null;
		const products = [];

		var workBookReader = new XlsxStreamReader();
		workBookReader.on('error', (err) => reject(err));
		workBookReader.on('worksheet', (workSheetReader) => {
			if (workSheetReader.id > 1) return workSheetReader.skip(); // we only want first sheet

			workSheetReader.on('row', (row) => {
				++count;
				if (row.attributes.r == 1) {
				} else if (count > 3) {
					const r = {};
					currentModel = row.values[ROW_INDEX.model] ? row.values[ROW_INDEX.model] : currentModel;
					Object.keys(ROW_INDEX).forEach((k) => (r[k] = row.values[ROW_INDEX[k]]));

					if (r.article_no && r.price) {
						r.article_no = ('' + r.article_no).trim().toUpperCase();
						r.price = parseFloat(
							Math.round(typeof r.price === 'string' ? r.price.replace(/\,/g, '') : r.price),
						);
						products.push(r);
					}
				}
			});
			workSheetReader.on('end', function () {
				if (products.length === 0) reject('No products found. Kanske inte var ratt fil...');
				else resolve(products);
			});
			workSheetReader.process();
		});
		workBookReader.on('end', () => {
			// end of workbook reached
		});
		const base64 = base64Data.replace(
			'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,',
			'',
		);
		const buffer = Buffer.from(base64, 'base64');
		const tempPath = '/tmp/pricelist.xlsx';
		fs.writeFileSync(tempPath, buffer);
		fs.createReadStream(tempPath).pipe(workBookReader);
	});
};

const updateProducts = async (articles, controller, test) => {
	console.log('Importing prices: test=', test);
	controller.emit('status', { type: 'PREPARING' });

	const [allProducts, lightsources, variants, accessories, itemTypes] = await Promise.all([
		getAllRecords({ nested: true, version: 'published', filter: { type: 'product' } }),
		getAllRecords({ nested: true, version: 'published', filter: { type: 'product_lightsource' } }),
		getAllRecords({ nested: true, version: 'published', filter: { type: 'variant' } }),
		getAllRecords({ nested: true, version: 'published', filter: { type: 'product_accessory' } }),
		datoClient.itemTypes.list(),
	]);

	const all = lightsources.concat(variants).concat(accessories);
	const variantBlockId = itemTypes.filter((t) => t.api_key === 'variant')[0].id;
	const modelBlockId = itemTypes.filter((t) => t.api_key === 'product_model')[0].id;
	const lightsourceBlockId = itemTypes.filter((t) => t.api_key === 'lightsource')[0].id;
	const accessoryBlockId = itemTypes.filter((t) => t.api_key === 'accessory')[0].id;

	const notFound = [];
	const updated = [];
	const errors = [];
	const products = {};

	console.log('updating articles', articles.length);
	//console.log(JSON.stringify(all, null, 2));
	for (let i = 0; i < articles.length; i++) {
		const items = all.filter(
			(l) => l.article_no && l.article_no.trim() === articles[i].article_no.trim(),
		);

		if (!items.length) {
			notFound.push(articles[i]);
			continue;
		}

		for (let y = 0; y < items.length; y++) {
			const objectId = items[y].id;

			for (let x = 0; x < allProducts.length; x++) {
				const product = allProducts[x];
				const variants = [];
				const lightsources = [];
				const accessories = [];

				product.models?.filter((m) =>
					m.attributes.variants
						?.filter((v) => v.id === objectId)
						.forEach((v) => variants.push({ ...v.attributes, id: v.id, price: articles[i].price })),
				);
				product.models?.filter((m) =>
					m.attributes.lightsources
						?.filter((l) => l.attributes.lightsource === objectId)
						.forEach((l) =>
							lightsources.push({
								...l.attributes,
								id: l.attributes.lightsource,
								price: articles[i].price,
							}),
						),
				);
				product.models?.filter((m) =>
					m.attributes.accessories
						?.filter((a) => a.id === objectId)
						.forEach((a) =>
							accessories.push({ ...a.attributes, id: a.id, price: articles[i].price }),
						),
				);

				if (!variants.length && !lightsources.length && !accessories.length) {
					//console.log("no variant found", articles[i].article_no);
					continue;
				}

				if (!products[product.id])
					products[product.id] = { lightsources: [], variants: [], accessories: [], articles: 0 };

				products[product.id].articles++;
				products[product.id].product = product;
				products[product.id].variants.push.apply(products[product.id].variants, variants);
				products[product.id].lightsources.push.apply(
					products[product.id].lightsources,
					lightsources,
				);
				products[product.id].accessories.push.apply(products[product.id].accessories, accessories);
			}
		}
	}

	console.log('Not found!');
	notFound.forEach((n) => console.log(n.article_no));
	if (test) return;
	console.log(`Updating ${Object.keys(products).length} products...`);
	controller.emit('status', {
		type: 'START',
		item: 0,
		total: Object.keys(products).length,
		updated,
		notFound,
		errors,
	});

	const productIds = Object.keys(products);

	for (let i = 0, article = 0; i < productIds.length; i++) {
		const productId = productIds[i];
		const { accessories, lightsources, variants } = products[productId];

		console.log(`${i + 1}/${productIds.length}`, productId);

		if (lightsources.length) {
			for (let x = 0; x < lightsources.length; x++) {
				const { id, price } = lightsources[x];
				await datoClient.items.update(id, { price: parseFloat(price) });
			}
		}
		const product = await datoClient.items.find(productId, { version: 'published', nested: true });

		const query = {
			models: product.models.map((model) =>
				buildBlockRecord({
					item_type: { type: 'item_type', id: modelBlockId },
					name: model.attributes.name,
					drawing: model.attributes.drawing,
					lightsources: model.attributes.lightsources.map((l) =>
						buildBlockRecord({
							item_type: { type: 'item_type', id: lightsourceBlockId },
							...l.attributes,
						}),
					),
					accessories: model.attributes.accessories.map((a) =>
						buildBlockRecord({
							item_type: { type: 'item_type', id: accessoryBlockId },
							...a.attributes,
							price:
								accessories.find((el) => el.article_no === a.attributes.article_no)?.price ||
								a.attributes.price,
						}),
					),
					variants: model.attributes.variants.map((v) =>
						buildBlockRecord({
							item_type: { type: 'item_type', id: variantBlockId },
							...v.attributes,
							price:
								variants.find((el) => el.article_no === v.attributes.article_no)?.price ||
								v.attributes.price,
						}),
					),
				}),
			),
		};
		try {
			if (product.meta.status === 'published') {
				await datoClient.items.update(productId, query);
				await datoClient.items.publish(productId);
			} else await datoClient.items.update(productId, query);

			updated.push(product);
		} catch (err) {
			console.log('ERROR', err);
			errors.push({ product, error: err });
		}
		controller.emit('status', {
			type: 'UPDATE',
			product,
			item: i + 1,
			total: productIds.length,
			article: (article += products[productId].articles),
			totalArticles: articles.length,
			updated,
			notFound,
			errors,
		});
	}
	const log = {
		item: productIds.length,
		total: productIds.length,
		article: articles.length,
		totalArticles: articles.length,
		updated,
		notFound,
		errors,
	};
	controller.emit('status', {
		type: 'END',
		...log,
	});

	fs.writeFileSync('./log.json', JSON.stringify(log, null, 2));
};

const getAllRecords = async (query) => {
	const items = [];

	const client = buildClient({ apiToken: process.env.DATOCMS_API_TOKEN });

	for await (const record of client.items.listPagedIterator({
		...query,
		perPage: 500,
		version: 'published',
		nested: true,
	})) {
		items.push(record);
	}

	return items;
};

module.exports = PricelistController;

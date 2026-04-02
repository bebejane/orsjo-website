const fs = require('fs');
const { buildClient } = require('@datocms/cma-client-node');
const datoClient = buildClient({ apiToken: process.env.DATOCMS_API_TOKEN });
const generatePDF = require('../util/generatePDF');
const uploadPDF = require('../util/uploadPDF');
const EventEmitter = require('events').EventEmitter;

class ProductController extends EventEmitter {
	generate = async (productId, locale) => {
		const product = (
			await datoClient.items.list({
				filter: { type: 'product', fields: { id: { eq: productId } } },
				version: 'published',
			})
		)[0];

		if (!product) throw new Error(`Product not found with id ${productId}`);

		const allCatgories = await datoClient.items.list({ filter: { type: 'product_category' } });
		const categories = allCatgories.filter((c) => product.categories.find((id) => id === c.id));
		const title = `${product.title} - ${categories
			.map((c) => (locale === 'en' ? c.name.en : c.name.sv))
			.join(' · ')} (${locale})`;

		this.emit('status', { type: 'START' });
		this.emit('status', { type: 'GENERATE', productId });

		const pdf = await generatePDF(
			`${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/catalogue/${productId}`,
			title,
			locale
		);

		this.emit('status', { type: 'UPLOAD', productId });

		const upload = await uploadPDF(
			{
				filter: {
					type: 'product',
					fields: { id: { eq: productId } },
				},
			},
			{
				title: pdf.title,
				filePath: pdf.filePath,
				locale,
				tags: ['product-pdf'],
			}
		);

		try {
			if (fs.existsSync(pdf.filePath)) fs.unlinkSync(pdf.filePath);
		} catch (err) {
			console.log('ERROR', `failed to delete file ${pdf.filePath}`);
			console.log('ERROR', err);
		}

		this.emit('status', { type: 'END', productId, uploads: [upload] });
	};
}

module.exports = ProductController;

export async function request(
	path: string,
	method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' = 'GET',
	body?: any,
) {
	console.log(method, path);
	const isBinary = body instanceof Blob;
	const _body = !body ? undefined : !isBinary ? JSON.stringify(body) : body;
	const response = await fetch(`https://mgmtapi.geins.io/API${path}`, {
		method,
		body: _body,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Basic ${process.env.GEINS_MANAGEMENT_API_BASIC_AUTH}`,
			'X-ApiKey': process.env.GEINS_MANAGEMENT_API_KEY!!,
		},
	});
	const data = await response.json();

	if (!response.ok) {
		console.log(body);
		console.log(data, response.status);
		throw new Error(data.Details ?? data.Message);
	}
	return data;
}

export async function createProduct(product: any) {
	console.log('create product');
	const p = await request('/Product?include=Items,Images', 'POST', product);
	return p?.Resource;
}

export async function updateProduct(product: any) {
	const p = await request(`/Product/${product.ProductId}?include=Items,Images`, 'PUT', product);
	return p?.Resource;
}

export async function removeProduct(id: string) {
	const p = await request(`/Product/${id}`, 'DELETE');
	return p;
}

export async function getProduct(id: number) {
	const p = await request(`/Product/${id}?include=Prices`);
	console.log('product', p);
	return p;
}

export async function getProducts() {
	const p = await request('/Product/Query?include=Prices,Urls', 'POST', {});
	return p?.Resource;
}

export async function getProductsBySlug(slug: string) {
	const facet = `p_2_2_${slug}`;
	const c = await getCategories();
	const CategoryIds = c
		.filter((c: any) => c.Names[0].Content === slug)
		.map((c: any) => c.CategoryId);
	const p = await request(`/Product/Query?include=Prices,Categories`, 'POST', {
		CategoryIds,
	});
	return p?.Resource;
}

export async function generateImageBlob(
	url: string,
	fileName?: string,
): Promise<{ blob: Blob; fileName: string }> {
	fileName = fileName ?? url.split('/').pop()?.split('?')[0];
	const res = await fetch(url);
	const blob = await res.blob();
	if (!blob) throw new Error('Invalid blob');
	if (!fileName) throw new Error('Invalid file name');
	return { blob, fileName };
}

export async function createProductImage(productId: number, url: string, name?: string) {
	const { blob, fileName } = await generateImageBlob(url, name);
	const c = await request(
		`/Product/${productId}/Image/${fileName}?isPrimaryImage=true`,
		'POST',
		blob,
	);
	return c;
}

export async function updateProductImage(productId: number, url: string, name?: string) {
	const { blob, fileName } = await generateImageBlob(url, name);
	const c = await request(
		`/Product/${productId}/Image/${fileName}?isPrimaryImage=true`,
		'PUT',
		blob,
	);
	return c;
}

export async function createProductItem(item: any) {
	const c = await request(`/Product/${item.ProductId}/Item`, 'POST', item);
	return c.Resource;
}

export async function updateProductItem(item: any) {
	const c = await request(`/Product/Item/${item.ItemId}`, 'PUT', item);
	return c.Resource;
}

export async function getProductByArticleNo(artNos: string[]) {
	const p = await request(`/Product/Query`, 'POST', {
		ArticleNumbers: artNos,
	});
	return p?.Resource;
}

export async function updateProductParameterValue(
	productId: number,
	parameterId: number,
	value: string,
) {
	const c = await request(`/Product/${productId}/Parameter/${parameterId}`, 'POST', {
		Value: value,
	});
	return c.Resource;
}

export async function getCategories() {
	const c = await request('/Category/Query', 'POST');
	return c;
}

export async function createCategory(name: string, title: string) {
	const c = await request('/Category', 'POST', {
		Names: [{ LanguageCode: 'sv', Content: name }],
		Meta: { Titles: [{ LanguageCode: 'sv', Content: title }] },
		Active: true,
	});
	return c.Resource;
}

export async function updateCategory(id: number, name: string, title: string) {
	const c = await request(`/Category/${id}`, 'PUT', {
		Names: [{ LanguageCode: 'sv', Content: name }],
		Meta: { Titles: [{ LanguageCode: 'sv', Content: title }] },
		Active: true,
	});
	return c;
}

export async function deleteCategory(id: string) {
	const c = await request(`/Category/${id}`, 'DELETE');
	return c;
}

export async function getBrands() {
	const c = await request('/Brand/Query', 'POST');
	return c;
}

export async function getPriceLists() {
	const c = await request('/PriceList/List', 'GET');
	return c;
}

export async function createPriceList(pricelist: any) {
	const c = await request('/PriceList', 'POST', pricelist);
	return c;
}

export async function updatePriceList(id: string, pricelist: any) {
	const c = await request(`/PriceList/${id}`, 'PUT', pricelist);
	return c;
}

export async function deletePriceList(id: string) {
	const c = await request(`/PriceList/${id}`, 'DELETE');
	return c;
}

export async function updatePriceListPrices(price: any[]) {
	const c = await request(`/PriceList/Price`, 'PUT', price);
	return c;
}

export async function getMarkets() {
	const c = await request('/Market/List', 'GET');
	return c;
}

export async function getVariantGroup(id: number) {
	const c = await request(`/VariantGroup/${id}`, 'GET');
	return c.Resource;
}
export async function getVariantGroupProducts(id: number) {
	const c = await request(`/VariantGroup/${id}?include=Products`, 'GET');
	return c.Resource.Products;
}

export async function createVariantGroup(group: any) {
	const c = await request('/VariantGroup', 'POST', group);
	return c.Resource;
}

export async function updateVariantGroups(id: string, group: any) {
	const c = await request(`/VariantGroup/${id}`, 'PUT', group);
	return c.Resource;
}

export async function deleteVariantGroups(id: string) {
	const c = await request(`/VariantGroup/${id}`, 'DELETE');
	return c.Resource;
}

export async function addProductToVariantGroup(id: string, productId: string) {
	const c = await request(`/VariantGroup/${id}/${productId}`, 'PUT');
	return c.Resource;
}

export async function updateStock(
	stock: { Id: string; Stock: number; StockSellable: number; StockType: number }[],
) {
	const c = await request(`/Product/Stock`, 'PUT', stock);
	return c.Resource;
}

export async function getPaymentMethods() {
	const c = await request('/Payment/Query', 'POST', {
		SiteId: 1,
	});
	return c;
}

export async function getShippingOptions() {
	const c = await request('/Shipping/Query', 'POST', {});
	console.log(c);
	return c.ShippingOptions;
}

export const generateThumbnailUrl = (url: string | undefined | null): string | null | undefined => {
	if (!url) url = 'https://www.datocms-assets.com/62617/1771852945-no-product-image.png';
	const u = new URL(url);
	const size = 400;
	const pad = size * 0.1;
	const imgixUrl = `${u.origin}${u.pathname}?w=${size}&h=${size}&fit=fill&auto=format&bg=fff&pad=${pad}`;
	return imgixUrl;
};

export async function request(
	path: string,
	method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' = 'GET',
	body?: any,
) {
	console.log(method, path);
	const isBinary = body instanceof Blob;
	const response = await fetch(`https://mgmtapi.geins.io/API${path}`, {
		method,
		body: !body ? undefined : !isBinary ? JSON.stringify(body) : body,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Basic ${process.env.GEINS_MANAGEMENT_API_BASIC_AUTH}`,
			'X-ApiKey': process.env.GEINS_MANAGEMENT_API_KEY!!,
		},
	});
	const data = await response.json();
	if (!response.ok) {
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
	const p = await request(`/Product/${id}`);
	console.log('product', p);
	return p;
}

export async function getProducts() {
	const p = await request('/Product/Query', 'POST', {});
	return p?.Resource;
}

export async function createProductImage(productId: number, url: string) {
	const fileName = url.split('/').pop()?.split('?')[0];
	const res = await fetch(url);
	const blob = await res.blob();
	const c = await request(
		`/Product/${productId}/Image/${fileName}?isPrimaryImage=true`,
		'POST',
		blob,
	);
	return c;
}

export async function updateProductImage(productId: number, url: string) {
	const fileName = url.split('/').pop()?.split('?')[0];
	const res = await fetch(url);
	const blob = await res.blob();
	const c = await request(
		`/Product/${productId}/Image/${fileName}?isPrimaryImage=true`,
		'PUT',
		blob,
	);
	return c;
}

export async function createProductItem(item: any) {
	const c = await request(`/Product/${item.ProductId}/Item`, 'POST', item);
	return c;
}

export async function updateProductItem(item: any) {
	const c = await request(`/Product/Item/${item.ItemId}`, 'PUT', item);
	return c;
}

export async function getProductByArticleNo(artNos: string[]) {
	const p = await request(`/Product/Query`, 'POST', {
		ArticleNumbers: artNos,
	});
	return p?.Resource;
}

export async function getCategories() {
	const c = await request('/Category/Query', 'POST');
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
	const c = await request(`/API/PriceList/${id}`, 'PUT', pricelist);
	return c;
}

export async function updatePriceListPrices(id: string, price: any) {
	const c = await request(`/API/PriceList/Price`, 'PUT', price);
	return c;
}

export async function getMarkets() {
	const c = await request('/Market/List', 'GET');
	return c;
}

export function generateThumbnailUrl(url: string | undefined | null): string {
	if (!url) return '';
	const u = new URL(url);
	const size = 2000;
	const pad = size * 0.1;
	const imgixUrl = `${u.origin}${u.pathname}?w=${size}&h=${size}&fit=fill&auto=format&bg=fff&pad=${pad}`;
	return imgixUrl;
}

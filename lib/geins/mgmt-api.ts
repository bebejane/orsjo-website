import fs from 'fs';

export async function request(
	path: string,
	method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' = 'GET',
	body?: any,
) {
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
	if (response.status !== 200) {
		console.log(data, response.status);
		throw new Error(data.Details ?? data.Message);
	}
	return data;
}

export async function createProductImage(productId: number, url: string) {
	const fileName = url.split('/').pop();
	const res = await fetch(url);
	const blob = await res.blob();
	const c = await request(`/Product/${productId}/Image/${fileName}`, 'POST', blob);
	return c;
}

export async function getProduct(id: number) {
	const p = await request(`/Product/${id}`);
	console.log('product', p);
	return p;
}

export async function getProducts() {
	const p = await request('/Product/Items');
	console.log('products', p);
	return p;
}

export async function createProduct(product: any) {
	const p = await request('/Product', 'POST', product);
	return p;
}

export async function updateProduct(product: any) {
	const p = await request('/Product', 'PATCH', product);
	return p;
}

export async function removeProduct(id: string) {
	const p = await request(`/Product/${id}`, 'DELETE');
	return p;
}

export async function getCategories() {
	const c = await request('/Category/Query', 'POST');
	return c;
}

export async function getBrands() {
	const c = await request('/Brand/Query', 'POST');
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

export async function request(
	path: string,
	params?: any,
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
) {
	const response = await fetch(`https://mgmtapi.geins.io/API${path}`, {
		method,
		body: params ? JSON.stringify(params) : undefined,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Basic ${process.env.GEINS_MANAGEMENT_API_BASIC_AUTH}`,
			'X-ApiKey': process.env.GEINS_MANAGEMENT_API_KEY!!,
		},
	});
	const data = await response.json();
	return data;
}

export async function getProducts() {
	const p = await request('/Product/Items');
	console.log('products', p);
	return p;
}

export async function getProduct(id: string) {
	const p = await request(`/Product/Items/${id}`);
	console.log('product', p);
	return p;
}

export async function createProduct(product: any) {
	console.log(product);
	const p = await request('/Product', product, 'POST');
	console.log('product', p);
	return p;
}

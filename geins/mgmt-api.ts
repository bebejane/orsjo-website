import {
	Market,
	PricelistPrice,
	Product,
	ProductCreateInput,
	ProductUpdateInput,
	ProductItemCreateInput,
	ProductItemUpdateInput,
	Category,
	VariantGroup,
	VariantGroupCreateInput,
	VariantGroupUpdateInput,
	StockUpdate,
	PaymentMethod,
	ShippingOption,
	PriceList,
	PriceListCreateInput,
	PriceListUpdateInput,
	Brand,
} from '@/geins/mgmt-api.types';

export async function request(
	path: string,
	method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' = 'GET',
	body?: any,
) {
	//console.log(method, path);
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

export async function createProduct(product: ProductCreateInput): Promise<Product> {
	console.log('create product');
	const p = await request('/Product?include=Items,Images', 'POST', product);
	return p?.Resource;
}

export async function updateProduct(product: ProductUpdateInput): Promise<Product> {
	const p = await request(`/Product/${product.ProductId}?include=Items,Images`, 'PUT', product);
	return p?.Resource;
}

export async function removeProduct(id: number) {
	const p = await request(`/Product/${id}`, 'DELETE');
	return p;
}

export async function getProduct(id: number) {
	const p = await request(`/Product/${id}?include=Prices`);
	console.log('product', p);
	return p;
}

export async function getProducts(): Promise<Product[]> {
	const p = await request('/Product/Query?include=Prices,Urls', 'POST', {});
	return p?.Resource;
}

export async function getProductsBySlug(slug: string) {
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

export async function createProductItem(item: ProductItemCreateInput) {
	const c = await request(`/Product/${item.ProductId}/Item`, 'POST', item);
	return c.Resource;
}

export async function updateProductItem(item: ProductItemUpdateInput) {
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

export async function getCategories(): Promise<Category[]> {
	const c = await request('/Category/Query', 'POST');
	return c;
}

export async function createCategory(name: string, title: string): Promise<Category> {
	const c = await request('/Category', 'POST', {
		Names: [{ LanguageCode: 'sv', Content: name }],
		Meta: { Titles: [{ LanguageCode: 'sv', Content: title }] },
		Active: true,
	});
	return c.Resource;
}

export async function updateCategory(id: number, name: string, title: string): Promise<Category> {
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

export async function getBrands(): Promise<Brand[]> {
	const c = await request('/Brand/Query', 'POST');
	return c;
}

export async function getPriceLists(): Promise<PriceList[]> {
	const c = await request('/PriceList/List', 'GET');
	return c;
}

export async function createPriceList(pricelist: PriceListCreateInput) {
	const c = await request('/PriceList', 'POST', pricelist);
	return c;
}

export async function updatePriceList(id: string, pricelist: PriceListUpdateInput) {
	const c = await request(`/PriceList/${id}`, 'PUT', pricelist);
	return c;
}

export async function deletePriceList(id: string) {
	const c = await request(`/PriceList/${id}`, 'DELETE');
	return c;
}

export async function updatePriceListPrices(prices: Omit<PricelistPrice, 'PriceListId'>[]) {
	// const c = await request(`/PriceList/Price`, 'PUT', { ...price, PriceListId: 1000000 });
	const c = await request(
		`/PriceList/Price`,
		'PUT',
		prices.map((p) => ({ ...p, PriceListId: 1000000 })),
	);
	return c;
}

export async function getMarkets(): Promise<Market[]> {
	const c = await request('/Market/List', 'GET');
	return c;
}

export async function getVariantGroup(id: number): Promise<VariantGroup> {
	const c = await request(`/VariantGroup/${id}`, 'GET');
	return c.Resource;
}
export async function getVariantGroupProducts(id: number): Promise<Product[]> {
	const c = await request(`/VariantGroup/${id}?include=Products`, 'GET');
	return c.Resource.Products;
}

export async function createVariantGroup(group: VariantGroupCreateInput): Promise<VariantGroup> {
	const c = await request('/VariantGroup', 'POST', group);
	return c.Resource;
}

export async function updateVariantGroups(
	id: string,
	group: VariantGroupUpdateInput,
): Promise<VariantGroup> {
	const c = await request(`/VariantGroup/${id}`, 'PUT', group);
	return c.Resource;
}

export async function deleteVariantGroups(id: string): Promise<void> {
	const c = await request(`/VariantGroup/${id}`, 'DELETE');
	return c.Resource;
}

export async function addProductToVariantGroup(
	id: string,
	productId: string,
): Promise<VariantGroup> {
	const c = await request(`/VariantGroup/${id}/${productId}`, 'PUT');
	return c.Resource;
}

export async function updateStock(stock: StockUpdate[]): Promise<void> {
	const c = await request(`/Product/Stock`, 'PUT', stock);
	return c.Resource;
}

export async function getPaymentMethods(): Promise<PaymentMethod[]> {
	const c = await request('/Payment/Query', 'POST', {
		SiteId: 1,
	});
	return c;
}

export async function getShippingOptions(): Promise<ShippingOption[]> {
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

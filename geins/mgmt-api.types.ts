// ===========================================
// Geins Management API Types
// ===========================================

// ===========================================
// Common Types
// ===========================================

export type LocalizedContent = {
	LanguageCode: string;
	Content: string;
};

export type ApiResponse<T> = {
	Resource: T;
	Message?: string;
	Details?: string;
};

export type PaginationInfo = {
	TotalCount: number;
	Page: number;
	PageSize: number;
	TotalPages: number;
};

// ===========================================
// Market Types
// ===========================================

export type Market = {
	Id: number;
	ChannelId: string;
	Name: string;
	DisplayName: string;
	Url: string;
	Currency: string;
	VatRate: number;
	MarketPrefix: string;
	CountryId: number;
	CurrencyId: number;
	CurrencyRate: number;
	LanguageId: number;
	Language: string;
	Languages: Language[];
	Countries: Country[];
	Currencies: Currency[];
};

export type Language = {
	LanguageId: number;
	Name: string;
	Code: string;
};

export type Country = {
	CountryId: number;
	Name: string;
	Code: string;
	VatRate: number;
	CurrencyId: number;
};

export type Currency = {
	Name: string;
	Code: string;
	CurrencyId: number;
	CurrencyRate: number;
};

// ===========================================
// Product Types
// ===========================================

export type Product = {
	ProductId: number;
	ArticleNumber: string;
	Names: LocalizedContent[];
	DateCreated: string;
	DateUpdated: string;
	DateFirstAvailable: string;
	MaxDiscountPercentage: number;
	Active: boolean;
	PurchasePrice: number;
	PurchasePriceCurrency: string;
	ShortTexts: LocalizedContent[];
	LongTexts: LocalizedContent[];
	TechTexts: LocalizedContent[];
	Items: ProductItem[];
	Prices: ProductPrice[];
	Categories: ProductCategory[];
	Images: ProductImage[];
	BrandId: number;
	BrandName: string;
	SupplierId: number;
	SupplierName: string;
	ParameterValues: ProductParameterValue[];
	Variants: ProductVariant[];
	Markets: ProductMarket[];
	Vat: number;
	PrimaryImage: string;
	FreightClassId: number;
	IntrastatCode: string;
	CountryOfOrigin: string;
	VariantGroupId: number;
	VatId: number;
	ExternalId: string;
	ActivationDate: string;
	Feeds: ProductFeed[];
	Urls: ProductUrl[];
	MainCategoryId: number;
	RelatedProducts: RelatedProduct[];
	DiscountCampaigns: DiscountCampaign[];
	LowestPrice: LowestPrice;
	SortOrder: ProductSortOrder;
	Weight: number;
	Length: number;
	Width: number;
	Height: number;
};

export type ProductItem = {
	ItemId: string;
	ProductId: number;
	ArticleNumber: string;
	Name: string;
	Active: boolean;
	Stock: number;
	StockSellable: number;
	Attributes: ProductItemAttribute[];
};

export type ProductItemAttribute = {
	Name: string;
	Value: string;
};

export type ProductPrice = {
	ProductId: number;
	PriceListId: number;
	PriceListName: string;
	PriceIncVat: number;
	PriceExVat: number;
	VatRate: number;
	Country: string;
	Currency: string;
	StaggeredCount: number;
	ValidFrom: string;
	ValidTo: string;
};

export type ProductCategory = {
	CategoryId: number;
	Name: string;
};

export type ProductImage = {
	ImageId: number;
	Url: string;
	FileName: string;
	IsPrimary: boolean;
	SortOrder: number;
};

export type ProductParameterValue = {
	ParameterId: number;
	Name: string;
	Value: string;
};

export type ProductVariant = {
	VariantId: number;
	ProductId: number;
	Name: string;
	Active: boolean;
};

export type ProductMarket = {
	Id: number;
	ChannelId: number | string;
};

export type ProductFeed = {
	FeedId: number;
	Name: string;
};

export type ProductUrl = {
	Url: string;
	Market: number;
	Countries: string[];
	Language: string;
};

export type RelatedProduct = {
	ProductId: number;
	ArticleNumber: string;
	Name: string;
};

export type DiscountCampaign = {
	CampaignId: number;
	Name: string;
	StartDate: string;
	EndDate: string;
	DiscountPercentage: number;
};

export type LowestPrice = {
	Price: number;
	Currency: string;
	Date: string;
};

export type ProductSortOrder = {
	Default: number;
	Custom1: number;
	Custom2: number;
	Custom3: number;
	Custom4: number;
	Custom5: number;
};

// ===========================================
// Product Query Types
// ===========================================

export type ProductQuery = {
	ArticleNumbers?: string[];
	CategoryIds?: number[];
	BrandIds?: number[];
	SupplierIds?: number[];
	Active?: boolean;
	Search?: string;
	Page?: number;
	PageSize?: number;
	SortBy?: string;
	SortDirection?: 'asc' | 'desc';
};

// ===========================================
// Product Create/Update Types
// ===========================================

export type ProductCreateInput = {
	ProductId?: number | string | null;
	ArticleNumber?: string | null;
	Names?: LocalizedContent[];
	Active?: boolean;
	BrandId?: number;
	CategoryIds?: number[];
	Markets?: ProductMarket[];
	ShortTexts?: LocalizedContent[];
	LongTexts?: LocalizedContent[];
	TechTexts?: LocalizedContent[];
	VatId?: number;
	Weight?: number;
	Length?: number;
	Width?: number;
	Height?: number;
	FreightClassId?: number;
	IntrastatCode?: string;
	CountryOfOrigin?: string;
	ExternalId?: string;
	MainCategoryId?: number;
	SortOrder?: Partial<ProductSortOrder>;
};

export type ProductUpdateInput = ProductCreateInput & {
	ProductId: number | string | null;
};

// ===========================================
// Product Item Types
// ===========================================

export type ProductItemCreateInput = {
	ProductId: number;
	ArticleNumber: string;
	Name: string;
	Active?: boolean;
	Attributes?: ProductItemAttribute[];
};

export type ProductItemUpdateInput = Partial<ProductItemCreateInput> & {
	ItemId: string;
};

// ===========================================
// Stock Types
// ===========================================

export type StockUpdate = {
	Id: string;
	Stock: number;
	StockSellable: number;
	StockType: number;
};

// ===========================================
// Category Types
// ===========================================

export type Category = {
	CategoryId: number;
	Names: LocalizedContent[];
	Meta: CategoryMeta;
	Active: boolean;
	ParentId: number;
	SortOrder: number;
	ImageUrl: string;
	Children: Category[];
};

export type CategoryMeta = {
	Titles: LocalizedContent[];
	Descriptions: LocalizedContent[];
	Keywords: LocalizedContent[];
};

export type CategoryCreateInput = {
	Names: LocalizedContent[];
	Meta?: CategoryMeta;
	Active?: boolean;
	ParentId?: number;
	SortOrder?: number;
};

export type CategoryUpdateInput = Partial<CategoryCreateInput> & {
	CategoryId?: number;
};

// ===========================================
// Brand Types
// ===========================================

export type Brand = {
	BrandId: number;
	Name: string;
	Description: string;
	ImageUrl: string;
	ExternalId: string;
};

export type BrandCreateInput = {
	Name: string;
	Description?: string;
	ImageUrl?: string;
	ExternalId?: string;
};

export type BrandUpdateInput = Partial<BrandCreateInput> & {
	BrandId: number;
};

// ===========================================
// Price List Types
// ===========================================

export type PriceList = {
	PriceListId: number;
	Name: string;
	Description: string;
	Currency: string;
	CountryId: number;
	Active: boolean;
	StartDate: string;
	EndDate: string;
};

export type PricelistPrice = {
	Price: number;
	ProductId: number;
	Currency: string;
	PriceListId?: number;
};

export type PriceListCreateInput = {
	Name: string;
	Description?: string;
	Currency: string;
	CountryId?: number;
	Active?: boolean;
	StartDate?: string;
	EndDate?: string;
};

export type PriceListUpdateInput = Partial<PriceListCreateInput> & {
	PriceListId: number;
};

// ===========================================
// Variant Group Types
// ===========================================

export type VariantGroup = {
	VariantGroupId: number;
	Name: string;
	Description: string;
	Products: Product[];
};

export type VariantGroupCreateInput = {
	Name: string;
	Description?: string;
};

export type VariantGroupUpdateInput = Partial<VariantGroupCreateInput> & {
	VariantGroupId: number;
};

// ===========================================
// Payment Types
// ===========================================

export type PaymentMethod = {
	PaymentMethodId: number;
	Name: string;
	Description: string;
	Active: boolean;
	Fee: number;
	FeeType: 'fixed' | 'percentage';
	IconUrl: string;
};

export type PaymentMethodQuery = {
	SiteId: number;
	Active?: boolean;
};

// ===========================================
// Shipping Types
// ===========================================

export type ShippingOption = {
	ShippingOptionId: number;
	Name: string;
	Description: string;
	Active: boolean;
	Price: number;
	Fee: number;
	MinWeight: number;
	MaxWeight: number;
	DeliveryTime: number;
	IconUrl: string;
};

export type ShippingQuery = {
	Active?: boolean;
	Weight?: number;
	CountryId?: number;
};

// ===========================================
// Parameter Types
// ===========================================

export type Parameter = {
	ParameterId: number;
	Name: string;
	Type: 'string' | 'number' | 'boolean' | 'date';
	Values: ParameterValue[];
};

export type ParameterValue = {
	ParameterId: number;
	Value: string;
};

// ===========================================
// Supplier Types
// ===========================================

export type Supplier = {
	SupplierId: number;
	Name: string;
	Description: string;
	Email: string;
	Phone: string;
	Address: Address;
};

export type Address = {
	Street: string;
	City: string;
	ZipCode: string;
	Country: string;
	CountryCode: string;
};

// ===========================================
// Order Types (for reference)
// ===========================================

export type OrderStatus =
	| 'pending'
	| 'processing'
	| 'shipped'
	| 'delivered'
	| 'cancelled'
	| 'refunded';

export type Order = {
	OrderId: number;
	OrderNumber: string;
	Status: OrderStatus;
	CustomerId: number;
	TotalAmount: number;
	Currency: string;
	Items: OrderItem[];
	CreatedDate: string;
	UpdatedDate: string;
};

export type OrderItem = {
	ItemId: number;
	ProductId: number;
	ArticleNumber: string;
	Name: string;
	Quantity: number;
	UnitPrice: number;
	TotalPrice: number;
};

// ===========================================
// Customer Types
// ===========================================

export type Customer = {
	CustomerId: number;
	Email: string;
	FirstName: string;
	LastName: string;
	Phone: string;
	Address: Address;
	CreatedDate: string;
	UpdatedDate: string;
};

// ===========================================
// Balance Types
// ===========================================

export type BalanceType = {
	BalanceTypeId: number;
	Name: string;
	Description: string;
};

// ===========================================
// Webhook Types
// ===========================================

export type Webhook = {
	WebhookId: number;
	Name: string;
	Url: string;
	Events: WebhookEvent[];
	Active: boolean;
	Secret: string;
};

export type WebhookEvent =
	| 'product.created'
	| 'product.updated'
	| 'product.deleted'
	| 'order.created'
	| 'order.updated'
	| 'order.cancelled'
	| 'customer.created'
	| 'customer.updated'
	| 'stock.updated';

// ===========================================
// Feed Types
// ===========================================

export type Feed = {
	FeedId: number;
	Name: string;
	Type: 'google' | 'facebook' | 'custom';
	Url: string;
	Active: boolean;
	LastRun: string;
};

// ===========================================
// Vat Types
// ===========================================

export type VatRate = {
	VatId: number;
	Name: string;
	Rate: number;
	CountryCode: string;
};

// ===========================================
// Freight Class Types
// ===========================================

export type FreightClass = {
	FreightClassId: number;
	Name: string;
	Description: string;
	Weight: number;
};

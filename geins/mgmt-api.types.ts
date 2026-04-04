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

export type PricelistPrice = {
	Price: number;
	ProductId: number;
	Currency: string;
};

export type Product = {
	ProductId: number;
	ArticleNumber: string;
	Names: any;
	DateCreated: string;
	DateUpdated: string;
	DateFirstAvailable: string;
	MaxDiscountPercentage: number;
	Active: boolean;
	PurchasePrice: number;
	PurchasePriceCurrency: string;
	ShortTexts: any;
	LongTexts: any;
	TechTexts: any;
	Items: any;
	Prices: Array<{
		ProductId: number;
		PriceListId: number;
		PriceListName: string;
		PriceIncVat: number;
		PriceExVat: number;
		VatRate: number;
		Country: string;
		Currency: string;
		StaggeredCount: number;
		ValidFrom: any;
		ValidTo: any;
	}>;
	Categories: any;
	Images: any;
	BrandId: number;
	BrandName: string;
	SupplierId: number;
	SupplierName: any;
	ParameterValues: any;
	Variants: any;
	Markets: any;
	Vat: number;
	PrimaryImage: string;
	FreightClassId: number;
	IntrastatCode: any;
	CountryOfOrigin: any;
	VariantGroupId: any;
	VatId: number;
	ExternalId: any;
	ActivationDate: any;
	Feeds: any;
	Urls: Array<{
		Url: string;
		Market: number;
		Countries: Array<string>;
		Language: string;
	}>;
	MainCategoryId: number;
	RelatedProducts: any;
	DiscountCampaigns: any;
	LowestPrice: any;
	SortOrder: {
		Default: number;
		Custom1: number;
		Custom2: number;
		Custom3: number;
		Custom4: number;
		Custom5: number;
	};
	Weight: number;
	Length: number;
	Width: number;
	Height: number;
};

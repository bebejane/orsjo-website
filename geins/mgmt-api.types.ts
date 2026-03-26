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

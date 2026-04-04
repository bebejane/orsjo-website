'use client';

import { CurrencyRate } from '@/lib/currency';
import { createContext, useContext } from 'react';

export const CatalogueContext = createContext<any>(null);

type CatalogueContextType = {
	locale: SiteLocale;
	currency: CurrencyRate;
	messages: Record<string, Record<string, string>>;
};

type CatalogueContextProps = CatalogueContextType & {
	children: React.ReactNode | React.ReactNode[];
};

export const CatalogueProvider = ({
	children,
	locale,
	messages,
	currency,
}: CatalogueContextProps) => {
	return (
		<CatalogueContext.Provider
			value={{
				locale,
				messages,
				currency,
			}}
		>
			{children}
		</CatalogueContext.Provider>
	);
};

export const useCatalogue = (): CatalogueContextType => {
	const context = useContext<CatalogueContextType>(CatalogueContext);
	if (!context) {
		throw new Error('useCatalogue must be used within a CatalogueProvider');
	}
	return context;
};

export const useDictionary = (key: string) => {
	const context = useContext(CatalogueContext);
	if (!context) {
		throw new Error('useDictionary must be used within a CatalogueProvider');
	}
	return (prop: string) => context.messages[key][prop];
};

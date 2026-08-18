'use client';

import { CurrencyRate } from '@/lib/currency';
import { createContext, useContext } from 'react';

export const PricelistContext = createContext<any>(null);

type PricelistContextType = {
	locale: SiteLocale;
	language: SiteLocale;
	currency: CurrencyRate;
	messages: Record<string, Record<string, string>>;
};

type PricelistContextProps = PricelistContextType & {
	children: React.ReactNode | React.ReactNode[];
};

export const PricelistProvider = ({
	children,
	locale,
	language,
	messages,
	currency,
}: PricelistContextProps) => {
	return (
		<PricelistContext.Provider
			value={{
				locale,
				language,
				messages,
				currency,
			}}
		>
			{children}
		</PricelistContext.Provider>
	);
};

export const usePricelist = (): PricelistContextType => {
	const context = useContext<PricelistContextType>(PricelistContext);
	if (!context) {
		throw new Error('usePricelist must be used within a PricelistProvider');
	}
	return context;
};

export const useDictionary = (key: string) => {
	const context = useContext(PricelistContext);
	if (!context) {
		throw new Error('useDictionary must be used within a PricelistProvider');
	}
	return (prop: string) => context.messages[key][prop];
};

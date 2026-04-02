'use client';

import { createContext, useContext } from 'react';

export const DictionaryContext = createContext<any>(null);

type DictionaryContextType = {
	locale: string;
	messages: Record<string, Record<string, string>>;
	children: React.ReactNode | React.ReactNode[];
};

export const DictionaryProvider = ({ children, locale, messages }: DictionaryContextType) => {
	return (
		<DictionaryContext.Provider
			value={{
				locale,
				messages,
			}}
		>
			{children}
		</DictionaryContext.Provider>
	);
};

export const useDictionary = (key: string) => {
	const context = useContext(DictionaryContext);
	if (!context) {
		throw new Error('useDictionary must be used within a DictionaryProvider');
	}
	return (prop: string) => context.messages[key][prop];
};

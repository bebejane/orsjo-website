import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
<<<<<<< HEAD
import localization from '../localization.json';

export const locales = localization.availableCountries.map(({ isoCode }) => isoCode.toLowerCase());
=======
import markets from '../markets.json';

export const locales = markets.map(({ country }) => country.code.toLowerCase());
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
export const defaultLocale = 'se';
export const localePrefix = 'as-needed';
export const routing = defineRouting({
	locales,
	localePrefix,
	defaultLocale,
	localeDetection: false,
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);

import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import markets from '../markets.json';

export const locales = markets.map(({ country }) => country.code.toLowerCase());
export const defaultLocale = 'se';
export const localePrefix = 'as-needed';
export const routing = defineRouting({
	locales,
	localePrefix,
	defaultLocale,
	localeDetection: false,
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);

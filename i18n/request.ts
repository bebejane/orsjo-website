import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Locale } from 'next-intl';

export default getRequestConfig(async ({ requestLocale }) => {
	const locale = (await requestLocale) ?? (routing.defaultLocale as Locale);
	if (!routing.locales.includes(locale as any)) notFound();
	return {
		locale,
		messages: {},
	};
});

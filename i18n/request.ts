import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from '@/i18n/routing';
<<<<<<< HEAD

export default getRequestConfig(async ({ requestLocale }) => {
	const locale = (await requestLocale) ?? (routing.defaultLocale as CountryCode);
	if (!routing.locales.includes(locale as any)) notFound();
	const allMessages: any = (await import(`./messages.json`)).default;
	const messages: any = {};

	Object.keys(allMessages).forEach((section) => {
		messages[section] = {};
		Object.keys(allMessages[section]).forEach((key) => {
			messages[section][key] = allMessages[section][key][locale];
		});
	});

	return {
		locale,
		messages,
=======
import { Locale } from 'next-intl';

export default getRequestConfig(async ({ requestLocale }) => {
	const locale = (await requestLocale) ?? (routing.defaultLocale as Locale);
	if (!routing.locales.includes(locale as any)) return notFound();
	return {
		locale,
		messages: {},
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	};
});

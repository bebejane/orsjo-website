import s from './page.module.scss';
import cn from 'classnames';
import { Modal, Loader } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { ContactDocument } from '@/graphql';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import ContactForm from './ContactForm';
import { Metadata } from 'next';
import Link from 'next/link';
import { DraftMode } from 'next-dato-utils/components';

export default async function ContactModalPage({
	params,
}: PageProps<'/[locale]/contact/message-us'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const { contact, draftUrl } = await apiQuery(ContactDocument);

	if (!contact) return notFound();

	return (
		<>
			<div className={cn(s.contact, s.show)}>
				<div className={s.wrap}>
					<h1>Contact us</h1>
					<div className={s.text}>
						<p className='medium'>
							Vi har samlat de vanligastefrågorna med svar på vår{' '}
							<a href='https://www.orsjo.com/support/faq'>FAQ-sida.</a>
						</p>
						<p className='medium'>
							We&apos;ve collected the most common questions on our{' '}
							<a href='https://www.orsjo.com/support/faq'>FAQ page.</a>
						</p>
					</div>
					<ContactForm contactFormMessage={contact.contactFormMessage} />
				</div>
				<Link href='/contact' className={s.close} prefetch={true} replace={true}>
					×
				</Link>
			</div>
			<DraftMode url={draftUrl} path='/contact/message-us' />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Contact - Message Us',
	};
}

import s from './page.module.scss';
import cn from 'classnames';
import { PrivacyPolicyDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Section } from '@/components';
import { Metadata } from 'next';
import { DraftMode, StructuredContent } from 'next-dato-utils/components';

export default async function PrivacyPolicy({
	params,
}: PageProps<'/[locale]/support/privacy-policy'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

	const { privacyPolicy, draftUrl } = await apiQuery(PrivacyPolicyDocument);
	if (!privacyPolicy) return notFound();

	return (
		<>
			<Section className={s.intro} top={true}>
				<h1 className='topMargin'>{privacyPolicy.title}</h1>
				<p>{privacyPolicy.intro}</p>
			</Section>
			<Section className={s.policies}>
				<ul>
					{privacyPolicy.policies.map(({ id, title, content }, i) => (
						<li key={id}>
							<div className={s.header}>
								<h2 className={s.title}>{title}</h2>
							</div>
							<div
								className='medium'
								data-datocms-content-group={true}
								data-datocms-content-link-source={JSON.stringify(content)}
							>
								<StructuredContent className={cn(s.text, 'medium')} content={content} />
							</div>
						</li>
					))}
				</ul>
			</Section>
			<DraftMode url={draftUrl} path='/support/privacy-policy' />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Privacy Policy',
	};
}

import s from './page.module.scss';
import { FaqStartDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';
import { PageProps } from '@/lib/context/page';
import { Section } from '@/components';
import FaqList from '@/app/support/faq/FaqList';

export default async function Faqs() {
	const { faqs, faqStart } = await apiQuery<FaqStartQuery, FaqStartQueryVariables>(
		FaqStartDocument
	);
	if (!faqs || !faqStart) return notFound();

	return (
		<>
			<Section className={s.intro} top={true}>
				<h1 className='topMargin'>{faqStart.title}</h1>
				<p>{faqStart.intro}</p>
			</Section>
			<FaqList faqs={faqs} />
		</>
	);
}

Faqs.page = { title: 'FAQ', layout: 'normal', color: '--copper', menu: 'inverted' } as PageProps;

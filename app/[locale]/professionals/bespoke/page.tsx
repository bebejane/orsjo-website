import s from './page.module.scss';
import { BespokeDocument } from '@/graphql';
import Link from '@/components/nav/Link';
<<<<<<< HEAD
import { Markdown } from 'next-dato-utils/components';
=======
import { DraftMode, Markdown } from 'next-dato-utils/components';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
import { Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import BespokeHeader from './BespokeHeader';
import { Metadata } from 'next';
import BespokeProjects from './BespokeProjects';
<<<<<<< HEAD
=======
import { buildMetadata } from '@/app/[locale]/layout';
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

export default async function Bespoke({ params }: PageProps<'/[locale]/professionals/bespoke'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) notFound();
	setRequestLocale(locale);

<<<<<<< HEAD
	const { bespoke } = await apiQuery(BespokeDocument);
=======
	const { bespoke, draftUrl } = await apiQuery(BespokeDocument);
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	if (!bespoke) notFound();

	return (
		<>
			<BespokeHeader bespoke={bespoke} />
			<Section name='Intro' className={s.intro} type='margin' bgColor={'--gray'}>
				<h1>{bespoke.title}</h1>
				<Markdown className={s.text} content={bespoke.intro} />
			</Section>
			<BespokeProjects bespoke={bespoke} />
			<Section name='Outro' className={s.outro} type='full' bgColor={'--gray'}>
				<div className={s.innerWrap}>
					<Markdown className={s.text} content={bespoke.outro} />
				</div>
			</Section>
			<Section name='More' className={s.more} type='full' bgColor={'--gray'} bottom={true}>
				<div className={s.innerWrap}>
					<Link href='/professionals/projects' passHref={true}>
						<button>Show more commercial projects</button>
					</Link>
				</div>
			</Section>
<<<<<<< HEAD
=======
			<DraftMode url={draftUrl} path='/professionals/bespoke' />
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
<<<<<<< HEAD
	return {
		title: 'Bespoke',
	};
=======
	return buildMetadata({
		title: 'Bespoke',
		description: 'Bespoke at Orsjo',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/professionals/bespoke`,
	});
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
}

import s from './page.module.scss';
import { BespokeDocument } from '@/graphql';
import Link from 'next/link';
import { Markdown } from 'next-dato-utils/components';
import { Section } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';
import BespokeHeader from './BespokeHeader';

export default async function Bespoke() {
	const { bespoke } = await apiQuery<BespokeQuery, BespokeQueryVariables>(BespokeDocument);
	if (!bespoke) notFound();

	return (
		<>
			<BespokeHeader bespoke={bespoke} />
			<Section name='Intro' className={s.intro} type='margin' bgColor={'--gray'}>
				<h1>{bespoke.title}</h1>
				<Markdown className={s.text} content={bespoke.intro} />
			</Section>

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
		</>
	);
}

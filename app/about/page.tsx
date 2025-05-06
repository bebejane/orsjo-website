import s from './page.module.scss';
import cn from 'classnames';
import { AboutDocument } from '@/graphql';
import { Markdown } from 'next-dato-utils/components';
import { Section, VideoPlayer, TextReveal } from '@/components';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';

export default async function About() {
	const { about } = await apiQuery<AboutQuery, AboutQueryVariables>(AboutDocument);
	if (!about) return notFound();

	const { title, intro, sections, video } = about;

	return (
		<>
			<Section className={s.about} type='full'>
				<div className={s.hero}>
					<VideoPlayer className={s.heroImage} data={video as FileField} />
					<div className={s.header}>
						<h1>
							<TextReveal block={true}>{title}</TextReveal>
						</h1>
					</div>
				</div>
			</Section>
			<Section className={s.intro} type='margin'>
				<Markdown className={s.text} content={intro} />
			</Section>
			<Section className={s.blocks} type='full'>
				{sections.map(({ text, video }, idx) => (
					<div className={s.block} key={idx}>
						<div className={s.left}>
							<Markdown className={cn(s.text, 'large')} content={text} />
						</div>
						<div className={s.right}>
							<VideoPlayer className={s.video} data={video as FileField} />
						</div>
					</div>
				))}
			</Section>
		</>
	);
}

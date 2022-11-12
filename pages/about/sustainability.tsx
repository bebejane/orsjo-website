import styles from './sustainability.module.scss'
import { SustainabilityDocument } from '/graphql';
import withGlobalProps from "/lib/withGlobalProps";
import cn from 'classnames'
import { Image } from 'react-datocms'
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components';
import { PageProps } from '/lib/context/page';
import { Section, TextReveal } from '/components'

export type SustainabilityProps = { sustainability: SustainabilityRecord }

export default function Sustainability({ sustainability: { image, intro, title, steps } }: SustainabilityProps) {
	return (
		<>
			<Section className={styles.sustainability} type="full">
				<div className={styles.hero}>
					<Image
						data={image.responsiveImage}
						className={styles.heroImage}
						objectFit="cover"
						priority={true}
					/>
					<div className={styles.header}>
						<h1>
							<TextReveal block={true}>{title}</TextReveal>
						</h1>
					</div>
				</div>
			</Section>
			<Section className={styles.intro} type="margin">
				<Markdown className={styles.text}>
					{intro}
				</Markdown>
			</Section>
			<Section className={styles.blocks} type="full">
				{steps.map(({ id, text, title, image, fullWidthImage }, idx) =>
					<div className={cn(styles.block, fullWidthImage && styles.fullWidth)} key={idx}>
						<div className={styles.left}>
							<div className={styles.header}>
								<h2>{title}</h2>
								<span>N°{idx + 1}</span>
							</div>
							<Markdown className={styles.text}>
								{text}
							</Markdown>
						</div>
						<div className={styles.right}>
							<Image
								data={image.responsiveImage}
								className={styles.image}
								lazyLoad={false}
							/>
						</div>
					</div>
				)}
			</Section>
		</>
	)
}

Sustainability.page = { title: 'Sustainability', layout: 'full', color: "--black", menu: 'inverted' } as PageProps

export const getStaticProps = withGlobalProps({ queries: [SustainabilityDocument], model: 'sustainability' }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});
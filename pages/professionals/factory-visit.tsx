import styles from './factory-visit.module.scss'
import { GetFactoryVisitDocument } from '/graphql';
import { withGlobalProps } from "/lib/hoc";
import { Image } from 'react-datocms'
import Markdown from '/lib/dato/components/Markdown';
import { PageLayoutProps } from '/lib/context/layout';
import { Section } from '/components';

export type DownloadsProps = { factoryVisit: FactoryVisitRecord }

export default function FactoryVisit({ factoryVisit }: DownloadsProps) {

	return (
		<Section className={styles.downloads} top={true}>
			<h1>{factoryVisit.title}</h1>
			<Markdown>
				{factoryVisit.intro}
			</Markdown>
		</Section>
	)
}

FactoryVisit.layout = { layout: 'normal', color: "--grey", menu: 'inverted' } as PageLayoutProps

export const getStaticProps = withGlobalProps({ queries: [GetFactoryVisitDocument] }, async ({ props, revalidate }: any) => {

	return {
		props,
		revalidate
	};
});
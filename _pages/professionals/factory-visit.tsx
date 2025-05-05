import styles from './factory-visit.module.scss';
import { FactoryVisitDocument } from '@/graphql';
import withGlobalProps from '@/lib/withGlobalProps';
import { Image } from 'react-datocms';
import { DatoMarkdown as Markdown } from 'dato-nextjs-utils/components';
import { PageProps } from '@/lib/context/page';
import { Section } from '@/components';

export type DownloadsProps = { factoryVisit: FactoryVisitRecord };

export default function FactoryVisit({ factoryVisit }: DownloadsProps) {
	return (
		<Section className={styles.downloads} top={true}>
			<h1>{factoryVisit.title}</h1>
			<Markdown>{factoryVisit.intro}</Markdown>
		</Section>
	);
}

FactoryVisit.page = {
	title: 'Factory visit',
	layout: 'normal',
	color: '--gray',
	menu: 'inverted',
} as PageProps;

export const getStaticProps = withGlobalProps(
	{ queries: [FactoryVisitDocument] },
	async ({ props, revalidate }: any) => {
		return {
			props,
			revalidate,
		};
	}
);

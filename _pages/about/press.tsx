import styles from './press.module.scss';
import { AllPressDocument } from '@/graphql';
import withGlobalProps from '@/lib/withGlobalProps';
import { PageProps } from '@/lib/context/page';
import { Section } from '@/components';

export type PressProps = { presses: PressRecord[] };

export default function Press({ presses }: PressProps) {
	return (
		<Section className={styles.press} top={true} name='Introduction'>
			<h1>Press</h1>
			{presses.map(({ title, url }, idx) => (
				<a key={idx} href={url}>
					{title}
				</a>
			))}
		</Section>
	);
}

Press.page = {
	title: 'Press',
	layout: 'normal',
	color: '--black',
	menu: 'inverted',
	footerLine: true,
} as PageProps;

export const getStaticProps = withGlobalProps(
	{ queries: [AllPressDocument], model: 'press' },
	async ({ props, revalidate }: any) => {
		return {
			props,
			revalidate,
		};
	}
);

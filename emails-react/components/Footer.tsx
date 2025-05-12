import { Section, Column, Img } from '@react-email/components';
import { colors, spacing, fontSize } from './theme';
import Divider from './Divider';
import SubHeading from './SubHeading';
import Text from './Text';

type FooterProps = {
	includeUnsubscribe?: boolean;
};

export default function Footer({ includeUnsubscribe }: FooterProps) {
	return (
		<>
			<Section>
				<Column>
					<Divider></Divider>
				</Column>
			</Section>
			<Section>
				<Column width='100%'>
					<Img width='45px' src='https://www.datocms-assets.com/62617/1673342405-logo-email.png' />
				</Column>
			</Section>
			<Section style={{ paddingBottom: spacing.s10 }}>
				<Column width='100%' style={{ paddingTop: spacing.s6 }}>
					<SubHeading style={{ textAlign: 'center' }}>
						<a
							style={{ textDecoration: 'none', color: 'white' }}
							href='https://www.instagram.com/orsjo_belysning'
						>
							Instagram
						</a>{' '}
						&nbsp;{' '}
						<a style={{ textDecoration: 'none', color: 'white' }} href='https://www.orsjo.com'>
							Website
						</a>{' '}
						&nbsp;{' '}
						<a
							style={{ textDecoration: 'none', color: 'white' }}
							href='https://www.facebook.com/orsjobelysning'
						>
							Facebook
						</a>
					</SubHeading>
					{includeUnsubscribe && (
						<Text style={{ textAlign: 'center', fontSize: fontSize.sm, color: colors.neutral500 }}>
							Unsubscribe
						</Text>
					)}
				</Column>
			</Section>
		</>
	);
}

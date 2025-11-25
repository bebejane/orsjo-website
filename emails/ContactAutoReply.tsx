import { Section, Column, Row } from '@react-email/components';
import Header from './components/Header';
import Heading from './components/Heading';
import Footer from './components/Footer';
import BaseLayout from './components/BaseLayout';
import Text from './components/Text';
import Divider from './components/Divider';
import { spacing, fontSize } from './components/theme';

export type ContactAutoReplyProps = { name: string };

const ContactAutoReply = ({ name }: ContactAutoReplyProps) => (
	<BaseLayout width={600} preview='Thanks for contacting us.'>
		<Header title='Örsjö Belysning' openInBrowser={false} />
		<Section style={{ paddingLeft: spacing.s7, paddingRight: spacing.s7 }}>
			<Row>
				<Column>
					<Heading style={{ fontSize: fontSize.lg }}>Tack för ditt meddelande!</Heading>
					<Text style={{ paddingTop: spacing.s7 }}>
						Vi återkommer med svar så snart vi har möjlighet.
						<br />
						Du hittar de vanligaste frågorna kring våra produkter med svar på vår{' '}
						<a
							href='https://www.orsjo.com/support/faq'
							style={{ color: '#FFF', textDecoration: 'underline', textDecorationColor: '#FFF' }}
						>
							FAQ-sida
						</a>
						.
						<br />
						<br />
						Hälsningar
						<br />
						Örsjö Belysning AB
						<br />
						<br />
					</Text>
				</Column>
			</Row>
		</Section>

		<Section style={{ paddingLeft: spacing.s7, paddingRight: spacing.s7 }}>
			<Row>
				<Column>
					<Divider />
				</Column>
			</Row>
		</Section>

		<Section style={{ paddingLeft: spacing.s7, paddingRight: spacing.s7 }}>
			<Row>
				<Column>
					<Heading style={{ fontSize: fontSize.lg }}>Thank you for your message!</Heading>
					<Text style={{ paddingTop: spacing.s7 }}>
						We will get back to you as soon as possible.
						<br />
						<br />
						Regards
						<br />
						Örsjö Belysning AB
						<br />
						<br />
					</Text>
				</Column>
			</Row>
		</Section>
		<Footer />
	</BaseLayout>
);

export default ContactAutoReply;

ContactAutoReply.PreviewProps = {};

import * as React from 'react';
import { Section, Column } from '@react-email/components';
import BaseLayout from './components/BaseLayout';
import Header from './components/Header';
import Heading from './components/Heading';
import Footer from './components/Footer';
import Text from './components/Text';
import Divider from './components/Divider';
import { spacing, fontSize } from './components/theme';

interface ContactAutoReply {}

const baseUrl = process.env.NEXT_PUBlIC_SITE_URL;

export const ContactAutoReply = (props: ContactAutoReply) => (
	<BaseLayout width={600} preview='Thanks for contacting us.'>
		<Header loose title='Örsjö Belysning' openInBrowser={false} />
		<Section style={{ paddingLeft: spacing.s7, paddingRight: spacing.s7 }}>
			<Column>
				<Heading style={{ fontSize: fontSize.lg }}>Tack för ditt meddelande!</Heading>
				<Text style={{ paddingTop: spacing.s7 }}>
					Vi återkommer med svar så snart vi har möjlighet.
					<br />
					<br />
					Notera att vi tyvärr inte kan hantera frågor kring våra produkter från privatpersoner.
					Vänligen kontakta istället någon av våra{' '}
					<a href='https://www.orsjo.com/contact#retailers'>återförsäljare</a>. Du hittar även de
					vanligaste frågorna kring våra produkter med svar på vår{' '}
					<a href='https://www.orsjo.com/support/faq'>FAQ-sida</a>.
					<br />
					<br />
					Hälsningar
					<br />
					Örsjö Belysning AB
				</Text>
			</Column>
		</Section>

		<Section style={{ paddingLeft: spacing.s7, paddingRight: spacing.s7 }}>
			<Column>
				<Divider></Divider>
			</Column>
		</Section>

		<Section style={{ paddingLeft: spacing.s7, paddingRight: spacing.s7 }}>
			<Column>
				<Heading style={{ fontSize: fontSize.lg }}>Thank you for your message!</Heading>
				<Text style={{ paddingTop: spacing.s7 }}>
					We will get back to you as soon as possible.
					<br />
					<br />
					Note that we are unable to handle questions regarding our products from private persons.
					If you reach out as a private person we kindly ask you to contact an{' '}
					<a href='https://www.orsjo.com/contact#retailers'>Örsjö retailer</a>. If you reach out as
					a professional buyer or retailer please fell free to directly contact anyone in our{' '}
					<a href='https://www.orsjo.com/contact#people'>sales team</a>.
					<br />
					<br />
					Regards
					<br />
					Örsjö Belysning AB
				</Text>
			</Column>
		</Section>
		<Footer />
	</BaseLayout>
);

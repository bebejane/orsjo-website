import { Section, Column, Row } from '@react-email/components';
import Header from './components/Header';
import Heading from './components/Heading';
import Footer from './components/Footer';
import BaseLayout from './components/BaseLayout';
import Text from './components/Text';
import { spacing, fontSize } from './components/theme';
import React from 'react';

export type WithdrawFromPurchaseProps = { email: string; orderNo: string; message?: string };

const WithdrawFromPurchase = ({ email, orderNo, message }: WithdrawFromPurchaseProps) => (
	<BaseLayout width={600} preview='Order cancellation'>
		<Header title='Örsjö Belysning' openInBrowser={false} />
		<Section style={{ paddingLeft: spacing.s7, paddingRight: spacing.s7 }}>
			<Row>
				<Column>
					<Heading style={{ fontSize: fontSize.lg }}>Order cancellation: #{orderNo}</Heading>
					<Text style={{ paddingTop: spacing.s7 }}>
						Order no: {orderNo}
						<br />
						Email: {email}
						<br />
						<br />
						Message:
						<br />
						{message?.split('\n').map((line, idx) => (
							<React.Fragment key={idx}>
								{line}
								<br />
							</React.Fragment>
						))}
					</Text>
				</Column>
			</Row>
		</Section>

		<Footer />
	</BaseLayout>
);

export default WithdrawFromPurchase;

WithdrawFromPurchase.PreviewProps = {};

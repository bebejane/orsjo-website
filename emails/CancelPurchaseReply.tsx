import { Section, Column, Row } from '@react-email/components';
import Header from './components/Header';
import Heading from './components/Heading';
import Footer from './components/Footer';
import BaseLayout from './components/BaseLayout';
import Text from './components/Text';
import Divider from './components/Divider';
import { spacing, fontSize } from './components/theme';
import React from 'react';

export type CancelPurchaseReplyProps = { text: string; orderNo: string };

const CancelPurchaseReply = ({ text, orderNo }: CancelPurchaseReplyProps) => (
	<BaseLayout width={600} preview='Thanks for contacting us.'>
		<Header title='Örsjö Belysning' openInBrowser={false} />
		<Section style={{ paddingLeft: spacing.s7, paddingRight: spacing.s7 }}>
			<Row>
				<Column>
					<Heading style={{ fontSize: fontSize.lg }}>Order cancellation: #{orderNo}</Heading>
					<Text style={{ paddingTop: spacing.s7 }}>
						{text.split('\n').map((line, idx) => (
							<React.Fragment key={idx}>
								{line}
								<br />
							</React.Fragment>
						))}
						<br />
						<br />
						Hälsningar,
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

export default CancelPurchaseReply;

CancelPurchaseReply.PreviewProps = {};

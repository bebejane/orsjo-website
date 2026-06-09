import { Section, Column, Row } from '@react-email/components';
import Header from './components/Header';
import Heading from './components/Heading';
import Footer from './components/Footer';
import BaseLayout from './components/BaseLayout';
import Text from './components/Text';
import Divider from './components/Divider';
import { spacing, fontSize } from './components/theme';

export type CancelPurchaseReplyProps = { text: string; orderNo: string };

const CancelPurchaseReply = ({ text, orderNo }: CancelPurchaseReplyProps) => (
	<BaseLayout width={600} preview='Thanks for contacting us.'>
		<Header title='Örsjö Belysning' openInBrowser={false} />
		<Section style={{ paddingLeft: spacing.s7, paddingRight: spacing.s7 }}>
			<Row>
				<Column>
					<Heading style={{ fontSize: fontSize.lg }}>Order cancellation: #{orderNo}</Heading>
					<Text style={{ paddingTop: spacing.s7 }}>
						{text}
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

		<Footer />
	</BaseLayout>
);

export default CancelPurchaseReply;

CancelPurchaseReply.PreviewProps = {};

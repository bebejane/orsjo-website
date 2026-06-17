import { sendEmail } from '@/lib/postmark';
import { render } from '@react-email/components';
import ContactAutoReply from '@/emails/ContactAutoReply';
import { WithdrawFromPurchaseDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import WithdrawFromPurchase from '@/emails/WithdrawFromPurchase';
import WithdrawFromPurchaseReply from '@/emails/WithdrawFromPurchaseReply';

export async function sendContactAutoReplyEmail({
	email,
	name,
}: {
	email: string;
	name: string;
}): Promise<void> {
	if (!email) throw new Error('sendContactAutoReplyEmail: Email not provided');
	return sendEmail({
		html: await render(<ContactAutoReply name={name} />),
		text: await render(<ContactAutoReply name={name} />, { plainText: true }),
		subject: 'Tack för ditt meddelande!',
		to: email,
	});
}

export async function sendWithdrawFromPurchaseEmail({
	email,
	orderNo,
	message,
}: {
	email: string;
	orderNo: string;
	message?: string;
}): Promise<void> {
	if (!email) throw new Error('sendWithdrawFromPurchaseEmail: Email not provided');

	return sendEmail({
		html: await render(<WithdrawFromPurchase email={email} orderNo={orderNo} message={message} />),
		text: await render(<WithdrawFromPurchase email={email} orderNo={orderNo} message={message} />, {
			plainText: true,
		}),
		subject: `Order cancellation: #${orderNo}`,
		to: email,
	});
}

export async function sendWithdrawFromPurchaseReplyEmail({
	email,
	orderNo,
}: {
	email: string;
	orderNo: string;
}): Promise<void> {
	if (!email) throw new Error('sendWithdrawFromPurchaseEmail: Email not provided');
	const { withdrawFromPurchase } = await apiQuery(WithdrawFromPurchaseDocument);
	if (!withdrawFromPurchase)
		throw new Error('sendWithdrawFromPurchaseEmail: Withdraw from purchase not found');

	return sendEmail({
		html: await render(
			<WithdrawFromPurchaseReply text={withdrawFromPurchase.eMailText} orderNo={orderNo} />,
		),
		text: await render(
			<WithdrawFromPurchaseReply text={withdrawFromPurchase.eMailText} orderNo={orderNo} />,
			{
				plainText: true,
			},
		),
		subject: `Order cancellation: #${orderNo}`,
		to: email,
	});
}

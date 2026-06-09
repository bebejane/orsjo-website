import { sendEmail } from '@/lib/postmark';
import { render } from '@react-email/components';
import ContactAutoReply from '@/emails/ContactAutoReply';
<<<<<<< HEAD

export async function sendContactAutoReplyEmail({ email, name }: { email: string; name: string }): Promise<void> {
=======
import CancelPurchaseReply from '@/emails/CancelPurchaseReply';
import { CancelPurchaseDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';

export async function sendContactAutoReplyEmail({
	email,
	name,
}: {
	email: string;
	name: string;
}): Promise<void> {
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7
	if (!email) throw new Error('sendContactAutoReplyEmail: Email not provided');
	return sendEmail({
		html: await render(<ContactAutoReply name={name} />),
		text: await render(<ContactAutoReply name={name} />, { plainText: true }),
		subject: 'Tack för ditt meddelande!',
		to: email,
	});
}
<<<<<<< HEAD
=======

export async function sendCancelPurchaseEmail({
	email,
	orderNo,
}: {
	email: string;
	orderNo: string;
}): Promise<void> {
	if (!email) throw new Error('sendCancelPurchaseEmail: Email not provided');
	const { cancelPurchase } = await apiQuery(CancelPurchaseDocument);
	if (!cancelPurchase) throw new Error('sendCancelPurchaseEmail: Cancel purchase not found');

	return sendEmail({
		html: await render(<CancelPurchaseReply text={cancelPurchase.eMailText} orderNo={orderNo} />),
		text: await render(<CancelPurchaseReply text={cancelPurchase.eMailText} orderNo={orderNo} />, {
			plainText: true,
		}),
		subject: `Order cancellation: #${orderNo}`,
		to: email,
	});
}
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

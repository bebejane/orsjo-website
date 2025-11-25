import { sendEmail } from '@/lib/postmark';
import { render } from '@react-email/components';
import ContactAutoReply from '@/emails/ContactAutoReply';

export async function sendContactAutoReplyEmail({ email, name }: { email: string; name: string }): Promise<void> {
	if (!email) throw new Error('sendContactAutoReplyEmail: Email not provided');
	return sendEmail({
		html: await render(<ContactAutoReply name={name} />),
		text: await render(<ContactAutoReply name={name} />, { plainText: true }),
		subject: 'Tack för ditt meddelande!',
		to: email,
	});
}

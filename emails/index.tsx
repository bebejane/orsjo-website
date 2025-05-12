import 'dotenv/config';
import { render } from 'mjml-react';
import nodemailer, { SendMailOptions } from 'nodemailer';
import ContactAutoReply from '../emails/ContactAutoReply';

const transport = nodemailer.createTransport({
	host: process.env.SMTP_SERVER as string,
	auth: {
		user: process.env.SMTP_EMAIL,
		pass: process.env.SMTP_PASSWORD,
	},
	secure: false,
});

const sendMail = async (options: SendMailOptions) => {
	const info = await transport.sendMail({
		...options,
		from: `${process.env.SMTP_FROM_NAME}<${process.env.SMTP_EMAIL as string}>`,
	});
	console.log('Message sent: %s', info.messageId);
	return info;
};

export async function sendContactAutoReply({ to, name }: { to: string; name: string }) {
	const { html } = render(<ContactAutoReply name={name} />);
	const info = await sendMail({
		to,
		subject: `Thanks for contacting Örsjö!`,
		html,
	});
	console.log('Message sent: %s', info.messageId);
}

export default sendMail;

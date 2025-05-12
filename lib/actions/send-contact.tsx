'use server';

import nodemailer from 'nodemailer';
import * as EmailValidator from 'email-validator';
import sendMail from '@/emails';
import ContactAutoReply from '@/emails/ContactAutoReply';
import { MailOptions } from 'nodemailer/lib/json-transport';

const envKeys = ['SMTP_SERVER', 'SMTP_PORT', 'SMTP_EMAIL', 'SMTP_FROM_EMAIL', 'SMTP_CONTACT_EMAIL'];

export async function sendContact(formData: FormData) {
	try {
		if (envKeys.find((k) => !process.env[k])) throw 'SMTP config missing in .env file';

		const subject = formData.get('subject');
		const name = formData.get('name');
		const email = formData.get('email');
		const text = formData.get('text');

		if (!subject || !name || !EmailValidator.validate(email as string) || !text) {
			const errors: string[] = [];

			if (!subject) errors.push('Subject is empty');
			if (!name) errors.push('Name is empty');
			if (!email) errors.push('E-mail address is empty');
			else if (!EmailValidator.validate(email as string)) errors.push('E-mail address is invalid');
			if (!text) errors.push('Message is empty');

			return { errors };
		}

		const transporter = nodemailer.createTransport({
			//@ts-ignore
			port: process.env.SMTP_PORT,
			host: process.env.SMTP_SERVER,
			auth: {
				user: process.env.SMTP_EMAIL,
				pass: process.env.SMTP_PASSWORD,
			},
			secure: false,
		});

		if (typeof email !== 'string') throw new Error('E-mail address is empty');
		if (typeof name !== 'string') throw new Error('Subject is empty');

		const mailData: MailOptions = {
			from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
			to: process.env.SMTP_CONTACT_EMAIL as string,
			replyTo: email,
			subject: subject as string,
			text: `${text} \n\n${name}\n${email} `,
		};

		console.log('sending email...');

		await new Promise((resolve, reject) => {
			transporter.sendMail(mailData, (err, info) => (err ? reject(err) : resolve(info)));
		});
		await sendMail({
			to: email,
			from: process.env.SMTP_CONTACT_EMAIL,
			subject: 'Contact (auto-reply)',
			component: <ContactAutoReply name={name} />,
		});
		console.log('sent email from', email);
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
}

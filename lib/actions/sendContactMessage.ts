'use server';

import { sendPostmarkEmail } from 'next-dato-utils/utils';
import { z, ZodError } from 'zod';

const ContactForm = z.object({
	name: z.string().min(2, { message: 'Name is required' }),
	email: z.string().email({ message: 'E-mail address is invalid' }),
	subject: z.string().min(2, { message: 'Subject is required' }),
	message: z.string().min(2, { message: 'Message is required' }),
});

type ContactForm = z.infer<typeof ContactForm>;

export default async function sendContactMessage(
	prevState: any,
	formData: FormData
): Promise<{
	name?: string;
	email?: string;
	subject?: string;
	message?: string;
	success: boolean;
	invalid?: any[] | null;
	error?: string | null;
}> {
	try {
		const name = formData.get('name') as string;
		const email = formData.get('email') as string;
		const subject = formData.get('subject') as string;
		const message = formData.get('message') as string;

		try {
			ContactForm.parse({ name, email, subject, message });
		} catch (e) {
			console.log(e);
			const invalid = JSON.parse((e as ZodError).message) as any[];
			return { name, email, subject, message, invalid, success: false };
		}

		await sendPostmarkEmail({
			subject,
			text: `${message} \n\n${name}\n${email} `,
		});

		return { success: true };
	} catch (e) {
		console.error(e);
		return { error: typeof e === 'string' ? e : (e as Error).message || null, success: false };
	}
}

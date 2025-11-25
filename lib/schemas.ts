import z from 'zod';

export const ContactFormSchema = z.object({
	name: z.string().min(2, { message: 'Name is required' }),
	email: z.string().email({ message: 'E-mail address is invalid' }),
	confirm_email: z.string().optional(), // Honeypot
	subject: z.string().min(2, { message: 'Subject is required' }),
	message: z.string().min(2, { message: 'Message is required' }),
});

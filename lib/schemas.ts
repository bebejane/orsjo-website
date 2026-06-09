import z from 'zod';

export const ContactFormSchema = z.object({
	name: z.string().min(2, { message: 'Name is required' }),
	email: z.string().email({ message: 'E-mail address is invalid' }),
	confirm_email: z.string().optional(), // Honeypot
	subject: z.string().min(2, { message: 'Subject is required' }),
	message: z.string().min(2, { message: 'Message is required' }),
});
<<<<<<< HEAD
=======

export const CancelPurchaseFormSchema = z.object({
	order_number: z.string().min(1, { message: 'Order number is required' }),
	email: z.string().email({ message: 'E-mail address is invalid' }),
	confirm_email: z.string().optional(), // Honeypot
	message: z.string().min(2, { message: 'Message is required' }),
});
>>>>>>> 5acb511a452fe5e15c58b47464f67aa540e02ec7

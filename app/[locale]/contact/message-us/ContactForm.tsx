'use client';

import s from './ContactForm.module.scss';
import { useActionState } from 'react';
import sendContactMessage from '@/lib/actions/sendContactMessage';
import { Markdown } from 'next-dato-utils/components';
import { Loader } from '@/components';

export type Props = {
	contactFormMessage: string;
};

const inititalState = {
	name: '',
	email: '',
	subject: '',
	message: '',
	success: false,
	error: null,
	invalid: null,
};

export default function ContactForm({ contactFormMessage }: Props) {
	const [state, formAction, pending] = useActionState(sendContactMessage, inititalState);

	const errors = (id: string) => {
		const el = state.invalid?.find((e) => e?.path?.includes(id));
		return el ? <div className={s.error}>{el.message}</div> : null;
	};

	return (
		<>
			<form id='contact-form' action={formAction} className={s.form}>
				<div className={s.wrap}>
					<label htmlFor='name' className='medium'>
						Name
					</label>
					<input id='name' name='name' type='text' autoComplete='off' defaultValue={state.name} />
					{errors('name')}
				</div>
				<div className={s.wrap}>
					<label htmlFor='email' className='medium'>
						E-mail
					</label>
					<input id='email' type='email' name='email' defaultValue={state.email} />
					{errors('email')}
				</div>
				<div className={s.wrap}>
					<label htmlFor='subject' className='medium'>
						Subject
					</label>
					<input id='subject' type='text' name='subject' autoComplete='off' defaultValue={state.subject} />
					{errors('subject')}
				</div>
				<div className={s.wrap}>
					<label htmlFor='message' className='medium'>
						Message
					</label>
					<textarea id='message' name='message' defaultValue={state.message} />
					{errors('message')}
				</div>

				<button type='submit'>Send message</button>
			</form>

			{pending && (
				<div className={s.loading}>
					<Loader invert={true} />
				</div>
			)}
			{state.success && (
				<div className={s.success}>
					<Markdown content={contactFormMessage} />
				</div>
			)}
		</>
	);
}

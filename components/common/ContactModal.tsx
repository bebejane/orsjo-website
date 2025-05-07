'use client';

import s from './ContactModal.module.scss';
import cn from 'classnames';
import { Markdown } from 'next-dato-utils/components';
import { Modal, Loader } from '@/components';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { styleVariables } from '@/lib/utils';
import { useMediaQuery } from 'usehooks-ts';
//import { sendContact } from '@/lib/actions/send-contact';
import { useRouter } from 'next/navigation';

export type Props = {
	onClose: () => void;
	show: boolean;
	message: string;
};

export default function ContactModal({ onClose, show = false, message }: Props) {
	const router = useRouter();
	const { register, handleSubmit, reset, setFocus } = useForm();
	const [submitting, setSubmitting] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<Error | string | null>(null);
	const isMobile = useMediaQuery(`(max-width: ${styleVariables.tablet}px)`);
	const ref = useRef<HTMLInputElement | null>(null);

	const [data, setData] = useState('');

	const resetForm = useCallback(() => {
		setSuccess(false);
		setError(null);
		setSubmitting(false);
		reset();
	}, [setSuccess, setError, setSubmitting, reset]);

	useEffect(() => {
		if (!show) setTimeout(resetForm, 300);
		if (!isMobile) setFocus('name');
	}, [show, ref, resetForm, setFocus, isMobile]);

	const onSubmitForm = async (data: FormData) => {
		try {
			setSubmitting(true);
			setError(null);
			await sendContact(data);
			router.refresh();
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Ett fel uppstod');
		} finally {
			setSubmitting(false);
		}
	};
	const action: () => void = handleSubmit(async (data: FormData) => {
		//const response = await sendContact(data);
		//console.log(response);
	});

	return (
		<Modal>
			<div className={cn(s.contactModal, show && s.show)}>
				<div className={s.wrap}>
					<h1>Contact us</h1>
					<div className={s.text}>
						<p className='medium'>
							<span>OBS!</span> Vi kan tyvärr inte erbjuda teknisk support till privatpersoner,
							vänligen kontakta någon av våra{' '}
							<a href='https://www.orsjo.com/contact#retailers'>återförsäljare</a>. Vi har samlat de
							vanligaste frågorna med svar på vår{' '}
							<a href='https://www.orsjo.com/support/faq'>FAQ-sida.</a>
						</p>
						<p className='medium'>
							<span>NOTE!</span> We&apos;re not able to offer techical support for private
							customers, intead, please contact one of our{' '}
							<a href='https://www.orsjo.com/contact#retailers'>retailers</a>. We&apos;ve collected
							the most common questions on our{' '}
							<a href='https://www.orsjo.com/support/faq'>FAQ page.</a>
						</p>
					</div>

					{error && (
						<div className={s.error}>{typeof error === 'string' ? error : error.message}</div>
					)}
					<form id='contact-form' method='POST'>
						<label htmlFor='name' className='medium'>
							Name
						</label>
						<input
							id='name'
							type='text'
							autoComplete='off'
							{...register('name', { required: true, minLength: 3 })}
						/>

						<label htmlFor='email' className='medium'>
							E-mail
						</label>
						<input
							id='email'
							type='text'
							{...register('email', {
								required: true,
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Invalid email address',
								},
							})}
						/>

						<label htmlFor='subject' className='medium'>
							Subject
						</label>
						<input
							id='subject'
							type='text'
							autoComplete='off'
							{...register('subject', { required: true })}
						/>

						<label htmlFor='text' className='medium'>
							Message
						</label>
						<textarea {...register('text', { required: true })} />
						<button type='submit'>Send message</button>
					</form>

					{submitting && (
						<div className={s.loading}>
							<Loader invert={true} />
						</div>
					)}
					{success && (
						<div className={s.success}>
							<Markdown content={message} />
							<button onClick={onClose}>Close</button>
						</div>
					)}
				</div>
				<div className={s.close} onClick={onClose}>
					×
				</div>
			</div>
		</Modal>
	);
}

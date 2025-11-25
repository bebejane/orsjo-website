'use client';

import s from './CartError.module.scss';
import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

type CartErrorProps = {
	error?: CartUserError[] | Error | string | null | undefined;
	closeLabel?: string;
	onClose?: () => void;
};

function parseUserErrors(userErrors: CartUserError[]): string {
	return userErrors
		.map(({ field, message, code }) => {
			return `${field}: ${message} (${code})`;
		})
		.join('. ');
}

export default function CartError({ error, closeLabel, onClose }: CartErrorProps) {
	if (!error) return null;

	let message = null;
	if (error instanceof Error) message = error.message;
	else if (typeof error === 'string') message = error;
	else if (Array.isArray(error)) message = parseUserErrors(error as CartUserError[]);
	else message = String(error);

	return (
		<div id='cart-error' className={s.error} role='alert'>
			<div className={s.wrap}>
				<h3>Something went wrong</h3>
				<p className={s.message}>{message}</p>
				<button className={s.close} onClick={() => onClose?.()}>
					{closeLabel ?? 'Close'}
				</button>
			</div>
		</div>
	);
}

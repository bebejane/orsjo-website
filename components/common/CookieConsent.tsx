'use client';

import s from './CookieConsent.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { setCookie, deleteCookie, getCookie } from 'cookies-next';
import { GDPR_CONSENT_COOKIES } from '@/lib/utils';

export default function CookieConsent() {
	const [show, setShow] = useState(false);

	const confirmConsent = (confirm: boolean) => {
		if (confirm) setCookie(GDPR_CONSENT_COOKIES, 'accepted');
		else deleteCookie(GDPR_CONSENT_COOKIES);

		setShow(false);
	};

	useEffect(() => {
		if (getCookie(GDPR_CONSENT_COOKIES) !== 'accepted') setShow(true);
	}, []);

	if (!show) return null;

	return (
		<>
			<div className={cn(s.options, show && s.show)}>
				<div className={s.close} onClick={() => setShow(false)}>
					×
				</div>
				<h1>Cookie policy</h1>
				<p>
					We use cookies to improve your browsing experience on our site. By choosing Accept all you
					consent to this.
				</p>
				<p>
					<button onClick={() => confirmConsent(true)}> Accept all</button>
					<button onClick={() => confirmConsent(true)}> Reject all</button>
				</p>
			</div>
		</>
	);
}

'use client';

import ContactModal from '@components/common/ContactModal';
import { useState } from 'react';

export default function ContactButton({ contact }) {
	const [showContactForm, setShowContactForm] = useState(false);
	return (
		<>
			<button onClick={() => setShowContactForm(true)}>Contact</button>
			<ContactModal
				show={showContactForm}
				onClose={() => setShowContactForm(false)}
				message={contact.contactFormMessage}
			/>
		</>
	);
}

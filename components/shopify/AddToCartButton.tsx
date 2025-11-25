'use client';

import s from './AddToCartButton.module.scss';
import React, { useEffect } from 'react';
import { default as useCart, useShallow } from '@/lib/shopify/hooks/useCart';
import cn from 'classnames';
import { useLocale } from 'next-intl';

export type AddToCartButtonProps = {
	merchandiseId?: string;
	quantity: number;
	disabled?: boolean;
	className?: string;
	label: string;
};

export default function AddToCartButton({
	className,
	label,
	merchandiseId,
	quantity = 1,
	disabled = false,
}: AddToCartButtonProps) {
	const country = useLocale();
	const [addToCart] = useCart(useShallow((state) => [state.addToCart, state.updating, state.error]));

	const handleAddToCart = () => {
		if (!disabled && typeof merchandiseId === 'string') {
			addToCart({ merchandiseId, quantity }, country);
		}
	};

	return (
		<button
			className={cn(s.button, className, 'full')}
			onClick={handleAddToCart}
			disabled={disabled ?? undefined}
			type='button'
		>
			{label}
		</button>
	);
}

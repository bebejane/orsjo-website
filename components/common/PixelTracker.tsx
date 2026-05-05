'use client';

import { PIXEL_ID } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

let ReactPixel: any = null;

if (typeof window !== 'undefined') {
	import('react-facebook-pixel')
		.then((x) => x.default)
		.then((currReactPixel) => {
			ReactPixel = currReactPixel;
		});
}

export const PixelTracker: React.FC = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (!ReactPixel) {
			import('react-facebook-pixel')
				.then((x) => x.default)
				.then((currReactPixel) => {
					ReactPixel = currReactPixel;
					ReactPixel.init(`${PIXEL_ID}`);
					ReactPixel.pageView();
					console.log('pageview');
				});
		} else {
			ReactPixel.init(`${PIXEL_ID}`);
			ReactPixel.pageView();
		}
	}, [pathname, searchParams]);

	return null;
};

export const pixelAddToCart = async (cart: CartQuery['getCart']) => {
	if (!ReactPixel) return;
	ReactPixel.track('AddToCart', {
		currency: cart?.summary?.total?.currency,
		total: cart?.summary?.total?.sellingPriceIncVat,
		shipping: cart?.summary?.shipping?.feeIncVat,
		vat: cart?.summary?.total?.vat,
	});
};

export const pixelPurchase = async (cart: CartQuery['getCart']) => {
	if (!ReactPixel) return;
	ReactPixel.track('Purchase', {
		currency: cart?.summary?.total?.currency,
		total: cart?.summary?.total?.sellingPriceIncVat,
		shipping: cart?.summary?.shipping?.feeIncVat,
		vat: cart?.summary?.total?.vat,
	});
};

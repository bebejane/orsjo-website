import { buildMetadata } from '@/app/[locale]/layout';
import { ThankYou } from './ThankYou';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const dynamic = 'auto';

export default async function ThankYouPage({ searchParams }: PageProps<'/[locale]/thank-you'>) {
	return (
		<Suspense>
			<ThankYou searchParams={searchParams} />
		</Suspense>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return buildMetadata({
		title: 'Thank you',
		description: 'Thank you for your order at Orsjo',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/thank-you`,
	});
}

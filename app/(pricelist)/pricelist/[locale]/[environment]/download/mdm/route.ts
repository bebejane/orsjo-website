import { apiQuery } from 'next-dato-utils/api';
import { put } from '@vercel/blob';
import { AllProductsDocument } from '@/graphql';

export const maxDuration = 120;

export async function GET(
	req: Request,
	{ params }: RouteContext<'/pricelist/[locale]/[environment]/download/mdm'>,
) {
	const { locale, environment } = await params;
	const { allProducts } = await apiQuery(AllProductsDocument, {
		all: true,
		environment,
	});
}

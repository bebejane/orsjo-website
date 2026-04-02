'use server';

import s from './page.module.scss';
import PricelistImport from './PricelistImport';
import {
	Article,
	ProductUpdatesResponse,
	parse,
	generate,
} from '@/catalogue/lib/controllers/pricelist';

export default async function PricelistPage({ params }: PageProps<'/catalogue/pricelist'>) {
	const parsePricelist = async (file: ArrayBuffer): Promise<ProductUpdatesResponse> => {
		'use server';
		const buffer = Buffer.from(file);
		const articles = await parse(buffer);
		const updates = await generate(articles);
		return updates;
	};

	return (
		<>
			<div className={s.container}>
				<PricelistImport parse={parsePricelist} />
			</div>
			<div />
		</>
	);
}

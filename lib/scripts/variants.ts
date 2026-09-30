import { AllProductVariantsDocument } from '@/graphql';
import 'dotenv/config';
import { apiQuery } from 'next-dato-utils/api';
import { client } from '@/lib/client';
import { Product } from '@/types/datocms-cma';

async function main(): Promise<void> {
	const { allProductVariants } = await apiQuery(AllProductVariantsDocument, {
		all: true,
	});

	const nonEan = allProductVariants.filter((v) => !v.ean);
	const items = [];
	for (const v of nonEan) {
		process.stdout.write('.');
		const ref = await client.items.references<Product>(v.id, { status: 'published' });
		if (ref.length && ref[0].meta.status === 'published') items.push(v);
		else if (!ref.length) console.log(`No refs: ${v.id} `);
	}

	console.log(`Found ${items.length} product_variants without EAN`);
	console.log(items.map((v) => v.articleNo).join('\n'));
}

if (process.env.SKIP !== '1') {
	main().catch((err) => {
		console.error(err);
		err.errors && console.log(JSON.stringify(err.errors, null, 2));
		process.exitCode = 1;
	});
}

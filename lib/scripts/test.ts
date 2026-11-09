import 'dotenv/config';
import * as geins from '@/geins/merchant-api';

async function main(): Promise<void> {
	const a = await geins.getProductsByCategory('accessory', 'se');
	console.log(a);
}

if (process.env.SKIP !== '1') {
	main().catch((err) => {});
}

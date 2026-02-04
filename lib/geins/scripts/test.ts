import 'dotenv/config';
import { createProduct } from '@/lib/geins/mgmt-api';

const data = {
	ArticleNumber: 'art-no',
	Names: [
		{
			LanguageCode: 'sv',
			Content: 'Test prod',
		},
	],
	Active: true,
	PurchasePrice: 0,
	PurchasePriceCurrency: 'SEK',
	ShortTexts: [
		{
			LanguageCode: 'sv',
			Content: 'string',
		},
	],
	LongTexts: [
		{
			LanguageCode: 'sv',
			Content: 'string',
		},
	],
	TechTexts: [
		{
			LanguageCode: 'sv',
			Content: 'string',
		},
	],
};

const main = async () => {
	try {
		console.log('test');
		const p = await createProduct(data);
	} catch (error) {
		console.log(error);
	}
};

main();

import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { SiteDocument } from '@/graphql';
import { pricelists } from '@/pricelist/lib/pricelists';
import { ZipPricelists } from '@/pricelist/components/ZipPricelists';
import { getAllCurrencyRates } from '@/lib/currency';
import DownloadPricelist from '@/pricelist/components/DownloadPricelist';
import {
	ProductUpdatesResponse,
	parse,
	generate,
	ProductUpdate,
} from '@/pricelist/lib/controllers/pricelist';
import PricelistImport from '../components/PricelistImport';
import { sleep } from 'next-dato-utils/utils';

export default async function PricelistAdmin({ params }: PageProps<'/pricelist'>) {
	const environment = 'main';

	const parsePricelist = async (file: ArrayBuffer): Promise<ProductUpdatesResponse> => {
		'use server';
		const buffer = Buffer.from(file);
		const articles = await parse(buffer);
		const updates = await generate(articles);

		return updates;
	};

	const updatePricelist = async (updates: ProductUpdate): Promise<number> => {
		'use server';
		console.log('update prices');
		console.log(updates);
		await sleep(3000);
		return 0;
	};

	const [
		{
			_site: { locales },
		},
		currencies,
	] = await Promise.all([apiQuery(SiteDocument), getAllCurrencyRates()]);

	return (
		<div className={s.container}>
			<div className={s.download}>
				<h2>Download pricelists</h2>
				<ul className={s.pricelists}>
					{pricelists.map((pricelist, idx) => (
						<li key={pricelist.path}>
							<header>
								<h3>{pricelist.label}</h3>
								<ZipPricelists
									title={pricelist.label}
									paths={locales.map((locale) => ({
										path: `/pricelist/${locale}/${environment}/${pricelist.path}/pdf`,
										filename: `Örsjö Pricelist - ${pricelist.label} (${currencies.find((c) => c.locale === locale)?.isoCode}).pdf`,
									}))}
								/>
							</header>
							<ul>
								{currencies
									.sort((a, b) => a.isoCode.localeCompare(b.isoCode))
									.map(({ isoCode, locale }) => (
										<li key={isoCode}>
											<DownloadPricelist
												href={`/pricelist/${locale}/${environment}/${pricelist.path}/pdf`}
												label={isoCode}
												extension='pdf'
											/>
										</li>
									))}
							</ul>
						</li>
					))}
					<li>
						<header>
							<h3>Csv</h3>
							<ZipPricelists
								title={`Csv`}
								paths={locales.map((locale) => ({
									path: `/pricelist/${locale}/${environment}/csv`,
									filename: `Örsjö Pricelist - Csv - (${currencies.find((c) => c.locale === locale)?.isoCode}).csv`,
								}))}
							/>
						</header>
						<ul>
							{currencies
								.sort((a, b) => a.isoCode.localeCompare(b.isoCode))
								.map(({ isoCode, locale }) => (
									<li key={isoCode}>
										<DownloadPricelist
											href={`/pricelist/${locale}/${environment}/csv`}
											label={isoCode}
											extension='csv'
										/>
									</li>
								))}
						</ul>
					</li>
				</ul>
				<br />
				<br />
			</div>
			<div className={s.update}>
				<h2>Update pricelist</h2>
				<PricelistImport parse={parsePricelist} update={updatePricelist} />
			</div>
		</div>
	);
}

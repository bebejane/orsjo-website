import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { SiteDocument } from '@/graphql';
import { pricelists } from '@/pricelist/lib/pricelists';
import { ZipPricelists } from '@/pricelist/components/ZipPricelists';
import { getAllCurrencyRates } from '@/lib/currency';
import DownloadPricelist from '@/pricelist/components/DownloadPricelist';
import { ProductUpdatesResponse, ProductUpdate } from '@/pricelist/lib/controllers/pricelist';
import PricelistImport from '../components/PricelistImport';
import * as pricelistController from '@/pricelist/lib/controllers/pricelist';
import { format } from 'date-fns';

export const maxDuration = 60 * 5;

export default async function PricelistAdmin({ params }: PageProps<'/pricelist'>) {
	async function uploadPricelist(file: ArrayBuffer, filename: string): Promise<void> {
		'use server';
		const buffer = Buffer.from(file);
		await pricelistController.updateCurrentPricelistFile(buffer, filename);
	}

	async function parsePricelist(
		file: ArrayBuffer,
		filename: string,
	): Promise<ProductUpdatesResponse> {
		'use server';
		const buffer = Buffer.from(file);
		const articles = await pricelistController.parse(buffer);
		const updates = await pricelistController.generate(articles);
		return updates;
	}

	async function updatePricelist(
		updates: ProductUpdate,
	): Promise<ReturnType<typeof pricelistController.update>> {
		'use server';
		console.log('update prices');
		console.log(updates);
		const res = await pricelistController.update(updates, 'pricelist');
		return res;
	}

	const [
		{
			_site: { locales },
		},
		currentPricelist,
		draftEnvironment,
		currencies,
	] = await Promise.all([
		apiQuery(SiteDocument),
		pricelistController.currentPricelist(),
		pricelistController.draftEnvironment(),
		getAllCurrencyRates(),
	]);

	const environment = draftEnvironment?.id ?? 'dev';
	console.log({ environment });

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
								title={`Örsjö Pricelist - CSV - ${format(new Date(), 'yyyy-mm-dd')}`}
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
				<PricelistImport
					key={currentPricelist?.filename}
					upload={uploadPricelist}
					parse={parsePricelist}
					update={updatePricelist}
					current={currentPricelist}
				/>
			</div>
		</div>
	);
}

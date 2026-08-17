import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductsDocument, SiteDocument } from '@/graphql';
import { pricelists } from '@/catalogue/lib/pricelists';
import { ZipPricelists } from '@/catalogue/components/ZipPricelists';
import { getAllCurrencyRates } from '@/lib/currency';
import DownloadPricelist from '@/app/(catalogue)/components/DownloadPricelist';
import { ProductUpdatesResponse, parse, generate } from '@/catalogue/lib/controllers/pricelist';
import PricelistImport from '@/app/(catalogue)/catalogue/import/PricelistImport';

export default async function CatalogueAdmin({ params }: PageProps<'/catalogue'>) {
	const parsePricelist = async (file: ArrayBuffer): Promise<ProductUpdatesResponse> => {
		'use server';
		const buffer = Buffer.from(file);
		const articles = await parse(buffer);
		const updates = await generate(articles);
		//console.log(articles);
		return updates;
	};
	const [
		{ allProducts },
		{
			_site: { locales },
		},
		currencies,
	] = await Promise.all([
		apiQuery(AllProductsDocument, { all: true }),
		apiQuery(SiteDocument),
		getAllCurrencyRates(),
	]);

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
										path: `/catalogue/${locale}/${pricelist.path}/pdf`,
										filename: `Örsjo prislista - ${pricelist.label} (${currencies.find((c) => c.locale === locale)?.isoCode}).pdf`,
									}))}
								/>
							</header>
							<ul>
								{locales.map((locale, idx) => (
									<li key={locale}>
										<DownloadPricelist
											href={`/catalogue/${locale}/${pricelist.path}/pdf`}
											label={locale}
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
									path: `/catalogue/${locale}/csv`,
									filename: `Örsjo prislista - Csv - (${currencies.find((c) => c.locale === locale)?.isoCode}).csv`,
								}))}
							/>
						</header>
						<ul>
							{locales.map((locale, idx) => (
								<li key={locale}>
									<DownloadPricelist
										href={`/catalogue/${locale}/csv`}
										label={locale}
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
				<PricelistImport parse={parsePricelist} />
				<p className="small">Note! You need to upload an Excel file (.xlsx) where column A is article no and D price in SEK.
				</p>
			</div>
		</div>
	);
}

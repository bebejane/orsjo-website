import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { SiteDocument } from '@/graphql';
import { pricelists } from '@/pricelist/lib/pricelists';
import { ZipPricelists } from '@/pricelist/components/ZipPricelists';
import { getAllCurrencyRates } from '@/lib/currency';
<<<<<<< HEAD:app/(catalogue)/catalogue/page.tsx
import DownloadPricelist from '@/app/(catalogue)/components/DownloadPricelist';
import { ProductUpdatesResponse, parse, generate } from '@/catalogue/lib/controllers/pricelist';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import DownloadPricelist from '@/pricelist/components/DownloadPricelist';
import { ProductUpdatesResponse, parse, generate } from '@/pricelist/lib/controllers/pricelist';
>>>>>>> fc2e5d78 (pricelist):app/(pricelist)/pricelist/page.tsx
import PricelistImport from '../components/PricelistImport';
=======
import PricelistImport from '@/app/(catalogue)/catalogue/import/PricelistImport';
>>>>>>> 08570c58 (p)
=======
import PricelistImport from '../components/PricelistImport';
>>>>>>> 21d1e546 (ups)

export default async function CatalogueAdmin({ params }: PageProps<'/pricelist'>) {
	const parsePricelist = async (file: ArrayBuffer): Promise<ProductUpdatesResponse> => {
		'use server';
		const buffer = Buffer.from(file);
		const articles = await parse(buffer);
		const updates = await generate(articles);
<<<<<<< HEAD
<<<<<<< HEAD

=======
		//console.log(articles);
>>>>>>> 08570c58 (p)
=======

>>>>>>> 21d1e546 (ups)
		return updates;
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
<<<<<<< HEAD:app/(catalogue)/catalogue/page.tsx
										path: `/catalogue/${locale}/${pricelist.path}/pdf`,
<<<<<<< HEAD
<<<<<<< HEAD
										filename: `Örsjo pricelist - ${pricelist.label} (${currencies.find((c) => c.locale === locale)?.isoCode}).pdf`,
=======
										filename: `Örsjo prislista - ${pricelist.label} (${currencies.find((c) => c.locale === locale)?.isoCode}).pdf`,
>>>>>>> 08570c58 (p)
=======
										filename: `Örsjo pricelist - ${pricelist.label} (${currencies.find((c) => c.locale === locale)?.isoCode}).pdf`,
>>>>>>> 21d1e546 (ups)
=======
										path: `/pricelist/${locale}/${pricelist.path}/pdf`,
										filename: `Örsjö Pricelist - ${pricelist.label} (${currencies.find((c) => c.locale === locale)?.isoCode}).pdf`,
>>>>>>> fc2e5d78 (pricelist):app/(pricelist)/pricelist/page.tsx
									}))}
								/>
							</header>
							<ul>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 21d1e546 (ups)
								{currencies
									.sort((a, b) => a.isoCode.localeCompare(b.isoCode))
									.map(({ isoCode, locale }) => (
										<li key={isoCode}>
											<DownloadPricelist
												href={`/pricelist/${locale}/${pricelist.path}/pdf`}
												label={isoCode}
												extension='pdf'
											/>
										</li>
									))}
<<<<<<< HEAD
=======
								{locales.map((locale, idx) => (
									<li key={locale}>
										<DownloadPricelist
											href={`/catalogue/${locale}/${pricelist.path}/pdf`}
											label={locale}
											extension='pdf'
										/>
									</li>
								))}
>>>>>>> 08570c58 (p)
=======
>>>>>>> 21d1e546 (ups)
							</ul>
						</li>
					))}
					<li>
						<header>
							<h3>Csv</h3>
							<ZipPricelists
								title={`Csv`}
								paths={locales.map((locale) => ({
<<<<<<< HEAD:app/(catalogue)/catalogue/page.tsx
									path: `/catalogue/${locale}/csv`,
<<<<<<< HEAD
<<<<<<< HEAD
									filename: `Örsjo pricelist - Csv - (${currencies.find((c) => c.locale === locale)?.isoCode}).csv`,
=======
									filename: `Örsjo prislista - Csv - (${currencies.find((c) => c.locale === locale)?.isoCode}).csv`,
>>>>>>> 08570c58 (p)
=======
									filename: `Örsjo pricelist - Csv - (${currencies.find((c) => c.locale === locale)?.isoCode}).csv`,
>>>>>>> 21d1e546 (ups)
=======
									path: `/pricelist/${locale}/csv`,
									filename: `Örsjö Pricelist - Csv - (${currencies.find((c) => c.locale === locale)?.isoCode}).csv`,
>>>>>>> fc2e5d78 (pricelist):app/(pricelist)/pricelist/page.tsx
								}))}
							/>
						</header>
						<ul>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 21d1e546 (ups)
							{currencies
								.sort((a, b) => a.isoCode.localeCompare(b.isoCode))
								.map(({ isoCode, locale }) => (
									<li key={isoCode}>
										<DownloadPricelist
											href={`/pricelist/${locale}/csv`}
											label={isoCode}
											extension='csv'
										/>
									</li>
								))}
<<<<<<< HEAD
=======
							{locales.map((locale, idx) => (
								<li key={locale}>
									<DownloadPricelist
										href={`/catalogue/${locale}/csv`}
										label={locale}
										extension='csv'
									/>
								</li>
							))}
>>>>>>> 08570c58 (p)
=======
>>>>>>> 21d1e546 (ups)
						</ul>
					</li>
				</ul>
				<br />
				<br />
			</div>
			<div className={s.update}>
				<h2>Update pricelist</h2>
				<PricelistImport parse={parsePricelist} />
			</div>
		</div>
	);
}

import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductsDocument, SiteDocument } from '@/graphql';
import { pricelists } from '@/catalogue/lib/pricelists';
import { ZipPricelists } from '@/catalogue/components/ZipPricelists';
import { getAllCurrencyRates } from '@/lib/currency';
import DownloadPricelist from '@/app/(catalogue)/components/DownloadPricelist';

export default async function CatalogueAdmin({ params }: PageProps<'/catalogue'>) {
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
	);
}

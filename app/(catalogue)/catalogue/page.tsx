import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { SiteDocument } from '@/graphql';
import { pricelists } from '@/catalogue/lib/pricelists';
import { ZipPricelists } from '@/catalogue/components/ZipPricelists';
import { getAllCurrencyRates } from '@/lib/currency';
import DownloadPricelist from '@/app/(catalogue)/components/DownloadPricelist';
import { ProductUpdatesResponse, parse, generate } from '@/catalogue/lib/controllers/pricelist';
import PricelistImport from '../components/PricelistImport';

export default async function CatalogueAdmin({ params }: PageProps<'/catalogue'>) {
	const parsePricelist = async (file: ArrayBuffer): Promise<ProductUpdatesResponse> => {
		'use server';
		const buffer = Buffer.from(file);
		const articles = await parse(buffer);
		const updates = await generate(articles);

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
										path: `/catalogue/${locale}/${pricelist.path}/pdf`,
										filename: `Örsjo pricelist - ${pricelist.label} (${currencies.find((c) => c.locale === locale)?.isoCode}).pdf`,
									}))}
								/>
							</header>
							<ul>
								{currencies
									.sort((a, b) => a.isoCode.localeCompare(b.isoCode))
									.map(({ isoCode, locale }) => (
										<li key={isoCode}>
											<DownloadPricelist
												href={`/catalogue/${locale}/${pricelist.path}/pdf`}
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
									path: `/catalogue/${locale}/csv`,
									filename: `Örsjo pricelist - Csv - (${currencies.find((c) => c.locale === locale)?.isoCode}).csv`,
								}))}
							/>
						</header>
						<ul>
							{currencies
								.sort((a, b) => a.isoCode.localeCompare(b.isoCode))
								.map(({ isoCode, locale }) => (
									<li key={isoCode}>
										<DownloadPricelist
											href={`/catalogue/${locale}/csv`}
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
				<PricelistImport parse={parsePricelist} />
			</div>
		</div>
	);
}

import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductsDocument, SiteDocument } from '@/graphql';
import { pricelists } from '@/catalogue/lib/pricelists';
import { ZipPricelists } from '@/catalogue/components/ZipPricelists';
import { getAllCurrencyRates } from '@/lib/currency';

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
			<h2>Prislistor</h2>
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
									<span>{locale}</span>
									<a href={`/catalogue/${locale}/${pricelist.path}`}>HTML</a>
									<a href={`/catalogue/${locale}/${pricelist.path}/pdf`} download>
										PDF
									</a>
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
								<span>{locale}</span>
								<a href={`/catalogue/${locale}/csv`} download>
									CSV
								</a>
							</li>
						))}
					</ul>
				</li>
			</ul>
			<br />
			<br />

			<h2>Produkter</h2>
			<table className={s.products}>
				<tbody>
					{allProducts.map((p, idx) => (
						<tr key={p.id}>
							<td>
								{p.title} ({p.categories.map((c) => c.name).join(', ')})
							</td>
							{locales.map((locale, idx) => (
								<td key={locale}>
									<a href={`/catalogue/${locale}/product/${p.id}`}>HTML</a>
									&nbsp;&nbsp;
									<a href={`/catalogue/${locale}/product/${p.id}/pdf`} download>
										PDF
									</a>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

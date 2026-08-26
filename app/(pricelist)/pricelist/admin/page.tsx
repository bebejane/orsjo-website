import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductsDocument, SiteDocument } from '@/graphql';
import { pricelists } from '@/pricelist/lib/pricelists';
import { ZipPricelists } from '@/pricelist/components/ZipPricelists';
import { getAllCurrencyRates } from '@/lib/currency';

export default async function CatalogueAdmin({ params }: PageProps<'/pricelist'>) {
	const environment = process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT;

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
									path: `/pricelist/${locale}/${environment}/${pricelist.path}/pdf`,
									filename: `Örsjö Pricelist - ${pricelist.label} (${currencies.find((c) => c.locale === locale)?.isoCode}).pdf`,
								}))}
							/>
						</header>
						<ul>
							{locales.map((locale, idx) => (
								<li key={locale}>
									<span>{locale}</span>
									<a href={`/pricelist/${locale}/${environment}/${pricelist.path}`}>HTML</a>
									<a href={`/pricelist/${locale}/${environment}/${pricelist.path}/pdf`} download>
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
								path: `/pricelist/${locale}/${environment}/csv`,
								filename: `Örsjö Pricelist - Csv - (${currencies.find((c) => c.locale === locale)?.isoCode}).csv`,
							}))}
						/>
					</header>
					<ul>
						{locales.map((locale, idx) => (
							<li key={locale}>
								<span>{locale}</span>
								<a href={`/pricelist/${locale}/${environment}/csv`} download>
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
									<a href={`/pricelist/${locale}/${environment}/product/${p.id}`}>HTML</a>
									&nbsp;&nbsp;
									<a href={`/pricelist/${locale}/${environment}/product/${p.id}/pdf`} download>
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

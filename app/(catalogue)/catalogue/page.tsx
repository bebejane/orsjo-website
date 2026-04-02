import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductsDocument, SiteDocument } from '@/graphql';

const pricelists = [
	{
		label: 'Full',
		path: 'full',
	},
	{
		label: 'Enkel',
		path: 'light',
	},
	{
		label: 'Enkel (inkl. moms)',
		path: 'light-with-tax',
	},
	{
		label: 'Ink. ljuskälla',
		path: 'with-lightsource',
	},
	{
		label: 'Utan priser',
		path: 'noprice',
	},
];

export default async function CatalogueAdmin({ params }: PageProps<'/catalogue'>) {
	const { allProducts } = await apiQuery(AllProductsDocument, {
		all: true,
	});
	const {
		_site: { locales },
	} = await apiQuery(SiteDocument);

	return (
		<div className={s.container}>
			<h2>Prislistor</h2>
			<ul className={s.pricelists}>
				{pricelists.map(({ label, path }, idx) => (
					<li key={path}>
						<h3>{label}</h3>
						<ul>
							{locales.map((locale, idx) => (
								<li key={locale}>
									<span>{locale}</span>
									<a href={`/catalogue/${locale}/${path}`}>HTML</a>
									<a href={`/catalogue/${locale}/${path}/pdf`}>PDF</a>
								</li>
							))}
						</ul>
					</li>
				))}
				<li>
					<h3>Csv</h3>
					<ul>
						{locales.map((locale, idx) => (
							<li key={locale}>
								<span>{locale}</span>
								<a href={`/catalogue/api/csv?locale=${locale}`}>CSV</a>
							</li>
						))}
					</ul>
				</li>
			</ul>
			<br />

			<table className={s.products}>
				<tbody>
					<tr>
						<th>Produkter</th>
						{locales.map((locale, idx) => (
							<th key={idx}>{locale}</th>
						))}
					</tr>
					{allProducts.map((p, idx) => (
						<tr key={p.id}>
							<td>
								{p.title} ({p.categories.map((c) => c.name).join(', ')})
							</td>
							{locales.map((locale, idx) => (
								<td key={locale}>
									<a href={`/catalogue/${locale}/product/${p.id}`}>HTML</a>
									&nbsp;&nbsp;
									<a href={`/catalogue/${locale}/product/${p.id}/pdf`}>PDF</a>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

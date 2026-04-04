import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { AllProductsDocument, SiteDocument } from '@/graphql';
import { pricelists } from '@/catalogue/lib/pricelists';

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

import styles from './index.module.scss'
import { apiQuery, intlQuery } from "/lib/dato/api";
import { withGlobalProps } from "/lib/utils";
import { GetProducts, GetPricelist } from "/graphql"
import { useTranslations } from 'next-intl';

export default function Home({ products, pricelist, messages }) {
	const t = useTranslations('Home')

	return (
		<div className={styles.container}>
			<h1>{t('products')}</h1>
			<ul>
				{products.map(({ id, title, pdfFile }) =>
					<li>{title}
						- <a href={`${process.env.DATOCMS_WEBHOOK_ENDPOINT}/product/${id}`}>generate pdf</a>
						- <a href={`/catalogue/${id}`}>html page</a>
						- {pdfFile && <a href={pdfFile.url}>dato pdf</a>}
					</li>
				)}
			</ul>

			<h1>{t('pricelist')}</h1>
			<ul>
				<li><a href={`${process.env.DATOCMS_WEBHOOK_ENDPOINT}/catalogue`}>generate pdf pricelist</a> <br /></li>
				{pricelist?.pdfFile && <li><a href={pricelist.pdfFile.url}>dato pricelist pdf</a></li>}
				<li><a href={`/catalogue`}>pricelist html page en</a></li>
				<li><a href={`sv/catalogue`}>pricelist html page sv</a></li>
				<li><a href={`/catalogue/light`}> light pricelist html page en</a></li>
				<li><a href={`sv/catalogue/light`}> light pricelist html page sv</a></li>



			</ul>
		</div>
	)
}

export const getStaticProps = withGlobalProps(async ({ props, revalidate, context: { locale } }) => {
	const { products, pricelist } = await apiQuery([GetProducts, GetPricelist], [{ locale }, { locale }])
	const messages = await intlQuery('Home', locale)

	return {
		props: {
			...props,
			messages,
			products,
			pricelist
		},
		revalidate
	};
});
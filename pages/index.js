import styles from './index.module.scss'
import { apiQuery, intlQuery } from "/lib/dato/api";
import { withGlobalProps } from "/lib/utils";
import { GetProducts, GetPricelist } from "/graphql"
import { useTranslations } from 'next-intl';

export default function Home({ products, pricelist, messages }) {
	const t = useTranslations('Home')

	return (
		<div className={styles.container}>


			<h1>{t('pricelist')} HTLM</h1>
			<ul>
				<li>Prislista: <a href={`/catalogue`}>Euro</a> <a href={`sv/catalogue`}>SEK</a> <a href={`sv/catalogue`}>NOK</a></li>
				<li>Enkel: <a href={`/catalogue/light`}>EURO</a> <a href={`sv/catalogue/light`}>SEK</a> <a href={`/catalogue/light`}>NOK</a></li>
				<li>Ink. ljuskälla: <a href={`sv/catalogue/withLightsource`}>SEK</a></li>
			</ul>
			<h1>Generera {t('pricelist')}</h1>
			<ul>
				<li>Prislista: <a href={`${process.env.DATOCMS_WEBHOOK_ENDPOINT}/catalogue`}>EURO</a> <a href={`${process.env.DATOCMS_WEBHOOK_ENDPOINT}/sv/catalogue`}>SEK</a> <a href={`${process.env.DATOCMS_WEBHOOK_ENDPOINT}/catalogue`}>NOK</a></li>
				<li>Enkel: <a href={`${process.env.DATOCMS_WEBHOOK_ENDPOINT}/catalogue`}>EURO</a> <a href={`${process.env.DATOCMS_WEBHOOK_ENDPOINT}/sv/catalogue`}>SEK</a> <a href={`${process.env.DATOCMS_WEBHOOK_ENDPOINT}/catalogue`}>NOK</a></li>
				<li>Ink. ljuskälla: <a href={`${process.env.DATOCMS_WEBHOOK_ENDPOINT}/sv/catalogue`}>SEK</a></li>
			</ul>
			<h1>Dato</h1>
			<ul>
				{pricelist?.pdfFile && <li><a href={pricelist.pdfFile.url}>dato pricelist pdf</a></li>}
			</ul>

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
		</div >

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
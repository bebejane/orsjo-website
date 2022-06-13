import styles from './ProductSheet.module.scss'
import type { Product, Locale, Lightsource, LightsourceElement } from '/types';
import ReactDOMServer from 'react-dom/server';
import { convertPrice, formatPrice } from '/lib/utils'
import cn from 'classnames'
import { useTranslations } from 'next-intl'
import Markdown from '/lib/dato/components/Markdown'
import Page from "./Page"

type ProductSheetProps = {product:Product, locale:Locale, pageNo:number}

export default function ProductSheet({ product, locale } : ProductSheetProps) {

  const t = useTranslations('Catalogue')

  const maxArticlePriceRows = 13;
  const articlePriceSmallStyleCount = 26;

  const specificationsRows = parseSpecifications(product, locale)
  const articlePriceRows = parseArticlePrices(product, locale)
  const specificationsRowCount = ReactDOMServer.renderToString(specificationsRows).split('<tr>').length
  const articlePriceRowCount = ReactDOMServer.renderToString(articlePriceRows).split('<tr>').length

  const isArticlePriceSeparatePage = articlePriceRowCount > maxArticlePriceRows

  const drawings = product.models.map((m) => ({ drawing: m.drawing, name: m.name?.name })).filter(d => d.drawing);

  return (
    <>
      <a name={product.slug}></a>
      <Page>
        <div className={cn(styles.frontPage)}>
          <a href="#home" className={styles.logo}><img src={'/images/logo.svg'} /></a>
          <div className={styles.intro}>
            <div className={styles.productImage}>
              {product.environmentImage && <img src={`${product.environmentImage?.url}?w=1200&fm=avif`} />}
            </div>
            <div className={styles.productText}>
              <h1 className={styles.title}>{product.title}</h1>
              <Markdown truncate={400} className={styles.description}>
                {product.description}
              </Markdown>
            </div>
          </div>
          <div className={styles.colors}>
            {product.colorImages.map(({ url, title }, idx) => {
              const maxWidth = 100 / product.colorImages.length;
              return (
                <div key={idx} className={styles.color} style={{ maxWidth: `${maxWidth}%` }}>
                  <img className={styles.colorImage} src={`${url}?w=200&fm=avif`}/>
                  <div className={styles.description}><span className="small">{title || 'No description'}</span></div>
                </div>
              )
            })}
          </div>
        </div>
      </Page>

      <Page>
        <section className={cn(styles.specPage)}>
          <h2>{t('specifications')}</h2>
          <table>
            {specificationsRows}
          </table>
          {!isArticlePriceSeparatePage && (
            <table className={styles.priceTable}>
              {articlePriceRows}
            </table>
          )}
        </section>
      </Page>

      {isArticlePriceSeparatePage && ( // Separate page when too many rows
        <Page>
          <section className={cn(styles.specPage)}>
            <table className={cn(articlePriceRowCount > articlePriceSmallStyleCount && styles.small, styles.priceTable)}>
              {articlePriceRows}
            </table>
          </section>
        </Page>
      )}

      {drawings.length > 0 &&
        <Page>
          <section className={cn(styles.page, styles.dimensionsPage, drawings.length === 1 && styles.one)}>
            <h2>{t('dimmensions')}</h2>
            <div className={styles.drawings}>
              {drawings.map((item, idx) =>
                <figure key={idx} className={styles.drawing}>
                  <img key={idx} src={item.drawing.url} />
                  <span className="small">{item.name}</span>
                </figure>
              )}
            </div>
            <footer><a href="https://www.orsjo.com/">{t('moreInfo')} →</a></footer>
          </section>
        </Page>
      }
    </>
  )
}

const parseSpecifications = (product : Product) => {
  const t = useTranslations('Catalogue')

  let lightsources: [LightsourceElement] = [];
  (product.models || []).map((m) => m.lightsources.map((l) => l)).forEach((l) => lightsources.push.apply(lightsources, l))
  lightsources = lightsources.filter((obj, index, arr) => arr.map(mapObj => mapObj.id).indexOf(obj.id) === index).map(({ amount, price, included, lightsource }) => ({ ...lightsource, included, amount, price }))
  lightsources = lightsources.filter((obj, index, arr) => arr.map(mapObj => mapObj.id).indexOf(obj.id) === index)

  const specs = [
    { key: 'designer', value: product.designer?.name },
    { key: 'electricalData', value: product.electricalData.map((el) => el.name).join(', ') },
    { key: 'description', value: product.presentation },
    { key: 'connection', value: product.connection?.name },
    { key: 'mounting', value: product.mounting?.name },
    { key: 'lightsource', value: lightsources.map(({ amount, included, name }) => `${amount} x ${name} ${included ? `(${t('included')})` : ''}`).join(', ') }, //Funkar inte
    { key: 'socket', value: product.sockets.map((el) => el.name).join(', ') },
    { key: 'weight', value: product.models.length && product.models?.[0].variants?.[0]?.weight ? `${product.models?.[0].variants?.[0]?.weight} kg` : undefined },
    { key: 'volume', value: product.models.length && product.models?.[0].variants?.[0]?.volume ? `${product.models?.[0].variants?.[0]?.volume} m³` : undefined },
    { key: 'care', value: null },
    { key: 'recycling', value: null }
  ]

  return (
    <>
      <tr>
        <td colSpan={2}><h3>{t('technicalSpec')}</h3></td>
      </tr>
      {specs.filter((s) => s.value).map(({ key, value }, idx) =>
        <tr key={idx}>
          <td>{t(key)}</td>
          <td>{value}</td>
        </tr>
      )}
    </>
  )
}


const parseArticlePrices = (product: Product, locale : Locale) => {

  const t = useTranslations('Catalogue')
  const rows = (
    <>
      <tr>
        <td colSpan={3}><h3>{t('articleNoPrice')}</h3></td>
      </tr>
      {product.models.map((m) => {
        const lightsources = m.lightsources.map(l => l).filter(({ included }) => !included)
        return m.variants.map((v, idx) =>
          <>
            {product.models.length > 1 && idx == 0 &&
              <tr>
                <td></td>
                <td>{m.name?.name}</td>
                <td></td>
              </tr>
            }
            <tr key={idx} >
              <td>{v.articleNo}</td>
              <td>{[v.material?.name, v.color?.name, v.feature?.name].filter(el => el).join(', ')}</td>
              <td>{convertPrice(v.price, locale)}</td>
            </tr>
            {m.variants.length == (idx + 1) && (lightsources.map(({ amount, lightsource }, idx) =>
              <tr key={idx}>
                <td>{lightsource.articleNo || '---'}</td>
                <td>{lightsource.name} <span>({t('needs')} {amount})</span></td>
                <td>{convertPrice(lightsource.price, locale)}</td>
              </tr>
            ))}
            {m.variants.length == (idx + 1) && (m.accessories.map(({ price, articleNo, accessory }, idx) =>
              <tr key={idx}>
                <td>{articleNo || '---'}</td>
                <td>{accessory?.name}</td>
                <td>{convertPrice(price, locale)}</td>
              </tr>
            ))}
            {idx + 1 === m.variants.length && <tr className={styles.space}><td></td></tr>}
          </>
        )
      }
      )}
    </>
  )
  return rows
}
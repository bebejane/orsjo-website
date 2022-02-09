import styles from './ProductSheet.module.scss'
import cn from 'classnames'
import { useTranslations } from 'next-intl'
import Markdown from '/lib/dato/components/Markdown'
import Page from "./Page"

export default function ProductSheet({ product }) {

  const t = useTranslations('Catalogue')

  const generatedAt = new Date().toISOString()
  const specs = parseSpecs(product)
  const drawings = product.models.map((m) => ({ drawing: m.drawing, name: m.name })).filter(d => d.drawing);

  return (
    <>
      <a name={product.slug}></a>
      <Page>
        <div className={cn(styles.frontPage)}>
          <a href="#home"><img className={styles.logo} src={'/images/logo.svg'} /></a>
          <span className={styles.generatedAt}>{generatedAt}</span>
          <div className={styles.intro}>
            <div className={styles.productImage}>
              {product.environmentImage && <img src={`${product.environmentImage?.url}?w=1200`} />}
            </div>
            <div className={styles.productText}>
              <h1 className={styles.title}>{product.title}</h1>
              <Markdown truncate={650} className={styles.description}>
                {product.description}
              </Markdown>
            </div>
          </div>
          <div className={styles.colors}>
            {product.colorImages.map(({ url, title }, idx) => {
              const maxWidth = 100 / product.colorImages.length;
              return (
                <div key={idx} className={styles.color} style={{ maxWidth: `${maxWidth}%` }}>
                  <img
                    className={styles.colorImage}
                    src={`${url}?w=600`}
                  />
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
            <tr>
              <td colSpan={2}><h3>{t('technicalSpec')}</h3></td>
            </tr>
            {specs.filter((s) => s.value).map(({ key, value }, idx) =>
              <tr key={idx}>
                <td>{t(key)}</td>
                <td>{value}</td>
              </tr>
            )}
          </table>
          <table>
            <tr>
              <td colSpan={3}><h3><br />{t('articleNoPrice')}</h3></td>
            </tr>
            {product.models.map((m) => {
              const lightsources = m.lightsources.map(l => l).filter(({ included }) => !included)
              return m.variants.map((v, idx) =>
                <>
                  {product.models.length > 1 && idx == 0 &&
                    <tr>
                      <td></td>
                      <td>{m.name}</td>
                    </tr>
                  }
                  <tr key={idx} >
                    <td>{v.articleNo}</td>
                    <td>{[v.material?.name, v.color?.name, v.specificFeature].filter(el => el).join(', ')}</td>
                  </tr>
                  {m.variants.length == (idx + 1) && (lightsources.map(({ amount, lightsource }) =>
                    <tr>
                      <td>{lightsource.articleNo || '---'}</td>
                      <td>{lightsource.name} ({t('needs')} {amount})</td>
                      <td>{lightsource.price}</td>
                    </tr>
                  ))}
                  {idx + 1 === m.variants.length && <tr className={styles.space}><td></td></tr>}
                </>
              )
            })}
          </table>
        </section>
      </Page>

      {
        drawings.length > 0 &&
        <Page>
          <section className={cn(styles.page, styles.dimensionsPage, drawings.length === 1 && styles.one)}>
            <h2>{t('dimmensions')}</h2>
            <div className={styles.drawings}>
              {drawings.map((item, idx) =>
                <figure className={styles.drawing}><img key={idx} src={item.drawing.url} /><span className="small">{item.name}</span></figure>
              )}
            </div>
            <footer>{t('moreInfo')}</footer>
          </section>
        </Page>
      }
    </>
  )
}

const parseSpecs = (product, t) => {
  const lightsources = parseLightsources(product)

  return [
    { key: 'designer', value: product.designer?.name },
    { key: 'electricalData', value: product.electricalData.map((el) => el.name).join(', ') },
    { key: 'description', value: product.presentation },
    { key: 'connection', value: product.connection?.name },
    { key: 'mounting', value: product.mounting?.name },
    { key: 'socket', value: product.sockets.map((el) => el.name).join(', ') },
    { key: 'lightsource', value: lightsources.map(({ amount, included, name }) => `${amount} x ${name} ${included ? `(${t('included')})` : ''}`).join(', ') }, //Funkar inte
    { key: 'weight', value: product.models.length ? product.models?.[0].variants?.[0].weight : undefined },
    { key: 'volume', value: product.models.length ? product.models?.[0].variants?.[0].volume : undefined },
    { key: 'care', value: null },
    { key: 'recycling', value: null }
  ]
}

const parseLightsources = (product) => {
  let lightsources = [];
  (product.models || []).map((m) => m.lightsources.map((l) => l)).forEach((l) => lightsources.push.apply(lightsources, l))
  lightsources = lightsources.filter((obj, index, arr) => arr.map(mapObj => mapObj.id).indexOf(obj.id) === index).map(({ amount, price, lightsource }) => ({ ...lightsource, amount, price }))
  lightsources = lightsources.filter((obj, index, arr) => arr.map(mapObj => mapObj.id).indexOf(obj.id) === index)
  return lightsources
}
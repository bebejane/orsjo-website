import styles from './ProductRow.module.scss'
import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { priceIncLight } from '/lib/utils'
import { convertPrice } from '/lib/utils'

type ProductRowProps = {product: Product, withLightsource: boolean, locale : Locale}

export default function ProductRow({ product, withLightsource, locale } : ProductRowProps) {

  const t = useTranslations('Catalogue')
  const drawings = product.models.map((m) => ({ drawing: m.drawing, name: m.name })).filter(d => d.drawing);
  
  const rows = product.models.map((m, idxm) => {
    const lightsources = m.lightsources.filter(({ included }) => !included)
    return m.variants.map((v, idx) => {
      const isProductHeader = idxm === 0 && idx === 0
      return (
        <>
          {isProductHeader &&
            <tr key={`cat-${idx}-${idxm}`}>
              <td>
                <img src={`${product.image?.url}?w=200&fm=jpg`}/>
              </td>
              <td className={styles.title}>
                <strong>
                  {product.title}<br />
                  {product.categories.map((category) => category.name).join(", ")}
                </strong>
              </td>
              <td></td>
            </tr>
          }
          {product.models.length > 1 && idx == 0 &&
            <tr key={`name-${idx}-${idxm}`}>
              <td></td>
              <td className={styles.name}>{m.name?.name}</td>
              <td></td>
            </tr>
          }
          <tr key={`price-${idx}-${idxm}`}>
            <td>{v.articleNo}</td>
            <td>{[v.color?.name, v.material?.name, v.feature?.name].filter(el => el).join(', ')}</td>
            <td>{withLightsource ? priceIncLight(v.price, lightsources, locale) : convertPrice(v.price, locale)}</td>
          </tr>
          {m.variants.length === (idx + 1) && (lightsources.filter(({ optional }) => !withLightsource || !optional).map(({ amount, lightsource }, idxl) =>
            <tr key={`light-${idx}-${idxl}-${idxm}`}>
              <td>{lightsource.articleNo || '---'}</td>
              <td>{lightsource.name} ({t('needs')} {amount})</td>
              <td>{withLightsource ? "Inkluderad" : convertPrice(lightsource.price, locale)}</td>
            </tr>
          ))}
          {m.variants.length === (idx + 1) && (m.accessories.map(({ price, articleNo, accessory }, idxv) =>
            <tr key={`acc-${idx}-${idxv}-${idxm}`}>
              <td>{articleNo || '---'}</td>
              <td>{accessory?.name}</td>
              <td>{convertPrice(price, locale)}</td>
            </tr>
          ))}
          {idx + 1 === m.variants.length && <tr key={`space-${idx}-${idxm}`} className={styles.space}><td></td></tr>}
        </>
      )
    })
  })

  return (
    <section className={cn(styles.table)}>
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </section>
  )
}
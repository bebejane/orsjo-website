import styles from './ProductRow.module.scss'
import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { priceIncLight } from '/lib/utils'
import { convertPrice } from '/lib/utils'

export default function ProductRow({ product, withLightsource, locale }) {

  const t = useTranslations('Catalogue')
  const drawings = product.models.map((m) => ({ drawing: m.drawing, name: m.name })).filter(d => d.drawing);

  return (
    <>
      <section className={cn(styles.table)}>
        <table>
          {product.models.map((m, idxm) => {

            const lightsources = m.lightsources.filter(({ included }) => !included)

            return m.variants.map((v, idx) =>
              <>
                {idxm === 0 && idx == 0 &&
                  <tr>
                    <td>
                      <img src={`${product.image?.url}?w=200&fm=avif`} />
                    </td>
                    <td className={styles.title}
                    ><strong>{product.title}<br />
                        {product.categories.map((category) => category.name).join(", ")}
                      </strong>
                    </td>
                  </tr>
                }
                {
                  product.models.length > 1 && idx == 0 &&
                  <tr>
                    <td></td>
                    <td className={styles.name}>{m.name?.name}</td>
                  </tr>
                }
                <tr key={idx} >
                  <td>{v.articleNo}</td>
                  <td>{[v.color?.name, v.material?.name, v.feature?.name].filter(el => el).join(', ')}</td>
                  <td>
                    {withLightsource ? priceIncLight(v.price, lightsources) : convertPrice(v.price, locale)}</td>
                </tr>
                {m.variants.length == (idx + 1) && (lightsources.filter(({ optional }) => !withLightsource || !optional).map(({ amount, lightsource }) =>
                  <tr>
                    <td>{lightsource.articleNo || '---'}</td>
                    <td>{lightsource.name} ({t('needs')} {amount})</td>
                    <td>{withLightsource ? "Inkluderad" : convertPrice(lightsource.price, locale)}</td>
                  </tr>
                ))}
                {m.variants.length == (idx + 1) && (m.accessories.map(({ price, articleNo, accessory }) =>
                  <tr>
                    <td>{articleNo || '---'}</td>
                    <td>{accessory?.name}</td>
                    <td>{convertPrice(price, locale)}</td>
                  </tr>
                ))}
                {idx + 1 === m.variants.length && <tr className={styles.space}><td></td></tr>}
              </>
            )
          })}
        </table>
      </section>

    </>
  )
}

const parseLightsources = (product) => {
  let lightsources = [];
  (product.models || []).map((m) => m.lightsources.map((l) => l)).forEach((l) => lightsources.push.apply(lightsources, l))
  lightsources = lightsources.filter((obj, index, arr) => arr.map(mapObj => mapObj.id).indexOf(obj.id) === index).map(({ amount, price, lightsource }) => ({ ...lightsource, amount, price }))
  lightsources = lightsources.filter((obj, index, arr) => arr.map(mapObj => mapObj.id).indexOf(obj.id) === index)
  return lightsources
}
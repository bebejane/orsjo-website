import styles from './ProductRow.module.scss'
import cn from 'classnames'
import { useTranslations } from 'next-intl'

export default function ProductSheet({ product, withLightsource }) {

  const t = useTranslations('Catalogue')
  const generatedAt = new Date().toISOString()
  const drawings = product.models.map((m) => ({ drawing: m.drawing, name: m.name })).filter(d => d.drawing);

  return (
    <>
      <section className={cn(styles.table)}>
        <table>
          {product.models.map((m, idxm) => {
            const lightsources = m.lightsources.map(l => l).filter(({ included }) => !included)
            return m.variants.map((v, idx) =>
              <>
                {idxm === 0 && idx == 0 &&
                  <tr>
                    <td>
                      <img src={`${product.image?.url}?w=1200`} />
                    </td>
                    <td><strong>{product.title}</strong><br />
                      {product.categories.map((category) => category.name).join(", ")}</td>
                  </tr>
                }
                {
                  product.models.length > 1 && idx == 0 &&
                  <tr>
                    <td></td>
                    <td className={styles.name}>{m.name}</td>
                  </tr>
                }
                < tr key={idx} >
                  <td>{v.articleNo}</td>
                  <td>{[v.material?.name, v.color?.name, v.specificFeature].filter(el => el).join(', ')}</td>
                  <td>Price {withLightsource}</td>
                </tr>
                {m.variants.length == (idx + 1) && !withLightsource && (lightsources.map(({ amount, lightsource }) =>
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
      </section >

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
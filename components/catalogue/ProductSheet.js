import styles from './ProductSheet.module.scss'
import cn from 'classnames'
import Markdown from '/lib/dato/components/Markdown'

export default function ProductSheet({ product }) {

  const generatedAt = new Date().toISOString()
  const specs = parseSpecs(product)
  const drawings = product.models.map((m) => ({ drawing: m.drawing, name: m.name })).filter(d => d.drawing);

  return (
    <>
      <section className={cn(styles.page, styles.frontPage)}>
        <img className={styles.logo} src={'/images/logo.svg'} />
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
      </section>

      <section className={cn(styles.page, styles.specPage)}>
        <h2>Specifications</h2>
        <table>
          <tr>
            <td colSpan={2}><h3>Technical specification</h3></td>
          </tr>
          {specs.filter((s) => s.value).map(({ label, value }, idx) =>
            <tr key={idx}>
              <td>{label}</td>
              <td>{value}</td>
            </tr>
          )}
        </table>
        <table>
          <tr>
            <td colSpan={2}><h3><br />Article No. and Model</h3></td>
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
                    <td>{lightsource.name} (Needs {amount})</td>
                  </tr>
                ))}
                {idx + 1 === m.variants.length && <tr className={styles.space}><td></td></tr>}
              </>
            )
          })}
        </table>
      </section>

      {
        drawings.length > 0 &&
        <section className={cn(styles.page, styles.dimensionsPage, drawings.length === 1 && styles.one)}>
          <h2>Dimensions</h2>
          <div className={styles.drawings}>
            {drawings.map((item, idx) =>
              <figure className={styles.drawing}><img key={idx} src={item.drawing.url} /><span className="small">{item.name}</span></figure>
            )}
          </div>
          <footer>For more info, visit Örsjö website</footer>
        </section>
      }
    </>
  )
}

const parseSpecs = (product) => {
  
  const lightsources = parseLightsources(product)
  
  return [
    { label: 'Designer', value: product.designer?.name },
    { label: 'Electrical data', value: product.electricalData.map((el) => el.name).join(', ') },
    { label: 'Description', value: product.presentation },
    { label: 'Connection', value: product.connection?.name },
    { label: 'Mounting', value: product.mounting?.name },
    { label: 'Sockets', value: product.sockets.map((el) => el.name).join(', ') },
    { label: 'Lightsource', value: lightsources.map(({amount, included, name}) => `${amount} x ${name} ${included ? '(Included)' : ''}`).join(', ')},
    { label: 'Weight', value: product.models.length ? product.models?.[0].variants?.[0].weight : undefined },
    { label: 'Volume', value: product.models.length ? product.models?.[0].variants?.[0].volume : undefined },
    { label: 'Care', value: null },
    { label: 'Recycling', value: null }
  ]
}

const parseLightsources = (product) => {
  let lightsources = [];
  (product.models || []).map((m)=> m.lightsources.map((l) => l )).forEach( (l) => lightsources.push.apply(lightsources, l))
  lightsources = lightsources.filter((obj, index, arr) => arr.map(mapObj => mapObj.id).indexOf(obj.id) === index).map(({amount, price, lightsource}) => ({...lightsource, amount, price}))
  lightsources = lightsources.filter((obj, index, arr) => arr.map(mapObj => mapObj.id).indexOf(obj.id) === index)
  return lightsources
}
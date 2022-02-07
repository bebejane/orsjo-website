import styles from './ProductSheet.module.scss'
import cn from 'classnames'
import Markdown from '/lib/dato/components/Markdown'

export default function ProductSheet({ product }) {

  const generatedAt = new Date().toISOString()
  const specs = parseSpecs(product)

  const drawings = product.models.map((m) => m.drawing).filter(d => d);

  return (
    <>
      <section className={cn(styles.page, styles.frontPage)}>
        <img className={styles.logo} src={'/images/orsjo-logo-2014.png'} />
        <span className={styles.generatedAt}>{generatedAt}</span>
        <div className={styles.intro}>
          <div className={styles.productImage}>
            {product.environmentImage && <img src={product.environmentImage?.url} />}
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
                <div className={styles.description}>{title || 'No description'}</div>
              </div>
            )
          })}
        </div>
      </section>

      <section className={cn(styles.page, styles.specPage)}>
        <h1>Specifications</h1>
        <table>
          <tr>
            <td colSpan={2}>Technical specification</td>
          </tr>
          {specs.map(({ label, value }, idx) =>
            <tr key={idx}>
              <td>{label}</td><td>{value || '----'}</td>
            </tr>
          )}
        </table>
        <table>
          <tr>
            <td colSpan={2}>Article No. and Model</td>
          </tr>
          {product.models.map((m) => {
            return m.variants.map((v, idx) =>
              <tr key={idx} >
                <td>{v.articleNo}</td>
                <td>{[v.material?.name, v.color?.name, v.specificFeature].filter(el => el).join(', ')}</td>
              </tr>
            )
          })}
        </table>
      </section>

      {drawings.length > 0 &&
        <section className={cn(styles.page, styles.dimensionsPage)}>
          <h1>Dimensions</h1>
          <div className={styles.drawings}>
            {drawings.map((drawing, idx) =>
              <img key={idx} className={styles.drawing} src={drawing.url} />
            )}
          </div>
        </section>
      }
    </>
  )
}

const parseSpecs = (product) => {
  return [
    { label: 'Designer', value: product.designer?.name },
    { label: 'Electrical data', value: product.electricalData.map((el) => el.name).join(', ') },
    { label: 'Description', value: product.presentation },
    { label: 'Connection', value: product.connection?.name },
    { label: 'Mounting', value: product.mounting?.name },
    { label: 'Sockets', value: product.sockets.map((el) => el.name).join(', ') },
    { label: 'Lightsource', value: product.models.length ? product.models?.[0].lightsources?.[0]?.lightsource.name : undefined },
    { label: 'Weight', value: product.models.length ? product.models?.[0].variants?.[0].weight : undefined },
    { label: 'Volume', value: product.models.length ? product.models?.[0].variants?.[0].volume : undefined },
    { label: 'Care', value: null },
    { label: 'Recycling', value: null }
  ]
}
import styles from './ProductSheet.module.scss'
import cn from 'classnames'
import Markdown from '/lib/dato/components/Markdown'

export default function ProductSheet({product}){
  
  const specs = [
    {label: 'Designer',value : product.designer?.name},
    {label: 'Electrical data', value : product.electricalData.map((el)=> el.name).join(', ')},
    {label: 'Description',value : product.presentation},
    {label: 'Connection',value : product.connection?.name},
    {label: 'Mounting',value : product.mounting?.name},
    {label: 'Sockets',value : product.sockets.map((el)=> el.name).join(', ')},
    {label: 'Lightsource',value : product.models?.[0].lightsources?.[0]?.lightsource.name},
    {label: 'Weight',value : product.models?.[0].variants?.[0].weight},
    {label: 'Volume',value : product.models?.[0].variants?.[0].volume},
    {label: 'Care',value : null},
    {label: 'Recycling',value : null}
  ]
  const drawings = product.models.map((m)=> m.drawing).filter(d => d);

  return (
    <>
      <section className={cn(styles.page, styles.frontPage)}>
        <img className={styles.logo} src={'/images/orsjo-logo-2014.png'}/>
        <div className={styles.intro}>
          <div className={styles.productImage}>
            <img src={product.image?.url} />
          </div>
          <div className={styles.productText}>
            <h1 className={styles.title}>{product.title}</h1>
            <Markdown truncate={650} className={styles.description}>
              {product.description}
            </Markdown>
          </div>
        </div>
        <div className={styles.colors}>
          {product.colorImages.map(({url}) => {
            const maxWidth = 100/product.colorImages.length;
            return (
              <div className={styles.color} style={{maxWidth:`${maxWidth}%`}}>
                <img 
                  className={styles.colorImage} 
                  src={url} 
                />
                <div className={styles.description}>color desc</div>
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
          {specs.map(({label, value})=>
            <tr>
              <td>{label}</td><td>{value || '----'}</td>
            </tr>
          )}
        </table>
        <table>
          <tr>
            <td colSpan={2}>Article No. and Model</td>
          </tr>
          {product.models.map((m)=>{
            return m.variants.map((v) => 
              <tr>
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
            {drawings.map((drawing)=>
              <img className={styles.drawing} src={drawing.url} />
            )}
          </div>
        </section>
      }
    </>
	)
}
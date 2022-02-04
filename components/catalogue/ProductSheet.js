import styles from './ProductSheet.module.scss'
import cn from 'classnames'
import Markdown from '/lib/dato/components/Markdown'

export default function ProductSheet({product}){
  
	return (
    <>
      <section className={cn(styles.page, styles.frontPage)}>
        <img className={styles.logo} src={'/images/orsjo-logo-2014.png'}/>
        <img className={styles.productImage} src={product.image?.url} />
        <h1 className={styles.title}>{product.title}</h1>
        <Markdown className={styles.description}>
          {product.description}
        </Markdown>
        <div className={styles.colors}>
          {product.colorImages.map(({url}) => {
            const maxWidth = 100/product.colorImages.length;
            return (
              <div className={styles.color} style={{maxWidth:`${maxWidth}%`}}>
                <img 
                  className={styles.colorImage} 
                  src={url} 
                  style={{
                    flex:`0 1 ${maxWidth}%`,
                    maxWidth:`${maxWidth}%`
                  }}
                />
                <div className={styles.description}>product desc</div>
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
          <tr>
            <td>Design</td><td>{product.designer.name}</td>
          </tr>
          {product.electricalData &&
            <tr>
              <td>Electrical data</td><td>{product.electricalData.map((el)=> el.name).join(', ')}</td>
            </tr>
          }
          {product.presentation &&
            <tr>
              <td>Description</td><td>{product.presentation}</td>
            </tr>
          }
          {product.connection &&
            <tr>
              <td>Connection</td><td>{product.connection.name}</td>
            </tr>
          }
          {product.mounting &&
            <tr>
              <td>Mounting</td><td>{product.mounting.name}</td>
            </tr>
          }
          {product.sockets &&
            <tr>
              <td>Sockets</td><td>{product.sockets.map((el)=> el.name).join(', ')}</td>
            </tr>
          }
          <tr>
            <td>Lightsource</td><td>--</td>
          </tr>
          <tr>
            <td>Weight</td><td>--</td>
          </tr>
          <tr>
            <td>Volume</td><td>--</td>
          </tr>
          <tr>
            <td>Care</td><td>--</td>
          </tr>
          <tr>
            <td>Recycling</td><td>--</td>
          </tr>
          
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

      <section className={cn(styles.page, styles.dimensionsPage)}>
        <h1 className={styles.title}>Dimensions</h1>
        {product.models.filter(({drawing}) => drawing).map(({drawing})=>
          <img className={styles.drawing} src={drawing.url} />
        )}
      </section>
    </>
	)
}
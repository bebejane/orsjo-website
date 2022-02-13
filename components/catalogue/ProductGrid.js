import styles from './ProductGrid.module.scss'
import cn from 'classnames'
import { useTranslations } from 'next-intl'
import Page from "./Page"


export default function ProductGrid({ products }) {
  const t = useTranslations('Catalogue')

  return (
    <>
      <Page>
        <div className={cn(styles.gridPageOne, styles.productGrid)}>
          <a name="home"></a>
          <header>
            <h1>{t('products')}</h1>
            <p>{t('tip')}</p>
          </header>
          {products.slice(0, 20).map(({ image, title, slug }) =>
            <a className={styles.product} href={`#${slug}`}>
              <p>{title}</p>
              {image && <img src={`${image?.url}?w=300&fm=avif`} />}
            </a>
          )}
        </div>
      </Page>
      <Page>
        <div className={cn(styles.productGrid, styles.fullGrid)}>
          {products.slice(21, 46).map(({ image, title, slug }) =>
            <a className={styles.product} href={`#${slug}`}>
              <p>{title}</p>
              {image && <img src={`${image?.url}?w=300&fm=avif`} />}
            </a>
          )}
        </div>
      </Page>
      <Page>
        <div className={cn(styles.productGrid, styles.fullGrid)}>
          {products.slice(47, 72).map(({ image, title, slug }) =>
            <a className={styles.product} href={`#${slug}`}>
              <p>{title}</p>
              {image && <img src={`${image?.url}?w=300&fm=avif`} />}
            </a>
          )}
        </div>
      </Page>
      <Page>
        <div className={cn(styles.productGrid, styles.fullGrid)}>
          {products.slice(72, 98).map(({ image, title, slug }) =>
            <a className={styles.product} href={`#${slug}`}>
              <p>{title}</p>
              {image && <img src={`${image?.url}?w=300&fm=avif`} />}
            </a>
          )}
        </div>
      </Page>

    </>
  )
}

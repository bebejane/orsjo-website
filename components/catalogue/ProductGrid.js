import styles from './ProductGrid.module.scss'
import cn from 'classnames'
import { useTranslations } from 'next-intl'

export default function ProductGrid({ products }) {
  const t = useTranslations('Catalogue')

  return (
    <>
      <div className={cn(styles.gridPageOne, styles.productGrid)}>
        <a name="home"></a>
        <header>
          <h1>{t('products')}</h1>
          <p>{t('tip')}</p>
        </header>
        {products.map(({ image, title, slug }) =>
          <a className={styles.product} href={`#${slug}`}>
            <p>{title}</p>
            {image && <img src={`${image?.url}?w=300`} />}
          </a>
        )}
      </div>
    </>
  )
}

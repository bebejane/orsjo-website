import { Thumbnail } from '/components'

export type ProductThumbnailProps = { product: ProductRecord, inverted?:boolean }

export default function ProductThumbnail({ product, inverted }: ProductThumbnailProps) {
	
	return (
    <Thumbnail  
      slug={`/products/${product.slug}`} 
      image={product.image} 
      imageHover={product.environmentImage} 
      title={product.title}
      subtitle={product.designer?.name}
      inverted={inverted}
    />
	)
}
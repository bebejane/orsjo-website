import "swiper/css";
import styles from './Gallery.module.scss'
import cn from 'classnames'
import { Image } from "react-datocms"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useRef, useEffect } from 'react';

export type GalleryProps = {images: FileField[], onClose: Function, index:number}

export default function Gallery({ images, onClose, index = 0 } : GalleryProps) {
  
  
  const swiperRef = useRef()
  const [realIndex, setRealIndex] = useState(index)
  const [title, setTitle] = useState()

  useEffect(() => setTitle(images[realIndex]?.title), [realIndex])

  if (!images) return null
  
  return (
    <div className={cn(styles.gallery, images.length <= 1 && styles.noArrows)}>
      <div className={styles.back} onClick={() => swiperRef.current.slidePrev()}>❮</div>
      <div className={styles.images} onClick={() => swiperRef?.current?.slideNext()}>
        <Swiper
          loop={true}
          spaceBetween={500}
          slidesPerView={1}
          initialSlide={index}
          onSlideChange={({ realIndex }) => setRealIndex(realIndex)}
          onSwiper={(swiper) => swiperRef.current = swiper}
        >
          {images.map((image, idx) =>
            <SwiperSlide key={idx} className={styles.slide}>
              {image.responsiveImage ? 
                <Image
                  className={styles.image}
                  pictureClassName={styles.picture}
                  data={image.responsiveImage}
                  lazyLoad={false}
                  usePlaceholder={false}
                />
              :
                <div className={styles.svg}>
                  <img src={image.url} className={styles.image} />
                </div>
              }
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <div className={styles.forward} onClick={() => swiperRef.current.slideNext()}>❯</div>
      <div className={styles.caption}>{title}</div>
      <div className={styles.close} onClick={onClose}>×</div>
    </div>
  )
}
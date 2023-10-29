import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import ImageOne from "../../../public/bgimag/pic1.jpg";
import ImageTwo from "../../../public/bgimag/pic2.jpg";
import ImageThree from "../../../public/bgimag/pic3.jpg";
import ImageFour from "../../../public/bgimag/pic4.jpg";
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { breakpoints } from '@/styles/theme';
import styles from "./ImageSlider.module.scss"

const ImageSlider = () => {
  const isLargeScreen = useMediaQuery(breakpoints.md);
  const [previewSlides, setPreviewSlides] = useState(1);

  useEffect(() => {
    if (isLargeScreen){
      setPreviewSlides(1);
    } else {
      setPreviewSlides(1);
    }
  }, [isLargeScreen])

  return (
    <Swiper className={styles.swiper}
      spaceBetween={50}
      slidesPerView={previewSlides}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className={styles.swiperslide}><Image src={ImageOne} alt='' /></SwiperSlide>
      <SwiperSlide className={styles.swiperslide}><Image src={ImageTwo} alt='' /></SwiperSlide>
      <SwiperSlide className={styles.swiperslide}><Image src={ImageThree} alt='' /></SwiperSlide>
      <SwiperSlide className={styles.swiperslide}><Image src={ImageFour} alt='' /></SwiperSlide>
    </Swiper>
  )
}

export default ImageSlider

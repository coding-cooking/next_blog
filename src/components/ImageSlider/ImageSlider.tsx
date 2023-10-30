import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import ImageOne from "../../../public/bgimag/pic1.jpg";
import ImageTwo from "../../../public/bgimag/pic2.jpg";
import ImageThree from "../../../public/bgimag/pic3.jpg";
import ImageFour from "../../../public/bgimag/pic4.jpg";
import ImageFive from "../../../public/bgimag/pic5.jpg";
import ImageSix from "../../../public/bgimag/pic6.jpg";
import ImageSeven from "../../../public/bgimag/pic7.jpg";
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { breakpoints } from '@/styles/theme';
import styles from "./ImageSlider.module.scss"
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ImageSlider = () => {
  const isLargeScreen = useMediaQuery(breakpoints.md);
  const [previewSlides, setPreviewSlides] = useState(1);

  // useEffect(() => {
  //   if (isLargeScreen){
  //     setPreviewSlides(1);
  //   } else {
  //     setPreviewSlides(1);
  //   }
  // }, [isLargeScreen])

  return (
    <div className={styles.container}>
      <Swiper
        navigation={true} 
        modules={[Navigation]}
        // spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><Image src={ImageOne} alt='' /></SwiperSlide>
        <SwiperSlide><Image src={ImageTwo} alt='' /></SwiperSlide>
        <SwiperSlide><Image src={ImageThree} alt='' /></SwiperSlide>
        <SwiperSlide><Image src={ImageFour} alt='' /></SwiperSlide>
        <SwiperSlide><Image src={ImageFive} alt='' /></SwiperSlide>
        <SwiperSlide><Image src={ImageSix} alt='' /></SwiperSlide>
        <SwiperSlide><Image src={ImageSeven} alt='' /></SwiperSlide>
      </Swiper>
    </div>
    
  )
}

export default ImageSlider

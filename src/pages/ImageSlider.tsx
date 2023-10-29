import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react'
import styles from "./ImageSlider.module.scss"

type ImageSliderProps = {
    imageUrls: StaticImageData[];
}

const ImageSlider = ({imageUrls}: ImageSliderProps) => {
    const [imageIndex, setImageIndex] = useState<number>(0);
  return (
      <div className={styles.imageContainer}>
         <Image src={imageUrls[imageIndex]} alt='' className={styles.imageSlider}/>
         <button><ArrowBigLeft /></button>
          <button><ArrowBigRight /></button>

      
    </div>
  )
}

export default ImageSlider

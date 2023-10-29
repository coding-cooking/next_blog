import Head from "next/head";
import styles from "./Main.module.scss"
import Image from "next/image";
import homepageImage from "../../public/background.jpg"
import { useThemeContext } from "@/context";
import pic1 from "../../public/bgimag/pic1.jpg"
import pic2 from "../../public/bgimag/pic2.jpg"
import pic3 from "../../public/bgimag/pic3.jpg"
import pic4 from "../../public/bgimag/pic4.jpg"
import pic5 from "../../public/bgimag/pic5.jpg"
import pic6 from "../../public/bgimag/pic6.jpg"
import pic7 from "../../public/bgimag/pic7.jpg"
import pic8 from "../../public/bgimag/pic8.jpg"
import ImageSlider from "./ImageSlider";

const Images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8]

export default function Home() {

    const { theme, setTheme } = useThemeContext();

    return (
        <div>
            <Head>
                <title>My blog</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href=""></link>
            </Head>
            <div className={`${styles.container} ${theme === 'dark' && styles.darkContainer}`} >
                <div className={styles.pageWrapper}>
                    <div className={styles.imageContainer}>
                        <ImageSlider imageUrls={Images}/>
                    </div>
                    <div className={styles.contentContainer}>
                        <h2 className={styles.title}>
                            I am a front end developer,
                            <br />
                            and also a cooker.
                        </h2>
                        <p className={styles.contentMidium}>
                            Now I live in Sydney, Australia.
                            <br />
                            Welcome to contact me.
                        </p>
                        <p className={styles.contentSmall}>
                            We can talk about coding,
                            <br />
                            or about cooking, life or reading...
                        </p>
                        <p className={styles.contentMini}>
                            By Fei
                        </p>

                    </div>

                </div>

            </div>
            
        </div>
    )
}
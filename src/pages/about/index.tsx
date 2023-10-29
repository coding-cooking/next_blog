import { useThemeContext } from "@/context";
import styles from "./about.module.scss"

export default function About() {
    const { theme, setTheme } = useThemeContext();


    return <div className={`${styles.container} ${theme === "dark" && styles.darkContainer}`}>
        <div  className={styles.aboutWrapper}>
            <p> I'm a software engineer living in Sydney. </p>
            <p>Thank you for visiting my blog.</p>
            <p>If you have anything want to share with me, please subscribe my blog and discuss with me.</p>
        </div>

    </div>
    
}
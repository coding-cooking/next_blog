import Link from "next/link";
import styles from "./Nav.module.scss";
import { Logo } from "../../../public/svg/Logo";
import { useThemeContext } from "@/context";
import { useEffect, useState } from "react";
import { Dark } from "../../../public/svg/Dark";
import { Light } from "../../../public/svg/Light";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import SideMenu from "./SideMenu";
import { useDisableBodyScroll } from "@/hooks/useDisableBodyScroll";

export default function Nav() {

	const { theme, setTheme } = useThemeContext();
	const [open, setOpen] = useState<boolean>(false);

	useDisableBodyScroll(open);

	useEffect(() => {
		if (open) {
			document.body.classList.add('bg-blur')
		} else {
			document.body.classList.remove('bg-blur')
		}
	}, [open])

	return (
		<div className={`${styles.navWrapper} ${theme === "dark" && styles.darkNavWrapper}`}>
			<Link href="/" className={styles.logo}>
				<Logo />
			</Link>
			<div className={styles.lgLinks}>
				<div className={styles.home}>
					<Link href="/">Home</Link>
				</div>
				<div className={styles.blog}>
					<Link href="/blog">Blog</Link>
				</div>
				<div className={styles.about}>
					<Link href="/about">About</Link>
				</div>
			</div>
			<div className={styles.burgerBtn}>
				{!open && (<RiMenuLine size={40}
					onClick={() => { setOpen(open => !open) }}
				/>)
				}
				{open && (<RiCloseLine size={40}
					onClick={() => { setOpen(open => !open) }}
				/>)}

			</div>
			{
				open && <div className={styles.sideMenu}>
					<SideMenu open={open} setOpen={setOpen} />
				</div>
			}

			<div className={styles.themeBtn}>
				{theme === "light" && <div className={styles.light} onClick={() => { setTheme("dark") }}> <Dark /> </div>}
				{theme === "dark" && <div className={styles.dark} onClick={() => { setTheme("light") }}> <Light /> </div>}
			</div>
		</div>
	);
}


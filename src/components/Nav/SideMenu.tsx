import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from './SideMenu.module.scss'
import Link from 'next/link'
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { useThemeContext } from '@/context';
import { Dark } from '../../../public/svg/Dark';
import { Light } from '../../../public/svg/Light';

type SideMenuProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const SideMenu = ({ open, setOpen }: SideMenuProps) => {
  const { theme, setTheme } = useThemeContext();

  function handleSideMenu() {
    setOpen(open => !open)
  }

  
    

  return (
    <div className={`${styles.container} ${theme === "dark" && styles.darkContainer}`}>
        {/* <div className={styles.burgerBtn}>
            {!open && (<RiMenuLine
                onClick = {() => {setOpen((prevopen) => (!prevopen))}}
              />)
            }
            {open && (<RiCloseLine 
                  onClick={() => {setOpen((prevopen) => (!prevopen))}}
            />)}

        </div> */}
        <div className={styles.links}>
          <div className={styles.home}>
            <Link href="/" onClick={handleSideMenu}>Home</Link>
          </div>
          <div className={styles.blog}>
          <Link href="/blog" onClick={handleSideMenu}>Blog</Link>
          </div>
          <div className={styles.about}>
          <Link href="/about" onClick={handleSideMenu}>About</Link>
          </div>
        </div>
        <div className={styles.themeBtn}>
          {theme === "light" && <div className={styles.light} onClick={() => { setTheme("dark") }}> <Dark/> </div>}
          {theme === "dark" && <div className={styles.dark} onClick={() => { setTheme("light") }}> <Light /> </div>}
        </div>
    </div>
      
  )
}

export default SideMenu

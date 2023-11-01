"use client"
import styles from './styles.module.css'
import Image from 'next/image'
import hamburger_menu from 'public/icon/hamburger-menu.svg'

const Navbar = () => {
  return (
    <>
      <div className={`${styles.navbar}`}>
        <div className={`${styles.menu_btn}`}>
          <Image 
            src={hamburger_menu}
            height={30}
            width={30}/>
        </div>
          <ul className={`${styles.navlist} `}>
              <li><a className={`${styles.active}`} href="#home">Home</a></li>
              <li><a href="#news">About Us</a></li>
              <li><a href="#news">Research</a></li>
              <li><a href="#contact">Contact Us</a></li>
          </ul>
          <div className={` ${styles.hr_bar}`} />    
      </div>
    
    </>
    
  )
}

export default Navbar
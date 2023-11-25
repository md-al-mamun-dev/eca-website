"use client"
import styles from './styles.module.css'
import Image from 'next/image'
import hamburger_menu from 'public/icon/hamburger-menu.svg'



const Navbar = () => {
  // const router = useRouter() 

// console.log(router.pathname)

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
              <li><a className={`${styles.active}`} href="/#hero">Home</a></li>
              {/* <li><a href="#aboutus">About Us</a></li> */}
              <li><a href="/#research">Research</a></li>
              <li><a href="/#contact">Contact Us</a></li>
          </ul>
          <div className={` ${styles.hr_bar}`} />    
      </div>
    
    </>
    
  )
}

export default Navbar
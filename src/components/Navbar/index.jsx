"use client"
import styles from './styles.module.css'

const Navbar = () => {
  return (
    <div className={`${styles.navbar}`}>
        <ul className={`${styles.navlist} `}> 
            <li><a className={`${styles.active}`} href="#home">Home</a></li>
            <li><a href="#news">About Us</a></li>

            <li><a href="#news">Research</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
    </div>
  )
}

export default Navbar
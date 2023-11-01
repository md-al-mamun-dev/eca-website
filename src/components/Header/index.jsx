"use client"
import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import logo from 'public/ECA_logo.svg'
import Image from 'next/image'
import Navbar from '../Navbar'

const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);
  // const [scale, setScale] = useState('grow-100');
  const [imgWidth, setImgWidth] = useState();

  const [position, setPosition] = useState('relative');



  useEffect(() => {
    const handleScroll = e => setScrollTop(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(()=>{
    if(scrollTop > 100){
      setPosition('sticky')
    }
    else{
      setPosition('relative')
    }
  }, [scrollTop])



  useEffect(()=>{
    if(position === 'sticky'){
      setImgWidth('mx-h-40')
    }
    else{
      setImgWidth('mx-h-100')
    }
  }, [position])

  return (
    <div className={` ${styles.header} ${position}`} >
      <div className={`container  ${styles.container}`}>
            <div className={`${styles.logo_image_container} ${scrollTop > 100 ? 'mr-top-0 mr-bottom-0': 'mr-top-12 mr-bottom-12'}`}>
              <Image 
                className={` ${imgWidth} ${styles.logo_image}`}
                src={logo}
                fill
                objectFit='contain'
                alt="logo"
              />
            </div>
          <Navbar/>
      </div>

      {/* <div className={styles.custom_div}></div> */}
      {/* <div className={` round_10 ${styles.hr_bar}`} /> */}
    </div>

  )
}

export default Header
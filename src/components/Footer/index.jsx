"use client"
import Image from 'next/image'
import styles from './styles.module.css'
import logo from 'public/ECA_logo.svg'

// social icon import
// ******************
import fb_icon from 'public/icon/social-fb.svg'
import instagram_icon from 'public/icon/social-instagram.svg'
import linkedin_icon from 'public/icon/social-linkedin.svg'
import whatsapp_icon from 'public/icon/social-whatsapp.svg'
import youtube_icon from 'public/icon/social-youtube.svg'

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={` container ${styles.container} `}>

      <div className={`${styles.logo}`}></div>


        <div className={` ${styles.logo}`} >
          <div className={`  ${styles.logo_image_container}`}>
          <Image 
            className={` ${styles.logo_image}`}
            src={logo}
            fill
            objectFit='contain'
            alt="logo"
          />
        </div>
        </div>

        <div className={` ${styles.social_links}`}>
          <div className={`${styles.social_icon_container}`}>
              <Image src={fb_icon} fill />
          </div>

          <div className={`${styles.social_icon_container}`}>
              <Image 
                  src={youtube_icon}
                  fill
                  />
          </div>

          <div className={`${styles.social_icon_container}`}>
              <Image 
                  src={instagram_icon}
                  fill
                  />
          </div>
          
          <div className={`${styles.social_icon_container}`}>
              <Image 
                  src={whatsapp_icon}
                  fill
                  />
          </div>
          
          <div className={`${styles.social_icon_container}`}>
              <Image 
                  src={linkedin_icon}
                  fill
                  />
          </div>
        </div>


        <div className={` ${styles.address}`}>
          <p> 39 abcd Street, Pallabi Mirpur 11 1/2,<br/> Dhaka bangladesh</p>
        </div>

        <div className={` ${styles.mail_info}`}>
          <p>demo_mail@gmail.com</p>
        </div>
        <div className={` ${styles.phone_info}`}>
          <p> +1012 3456 789</p>
        </div>

        <div className={` ${styles.site_map}`}> </div>

        <div className={`${styles.up_navigation} `}> </div>

        {/* 

        



        <div className={` ${styles.site_map}`}> </div>

         */}


        

      </div>


      
      <div className={`round_10 hr-bar w-60 h-center`} />
      <div  className={`${styles.copywrite}`}>
        <p><span>&#169;</span> 2023 Environment Care Associate. All rights reserved.</p>

      </div>
        

    </div>
  )
}

export default Footer
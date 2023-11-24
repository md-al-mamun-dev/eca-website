"use client"
import styles from './styles.module.css'
import Image from 'next/image'

import image_0 from 'public/images/damaged_wall.jpg'
import image_1 from 'public/images/1-ff35e7d3e0.jpg'
import image_2 from 'public/images/bd_costal_map.png'



const Hero = () => {


  const about = `Environment Care Associates (ECA) is committed to tackling global environmental challenges and climate change. We stand as a beacon of hope and action, both locally and globally. Originating in Bangladesh, our mission centers on creating harmony between development and the environment for a resilient future.
                Fueled by our zeal for positive transformation, we embark on diverse initiatives spanning various sectors. These efforts advocate for sustainable policies, empower communities to adopt eco-friendly practices, and pioneer innovative solutions to address climate complexities. Our collaborations unite experts, activists, policymakers, and passionate individuals, fostering a world where development aligns harmoniously with nature.
                Through research, advocacy, and practical projects, we catalyze transformative change, contributing significantly to global discussions on environmental conservation, sustainable development, and climate adaptation. 
                We are working towards a greener and fairer world where progress intertwines with environmental preservation. Together, our collective endeavors will shape a better future!`


  return (
    <div className={`container ${styles.container} ${styles.hero}`}>

      <div className={`${styles.hero_txt_header}`}>
        <h2> Working with visionaries on the frontlines of social change worldwide</h2>
      </div>           


      <div className={`${styles.hero_images}`}>
        <div className={`${styles.hero_image_container}`}>
          <Image
            className={`${styles.hero_image}`}
            fill
            src={image_2}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={`${styles.hero_image_container}`}>
          <Image
            className={`${styles.hero_image}`}
            fill
            src={image_0}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={`${styles.hero_image_container}`}>
          <Image
            className={`${styles.hero_image}`}
            fill
            src={image_1}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className={`${styles.hero_txt_description}`}>
        <h3>{about}</h3>
      </div>

      {/*
      <div className={`${styles.hero_content_r}`}>
        <div className={`${styles.hero_image_container}`}>
          <Image
            className={`${styles.hero_image}`}
            fill
            src={image_2}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={`${styles.hero_image_container}`}>
          <Image
            className={`${styles.hero_image}`}
            fill
            src={image_0}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={`${styles.hero_image_container}`}>
          <Image
            className={`${styles.hero_image}`}
            fill
            src={image_1}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      */}

    </div>
  )
}

export default Hero
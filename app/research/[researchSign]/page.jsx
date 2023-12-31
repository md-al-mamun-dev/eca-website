"use client"
import { useEffect, useState } from 'react'
import styles from './page.module.css'
// import { useRouter } from 'next/router'
import Header from '@/src/components/Header'
import Image from 'next/image'
import Footer from '@/src/components/Footer'
import Research from '@/src/components/Research'


const researches = [
    {
      id:1,
      name: 'Loss and Damage Perspective of tropical storm Roanu ',
      details: 'Geographical position, socio-economic condition, lack of resources are some of the main reasons Bangladesh is suffering from severe loss and damage resulted from climate disasters. While the economic loss devours the country’s development, non-economic loss and damage puts the country in an irretrievable situation stricken with loss of life, health, biodiversity, human mobility, ecosystem services along with damage in infrastructure, cultural heritage etc. The country needs a strong focus in assessing these noneconomic losses and develop ways of recovering these huge damages, and also, expedite more ways of claiming compensation from global funds.',
      image: `loss_damage_tropical_storm_roanu.jpg`,
      thumbnail: `loss_damage_tropical_storm_roanu.png`
    }, 
    {
      id:2,
      name: 'Rates of shoreline change along the coast of Bangladesh',
      details: 'Net erosion and accretion rates were calculated for six sections of the mainland coast, and for four of the larger islands, using the same boundaries between the zones for both 1989 and 2009. Particularly rapid accretion, of more than 600 m/yr, was observed in the active mouth of the Meghna estuary, with erosion of up to 285 m/yr along the coast of Hatiya Island.',
      image: `rate_shoreline_change_along_coast_bangladesh.jpg`,
      thumbnail: `rate_shoreline_change_along_coast_bangladesh.png`
    },
    {
      id:3,
      name: 'Sea-Level Rise Along the Coast of Bangladesh',
      details: 'The tide gauge station at Hiron Point in the Sundarbans showed a SLR of 3.38 mm/year. SLR at Reyenda and Amtali was observed as 3.64 and 3.16 mm/year, respectively. Sea-level rise along the central coast was observed as 5.73 mm/year at Char Changa station in Hatiya. The station in Companiganj, representing the Noakhali Feni coastal zone, showed a SLR of 2.5 mm/year. Sea-level change along the eastern part of the coast showed very low rise or fall. Sadarghat station in the Chittagong coastal zone showed a sea-level fall of 11.75 mm/year. Sea-level rise calculated from the PSMSL dataset was observed as 1.36 mm/year at the Cox’s Bazar station.',
      image: `sea_level_rise_coast_bangladesh.jpg`,
      thumbnail: `sea_level_rise_coast_bangladesh.png`
    },
    {
      id:4,
      name: 'Community Resilience',
      details: 'The world is warming up to an alarming point, and the need for adaptation and coping methods for climate change has become a necessity rather than a choice. In order to address the intensifying consequences, climate resilience practices are implemented in order to develop adaptation solutions which are very effective in the developing world considering the immense vulnerability. Community resilience is essential to face vulnerabilities from multi-hazards and climate disaster. ',
      image: `community_resilience.jpg`,
      thumbnail: `community_resilience.png`
    },
    {
      id:5,
      name: 'Training Module on Rio Conventions',
      details: 'This training manual represents guiding resources and materials of three Rio Conventions: its obligations, relevant policies, decision-making processes and practices from a 360° perspective to global environmental challenges. This is prepared for the national counterparts working in the government of Bangladesh, but it can also be used by other development practitioners working in the field of environment, particularly biodiversity conversation, climate change adaptation, desertification, and land degradation.',
      image: `module_rio_conventions.jpg`,
      thumbnail: `module_rio_conventions.jpg.png`
    } ]

const ResearchDetails = ({params}) => {

  const [researchInfo, setResearchInfo] = useState({})

    function containsOnlyNumbers(str) {
        return /^\d+$/.test(str);
      }


    useEffect(()=>{
      if(!containsOnlyNumbers(params.researchSign)){
        const name  = decodeURI(params.researchSign)
        const info = researches.find(e => e.name.trim()=== name.trim())
        setResearchInfo(info)
      }else{
        const researchId =  parseInt(params.researchSign)
        const info = researches.find(e => e.id === researchId)
        setResearchInfo(info)
      }

    }, [params])

console.log(researchInfo)
  return (
    <div >
      <Header/>

      <div className='container'>
        <div className={` ${styles.research_details_page}`}> 
          
          
          <div className={`${styles.info_image_wrapper}`} >
              <Image src={`/images/research/${researchInfo?.image}`} fill objectFit='contain'/>         
          </div>    

          <h3 className={` ${styles.research_title}`}>
            {researchInfo?.name}
          </h3>   
          
          <div className={`${styles.details}`}>
            <p> {researchInfo?.details} </p>
          </div>

          <div className={`${styles.action_btn}`}>
            <a className={`${styles.download_btn}`}> download </a>
            <a className={`${styles.view_details}`}> view details </a>
          </div>


          
        </div>
      </div>
      
      <Research/>
      <Footer/>
    </div>
  )
}

export default ResearchDetails
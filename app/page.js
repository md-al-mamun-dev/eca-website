import Image from 'next/image'
import Header from '@/src/components/Header'
import Hero from '@/src/components/Hero'
import Research from '@/src/components/Research'
import Footer from '@/src/components/Footer'
import ContactUs from '@/src/components/ContactUs'

export default function Home() {

  return (
    <>
      <Header/>
        <main>
          <Hero/>
          <Research showHeading={true}/>
          <ContactUs/>
        </main>
      <Footer/>
    </>
  )
}

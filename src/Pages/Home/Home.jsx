import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import HomeAbout from './SecondSection/SecondSection'
import PartnerSection from './PartnerSection/PartnerSection'
import HomeServicesSection from './HomeServicesSection/HomeServicesSection'
import LatesUpdatesSection from './LatesUpdatesSection/LatesUpdatesSection'
import SertificateSection from './SertificateSection/SertificateSection'
import HomeFAQ from './HomeFAQ/HomeFAQ'



const Home = () => {
  return (
    <div>
      <HeroSection/>
      <HomeAbout/>
      <PartnerSection/>
      <HomeServicesSection/>
      <LatesUpdatesSection/>
      <SertificateSection/>
      <HomeFAQ/>

    </div>
  )
}

export default Home
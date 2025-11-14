import React from 'react'
import SectionHome from '../components/home/SectionHome'
import { headerAbout } from '../assets/images'
import Mission from '../components/mission/Mission'
import Offer from '../components/offer/Offer'
import ProductIdea from '../components/productIdea/ProductIdeaPhoto'
import Delivered from '../components/delivered/Delivered'
import Industry from '../components/industry/Industry'
import NotSure from '../components/not-sure/NotSure'

const AboutPage = () => {
  return (
    <main>
      <SectionHome
        sectionClass='home-gradient home'
        wrapperClass='home-wrapper-bottom about'
        contentClass='home-content'
        subtitle='About Us'
        title={`Fueling <span class="text-background">Dreams</span> with <span class="text-background">Dedication</span>`}
        text='Together, Let`s make a difference'
        buttonText='Get Started'
        image={headerAbout}
        imageAlt='header-img'
        buttonLink='#'
        showScrollLink='scroll for more'
      />
      <Mission/>
      <Offer/>
      <ProductIdea/>
      <Delivered/>
      <Industry/>
      <NotSure title='Want to know us further?'/>
    </main>
  )
}

export default AboutPage
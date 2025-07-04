import React from 'react'
import SectionHome from '../components/home/SectionHome'
import { headerAbout } from '../assets/images'

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

    </main>
  )
}

export default AboutPage
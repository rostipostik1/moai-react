import React from 'react'
import SectionHome from '../components/home/SectionHome'
import Testimonials from '../components/testimonial/Testimonials'

const ServicesPage = () => {
  return (
    <main>
      <SectionHome
        sectionClass='home-gradient home'
        wrapperClass='home-wrapper-bottom'
        contentClass='home-content'
        subtitle='Moai Consulting'
        title={`We <span class="text-background">Live</span> and
                    <span class="text-background">Breathe</span> Technology`}
        text='Leverage our team`s Fortune 500 expertise to empower your business.'
        buttonText='Get Started'
        // image={headerImg}
        imageAlt='header-img'
        buttonLink='#'
        showScrollLink='scroll for more'
      />
      <Testimonials/>
    </main>
  )
}

export default ServicesPage
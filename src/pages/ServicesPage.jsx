import React from 'react'
import SectionHome from '../components/home/SectionHome'
import Testimonials from '../components/testimonial/Testimonials'
import { servicesImg } from '../assets/images'
import Service from '../components/service/Service'

const ServicesPage = () => {
  return (
    <main>
      <SectionHome
        sectionClass='home-gradient home'
        wrapperClass='home-wrapper-bottom'
        contentClass='home-content'
        subtitle='Moai Consulting'
        title={`We make it <span class="text-background">Happen</span>`}
        text='Let your Digital journey be simplified and secured'
        buttonText='Get Started'
        image={servicesImg}
        imageAlt='header-img'
        buttonLink='#'
        showScrollLink='scroll for more'
      />
      <Testimonials/>
      <Service/>
    </main>
  )
}

export default ServicesPage
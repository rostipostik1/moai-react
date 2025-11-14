import React from 'react'
import SectionHome from '../components/home/SectionHome'
import Testimonials from '../components/testimonial/Testimonials'
import { servicesImg } from '../assets/images'
import Service from '../components/service/Service'
import Delivered from '../components/delivered/Delivered'
import Services from '../components/services/Services'
import NotSureCustom from '../components/notSureCustom/NotSureCustom'

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
      <Delivered/>
      <Services/>
      <NotSureCustom title='Book a free consultation' subtitle='Need a Guidance? Now is the time to Talk to our Consultant.'/>
    </main>
  )
}

export default ServicesPage
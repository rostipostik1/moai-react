import React from 'react'
import Testimonials from '../components/testimonial/Testimonials'
import Strategize from '../components/strategize/Strategize'
import Services from '../components/services/Services'
import Strategy from '../components/strategy/Strategy'
import NotSure from '../components/not-sure/NotSure'
import Experience from '../components/experience/Experience'
import ProductIdea from '../components/productIdea/ProductIdea'
import Delivered from '../components/delivered/Delivered'
import NotSureCustom from '../components/notSureCustom/NotSureCustom'
import '../components/home/home.scss'
import { headerImg } from '../assets/images'
import SectionHome from '../components/home/SectionHome'

const HomePage = () => {
  return (
    <>
      <SectionHome
        sectionClass='home-gradient home'
        wrapperClass='home-wrapper-bottom'
        contentClass='home-content'
        subtitle='Moai Consulting'
        title={`We <span class="text-background">Live</span> and
                    <span class="text-background">Breathe</span> Technology`}
        text='Leverage our team`s Fortune 500 expertise to empower your business.'
        buttonText='Get Started'
        image={headerImg}
        imageAlt='header-img'
        buttonLink='#'
        showScrollLink='scroll for more'
      />
      <Testimonials />
      <Strategize />
      <Services />
      <Strategy />
      <NotSure title='Not sure which one is suitable for you?' />
      <Experience />
      <ProductIdea />
      <Delivered />
      <NotSureCustom subtitle='Need a Guidance? Now is the time to Talk to our Consultant.' title='Book a free consultation'/>
    </>
  )
}

export default HomePage
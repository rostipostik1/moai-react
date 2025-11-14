import React from 'react'
import SectionHome from '../components/home/SectionHome'
import { Squares } from '../assets/images'
import AboutUs from '../components/aboutUs/AboutUs'
import OfferCareer from '../components/offer/OfferCareer'
import NotSureCustom from '../components/notSureCustom/NotSureCustom'

const CareerPage = () => {
  return (
    <>
      <SectionHome
        sectionClass='home-gradient home'
        wrapperClass='home-wrapper-bottom about'
        contentClass='home-content'
        subtitle='Careers'
        title={`Empower Your <span class="text-background">Ambitions</span> and
                    <span class="text-background">Dreams</span>`}
        text='Join us , Let’s make it happen'
        buttonText='Get Started'
        image={Squares}
        imageAlt='header-img'
        buttonLink='#'
        showScrollLink='scroll for more'
      />
      <AboutUs/>
      <OfferCareer/>
      <NotSureCustom title='Your Career, Our Passion' subtitle='Let’s explore, innovate and grow together'/>
    </>
  )
}

export default CareerPage
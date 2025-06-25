import React from 'react'
import Home from '../components/home/Home'
import Testimonials from '../components/testimonial/Testimonials'
import Strategize from '../components/strategize/Strategize'
import Services from '../components/services/Services'
import Strategy from '../components/strategy/Strategy'
import NotSure from '../components/not-sure/NotSure'
import Experience from '../components/experience/Experience'
import ProductIdea from '../components/productIdea/ProductIdea'
import Delivered from '../components/delivered/Delivered'
import NotSure2 from '../components/notSure2/NotSure2'

const HomePage = () => {
  return (
    <>
      <Home/>
      <Testimonials/>
      <Strategize/>
      <Services/>
      <Strategy/>
      <NotSure/>
      <Experience/>
      <ProductIdea/>
      <Delivered/>
      <NotSure2/>
    </>
  )
}

export default HomePage
import React from 'react'
import Home from '../components/home/Home'
import Testimonials from '../components/testimonial/Testimonials'
import Strategize from '../components/strategize/Strategize'
import Services from '../components/services/Services'

const HomePage = () => {
  return (
    <>
      <Home/>
      <Testimonials/>
      <Strategize/>
      <Services/>
    </>
  )
}

export default HomePage
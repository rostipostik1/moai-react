import React from 'react'
import Home from '../components/home/Home'
import Testimonials from '../components/testimonial/Testimonials'
import Strategize from '../components/strategize/Strategize'
import Services from '../components/services/Services'
import Strategy from '../components/strategy/Strategy'
import NotSure from '../components/not-sure/NotSure'
import Experience from '../components/experience/Experience'

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
    </>
  )
}

export default HomePage
import React from 'react'
import SectionHome from '../components/home/SectionHome'
import { hello } from '../assets/images'

const ContactPage = () => {
  return (
    <SectionHome
      sectionClass='home-gradient home'
      wrapperClass='header-wrapper-bottom contact '
      contentClass='home-content'
      subtitle='Contact us'
      title={`Start the <span class="text-background">Conversation</span> We’ll do the Rest `}
      text='Let’s connect and explore opportunities together'
      buttonText='Let’s Talk'
      image={hello}
      imageAlt='header-img'
      buttonLink='#'
      showScrollLink='scroll for more'
    />
  )
}

export default ContactPage
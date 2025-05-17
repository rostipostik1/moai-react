import React from 'react'
import './home.scss'
import { headerImg } from '../../assets/images'


const Home = () => {
  return (
    <section className='home-gradient home'>
        <div className="container">
        <div className="home-wrapper-bottom">
            <div className="home-content">
                <span className="home-subtitle">Moai Consulting</span>
                <h1 className="home-title">We <span className="text-background">Live</span> and
                    <span className="text-background">Breathe</span> Technology
                </h1>
                <p className="home-text">Leverage our team's Fortune 500 expertise to empower your business.
                </p>
                <a href="" className="link--black">Get Started</a>
            </div>
            <figure className="home-img"><img src={headerImg} alt="header-img"/></figure>
        </div>
        </div>
        <a href="" className="link-scrolle">scroll for more</a>
    </section>
  )
}

export default Home
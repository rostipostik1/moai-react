import React from 'react'

const Home = () => {
  return (
    <>
        <div className="container">
        <div className="header-wrapper-bottom">
            <div className="header-content">
                <span className="header-subtitle">Moai Consulting</span>
                <h1 className="header-title">We <span className="text-background">Live</span> and
                    <span className="text-background">Breathe</span> Technology
                </h1>
                <p className="header-text">Leverage our team's Fortune 500 expertise to empower your business.
                </p>
                <a href="" className="link--black">Get Started</a>
            </div>
            <figure className="header-img"><img src="img/header-img.jpg" alt="header-img"/></figure>
        </div>
        </div>
        <a href="" className="link-scrolle">scroll for more</a>
    </>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import { Nav } from '../nav/Nav'
import logo from '../../assets/logo.png'
import './header.scss'

const Header = () => {
//   console.log('hello');
  const [fixed, setFixed] = useState(false)
  const handleScroll = () => {
    setFixed(window.scrollY > 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    // console.log('afrer useefect');
    
  }, [])
  return (
            
    <header className="header header-gradient">
        <div className={`header-wrapper ${fixed ? 'fixed': ''}`}>
            <div className="container">
                <div className="header-fixed">
                    <a href="" className="header-logo"><img src={logo} alt="logo"/></a>
                    <Nav/>
                </div>
            </div>

        </div>
    </header>

  )
}

export default Header
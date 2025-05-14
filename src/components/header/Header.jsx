import React from 'react'
import { Nav } from '../nav/Nav'
import logo from '../../assets/logo.png'
import './header.scss'

const Header = () => {
  console.log('hello');
  
  return (
            
    <header className="header header-gradient">
        <div className="header-wrapper">
            <div className="container">
                <div className="header-fixed">
                    <a href="" className="header-logo"><img src={logo} alt="logo"/></a>
                    <nav className="nav">
                        <ul className="menu">
                            <li className="menu-item">
                                <a className="menu-link active">Home</a>
                            </li>
                            <li className="menu-item">
                                <a href="./all-services.html" className="menu-link">Services</a>
                            </li>
                            <li className="menu-item">
                                <a href="./about.html" className="menu-link">About</a>
                            </li>
                            <li className="menu-item">
                                <a href="./career.html" className="menu-link">Career</a>
                            </li>
                            <li className="menu-item">
                                <a href="./contact-us.html" className="menu-link">Contact Us</a>
                            </li>
                        </ul>
                        <a href="" className="header-link ">Get a Quote</a>
                    </nav>
                </div>
            </div>

        </div>
    </header>

  )
}

export default Header
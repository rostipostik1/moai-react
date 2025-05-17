import React from 'react'
import { footerImg } from '../../assets/images'
import { footerData } from '../../utils/data'
import './footer.scss'
import FooterBlock from './FooterBlock'



const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-top">
                <div className="logo">
                    <figure>
                        <img src={footerImg} alt="logo-footer"/>
                    </figure>
                    <span>Reimagining Technology</span>
                    <span>Redefining Success.</span>
                </div>
                <FooterBlock footerData = {footerData}/>



            </div>
            <div className="footer-middle">
                <div className="block">
                    <div className="footer-info">
                        <span className="footer-title">WRITE</span>
                        <span className="footer-title--black">US</span>
                    </div>
                    <ul className="footer-head">
                        <li className="footer-subtitle">HEAD OFFICE</li>
                        <li><a href="mailto:hello@moaiconsulting.co.in">hello@moaiconsulting.co.in</a></li>
                    </ul>
                </div>
                <div className="block">
                    <div className="footer-info">
                        <span className="footer-title">CALL</span>
                        <span className="footer-title--black">US</span>
                    </div>
                    <ul className="footer-head">
                        <li className="footer-subtitle">HEAD OFFICE</li>
                        <li><a href="tel:+916304320699">+91 63043 20699</a></li>
                    </ul>
                </div>
                <div className="block">
                    <div className="footer-info">
                        <span className="footer-title">VISIT</span>
                        <span className="footer-title--black">US</span>
                    </div>
                    <address className="footer-head">
                        <span className="footer-address">3rd Floor, Plot No 47, Road No 76, </span>
                        <span>Film Nagar, Jubilee Hills</span>
                        <span> Hyderabad - 500 096</span>
                    </address>
                </div>



            </div>
            <div className="footer-bottom">
                <p className="copyright">©<span className="year"></span> - Moai Consulting LLP. All Rights Reserved.</p>
                <ul className="footer-menu">
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Sitemap </a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
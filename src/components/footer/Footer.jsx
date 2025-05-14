import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-top">
                <div className="logo">
                    <figure>
                        <img src="./img/logo-footer.png" alt="logo-footer"/>
                    </figure>
                    <span>Reimagining Technology</span>
                    <span>Redefining Success.</span>
                </div>
                <div className="footer-block">
                    <span className="footer-title">Company</span>
                    <ul className="footer-menu">
                        <li><a href="">About</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Contact </a></li>
                    </ul>
                </div>
                <div className="footer-block">
                    <span className="footer-title">Services</span>
                    <ul className="footer-menu">
                        <li><a href="">Mobile Apps Development</a></li>
                        <li><a href="">Web Development</a></li>
                        <li><a href="">UX/UI Design</a></li>
                        <li><a href="">AI Application Design</a></li>
                        <li><a href="">Security Services</a></li>
                        <li><a href="">IoT & Embedded</a></li>
                    </ul>
                </div>
                <div className="footer-block">
                    <span className="footer-title">Follow us</span>
                    <div className="footer-social">
                        <a href="">
                            <img src="./img/linkendin.svg" alt="linkendin"/>
                        </a>
                        <a href="">
                            <img src="./img/twitter.svg" alt="twitter"/>
                        </a>
                        <a href="">
                            <img src="./img/facebook.svg" alt="facebook"/>
                        </a>
                        <a href="">
                            <img src="./img/be.svg" alt="be"/>
                        </a>
                        <a href="">
                            <img src="./img/site.svg" alt="site"/>
                        </a>
                    </div>
                </div>


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
import React from 'react'
import { socialIcons } from '../../utils/data'
import { Link } from 'react-router'
import './contact.scss'
import ContactForm from '../contactForm/ContactForm'
const Contact = () => {
    return (
        <section className="contact">
            <div className="container contact-wrapper">
                <div className="contact-info">
                    <h2>Our Office</h2>
                    <p className="contact-info__text">A Place where People, Passion and Purpose Converge to create
                        Exceptional
                        Results</p>

                    <div className="contact-details">
                        <div className="detail">
                            <h3>WRITE<br />US</h3>
                            <div className="details">
                                <p className="details-text">HEAD OFFICE</p>
                                <p>hello@moaiconsulting.co.in</p>
                            </div>
                        </div>

                        <div className="detail">
                            <h3>CALL<br />US</h3>
                            <div className="details">
                                <p className="details-text">HEAD OFFICE</p>
                                <p>+91 63043 20699</p>
                            </div>
                        </div>

                        <div className="detail">
                            <h3>VISIT<br />US</h3>
                            <p>3rd Floor, Plot No 47, Road No 76,<br /> Film Nagar, Jubilee Hills,<br /> Hyderabad - 500 096
                            </p>
                        </div>

                        <div className="detail">
                            <h3>FOLLOW<br />US</h3>
                            <div className="social-icons">
                                {socialIcons && (
                                    socialIcons.map(({ icon: Icon, name, url }, index) => (
                                        <Link to={url} key={index} area-label='name'>
                                            <Icon className="contact-icon" />
                                        </Link>
                                    )
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <h2>Having a Question or Request?</h2>
                    <p>Share your input and we’ll be in touch shortly</p>

                    <ContactForm />
                </div>
            </div>
        </section>

    )
}

export default Contact
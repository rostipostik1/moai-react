import React from 'react'
import { socialIcons } from '../../utils/data'
import { Link } from 'react-router'
import './contact.scss'
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
                                    <Link to={socialIcons.url} key={socialIcons.name}>
                                        <img src={socialIcons.icon} alt={socialIcons.name} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <h2>Having a Question or Request?</h2>
                    <p>Share your input and we’ll be in touch shortly</p>

                    <form method="post">
                        <div className="form-group">
                            <label for="">
                                <span>name</span>
                                <input type="text" name="name" placeholder="Enter your name" />
                            </label>

                        </div>
                        <div className="form-group">
                            <label for="">
                                <span>Phone number</span>
                                <input type="tel" name="phone" placeholder="Enter your Phone number" />
                            </label>
                            <label for="">
                                <span>email</span>
                                <input type="email" name="email" placeholder="Ex: you@mail.com" />
                            </label>
                        </div>
                        <div className="form-group">
                            <label for="">
                                <span>organization</span>
                                <input type="Organization" name="organization" placeholder="Enter Organization details" />
                            </label>
                            <label for="">
                                <span>Designation</span>
                                <input type="Designation" name="designation" placeholder="Enter Designation" />
                            </label>


                        </div>
                        <h4>service</h4>
                        <div className="form-group services-button">
                            <button type="button">Mobile Application Development</button>
                            <button className="active" type="button">Web Application Development</button>
                            <button type="button">AI Application Design</button>
                            <button type="button">UX UI Design</button>
                            <button type="button">Security Services</button>
                            <button type="button">IoT & Embedded</button>
                        </div>
                        <div className="form-group">
                            <label for="">
                                <span>message for us</span>
                                <textarea name="message" placeholder="Enter your message"></textarea>
                            </label>
                        </div>
                        <div className="form-group">
                            <label className="privacy">
                                By clicking on submit, I agree with Moai Privacy Policy
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Contact
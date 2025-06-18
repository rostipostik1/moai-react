import React from 'react'
import './services.scss'
import InnerTop from '../innerTop/InnerTop'

const Services = () => {
    return (
        <section className="services">
            <div className="container">
                <InnerTop subtitle='Range of Services' title='Full spectrum of services, for all your needs.'/>
                <ul className="services-projects">
                    <li className="project">
                        <img src="./img/services-1.jpg" alt="services-1"/>
                            <div className="">
                                <h3>Mobile Apps Development</h3>
                                <p>We don't just code, we create experiences you can bet on.</p>
                                <a href="">Learn more</a>
                            </div>
                    </li>
                    <li className="project">
                        <img src="./img/services-2.jpg" alt="services-2"/>
                            <div className="">
                                <h3>Web Development</h3>
                                <p>With Moai, you can bring ideas to life in the digital world.</p>
                                <a href="">Learn more</a>
                            </div>
                    </li>
                    <li className="project">
                        <img src="./img/services-3.jpg" alt="services-3"/>
                            <div className="">
                                <h3>UX/UI Design</h3>
                                <p>We at Moai, Elevate user experience through simplicity, empathy, and purposeful design
                                </p>
                                <a href="">Learn more</a>
                            </div>
                    </li>
                    <li className="project">
                        <img src="./img/services-4.jpg" alt="services-4"/>
                            <div className="">
                                <h3>Security Services</h3>
                                <p>Safety first, always: Explore our tech security solutions</p>
                                <a href="">Learn more</a>
                            </div>
                    </li>
                    <li className="project">
                        <img src="./img/services-5.jpg" alt="services-5"/>
                            <div className="">
                                <h3>IoT & Embedded</h3>
                                <p>IoT excellence, embedded in every solution</p>
                                <a href="">Learn more</a>
                            </div>
                    </li>
                    <li className="project">
                        <img src="./img/services-6.jpg" alt="services-6"/>
                            <div className="">
                                <h3>AI Application</h3>
                                <p>Innovate, Create, Iterate: Explore AI development possibilities</p>
                                <a href="">Learn more</a>
                            </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Services
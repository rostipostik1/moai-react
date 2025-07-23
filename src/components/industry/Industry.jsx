import React from 'react'
import InnerTop from '../innerTop/InnerTop'
import './industry.scss'
import { industries } from '../../utils/data'

const Industry = () => {
    return (
        <section className="industry">
            <div className="container industry__wrapper">
                <div className="industry-content">
                    <InnerTop subtitle='Wealth of Industry Insights' title='Crossing Boundaries, We bring expertise to every project' />
                    <ul className="industry-cards">
                        {industries && (
                            industries.map(item => (
                                <li key={item.id} className="industry-item">{item.title}</li>
                            ))
                        )}
                    </ul>
                </div>
                <div className="industry-img">
                    <div className="grid-container">
                        <div className="grid-item item-1">
                            <img src="./img/education.jpg" alt="Education" />
                            <span>Education</span>
                        </div>
                        <div className="grid-item item-2">
                            <img src="./img/delivery-food.jpg" alt="Delivery Food " />
                            <span>Food Delivery</span>
                        </div>
                        <div className="grid-item item-3">
                            <img src="./img/Aerospace.jpg" alt="Aerospace" />
                            <span>Aerospace</span>
                        </div>
                        <div className="grid-item item-4">
                            <img src="./img/Financial Services.jpg" alt="Financial Services" />
                            <span>Financial Services</span>
                        </div>
                        <div className="grid-item item-5">
                            <img src="./img/Healthcare.jpg" alt="Healthcare" />
                            <span>Healthcare</span>
                        </div>
                        <div className="grid-item item-6">
                            <img src="./img/Web 3.jpg" alt="Web3 Browser" />
                            <span>Web3 Browser</span>
                            <div className="industry-block">
                                <p className="industry-block__text">Empowering users in a decentralized digital frontier.
                                </p>
                            </div>
                        </div>
                        <div className="grid-item item-7">
                            <img src="./img/Automotive.jpg" alt="Automotive" />
                            <span>Automotive</span>
                            <div className="industry-block">
                                <p className="industry-block__text">Offered seamless vehicle management, remote control and
                                    real-time insights for Citroën owners.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Industry
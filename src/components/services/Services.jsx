import React from 'react'
import './services.scss'
import InnerTop from '../innerTop/InnerTop'
import { servicesData } from '../../utils/data'


const Services = () => {
    return (
        <section className="services">
            <div className="container">
                <InnerTop subtitle='Range of Services' title='Full spectrum of services, for all your needs.' />
                {servicesData && (
                    <ul className="services-projects">
                        {servicesData.length && (
                            servicesData.map(item => (
                                <li className="project" key={item.id}>
                                    <img src={item.image} alt={item.title}/>
                                    <div className="">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                        <a href="#">Learn more</a>
                                    </div>
                                </li>
                            ))

                        )}

                    </ul>
                )}

            </div>
        </section>
    )
}

export default Services
import React from 'react'
import './service.scss'
import { serviceList } from '../../utils/data'

const Service = () => {
    return (
        <section className="service p-150">
            <div className="container">
                <div className="inner-top">
                    <span className="subtitle service-subtitle">Experience the difference</span>
                    <h2 className="title service-title">Your IT journey, powered by our services is destined for success and
                        sustainability</h2>
                </div>
                {serviceList && (
                    serviceList.map(item => ( 
                        <div key={item.id} className="service-content">
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <ul className="tab-pils">
                                    {item.features && (
                                        item.features.map((feature,index) => (
                                            <li key={index}>{feature}</li>
                                        ))
                                    )}
                                </ul>
                                <button className="btn-serice link--black">Learn more</button>
                            </div>
                            <figure><img src={item.image} alt={item.imageAlt} /></figure>
                        </div>
                    ))
                )}


            </div>
        </section>
    )
}

export default Service
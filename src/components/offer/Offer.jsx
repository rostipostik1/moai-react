import React from 'react'
import './offer.scss'
import { offerCards } from '../../utils/data'



const Offer = () => {
    return (
        <section className="offer padding-large">
            <div className="container">
                <div className="inner-top">
                    <span className="subtitle offer-subtitle">Our Values Drive Our Actions</span>
                    <h2 className="title offer-title">Built on Trust and Innovation</h2>
                </div>
                <div className="cards">
                    {offerCards && (
                        offerCards.map((item) => (
                            <figure key={item.id} className="card-img">
                                <img src={item.image} alt={item.imageAlt} />
                                <figcaption>
                                    <h4 className="card-title">{item.title}</h4>
                                    <p className="card-text">{item.text}</p>
                                </figcaption>
                            </figure>
                        ))
                    )}

                </div>
            </div>
        </section>
    )
}

export default Offer
import React from 'react'
import InnerTop from '../innerTop/InnerTop'
import './offer.scss'
import { valuesCards } from '../../utils/data'


const OfferCareer = () => {
    return (
        <section className="offer career padding-large">
            <div className="container">
                <InnerTop classTitle='offer-title' className="offer-subtitle" subtitle='Join Moai to be part of Transformation' title='A world of opportunities awaits you with us' />
                <div className="cards">
                    {valuesCards.map(card => (
                        <figure key={card.id} className="card-img">
                            <img src={card.image} alt={card.alt} />
                            <figcaption>
                                <h4 className="card-title">{card.title}</h4>
                                <p className="card-text">{card.text}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OfferCareer
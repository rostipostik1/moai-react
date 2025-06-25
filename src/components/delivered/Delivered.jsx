import React from 'react'
import './delivered.scss'
import InnerTop from '../innerTop/InnerTop'
import { deliveredData } from '../../utils/data'

const Delivered = () => {
    return (
        <section className="delivered padding-large">
            <div className="container">
                <InnerTop subtitle='Success Stories' title='Delivered remarkable solutions, reflecting our commitment to innovation.' />
                <div className="delivered-wrapper">
                    {deliveredData && (
                        deliveredData.map(item => (
                            <div className="delivered-idea" key={item.id}>
                                <div className="delivered-content" >
                                    <figure className="img">
                                        <img src={item.image} alt={item.alt} />
                                    </figure>
                                    <span className="title">{item.title}</span>
                                    <p className="text">{item.text}</p>
                                    <ul className="tabs">
                                        {item.tags.map((tag, index) => (
                                            <li key={index}>{tag}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}

export default Delivered
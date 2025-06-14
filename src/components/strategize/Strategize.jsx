import React from 'react'
import InnerTop from '../innerTop/InnerTop'
import './style.scss'
import { quizeImg } from '../../assets/images'
import { quiseItems } from '../../utils/data'


const Strategize = () => {
    return (
        <section className="strategize">
            <div className="container">
                <InnerTop subtitle='Path to excellence' title='From strategy to execution to support, we have got all your needs covered' />
                <div className="quise">
                    <ul className="quise-list">
                        {quiseItems.length && (
                            quiseItems.map(item => (
                                <li className="quise-item" key={item.id}>{item.label}</li>
                            ))
                        )}

                    </ul>
                    <div className="quise-wrapper">
                        <figure className="quise-img"><img src={quizeImg} alt="figure" /></figure>
                        <div className="quise-content">
                            <span className="quise-content-title">Strategize</span>
                            <span className="quise-content-text">Plan and position a successful product in the market</span>
                            <ul className="quise-content-list">
                                <li className="quise-content-item">Target Market and Customer Segmentation</li>
                                <li className="quise-content-item">Competitive Analysis</li>
                                <li className="quise-content-item">Product Roadmap and Development</li>
                                <li className="quise-content-item">Go-to-Market Strategy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Strategize
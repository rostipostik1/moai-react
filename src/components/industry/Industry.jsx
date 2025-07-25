import React from 'react'
import InnerTop from '../innerTop/InnerTop'
import './industry.scss'
import { industries, industryData } from '../../utils/data'


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
                        {industryData && (
                            industryData.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`grid-item item-${index + 1}`}>
                                    <img src={item.image} alt={item.alt} />
                                    <span>{item.title}</span>
                                    <div className="industry-block">
                                        <p className="industry-block__text">{item.description}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Industry
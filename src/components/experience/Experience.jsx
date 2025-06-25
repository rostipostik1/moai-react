import React from 'react'
import './experience.scss'
import InnerTop from '../innerTop/InnerTop'
import { experienceData } from '../../utils/data'

const Experience = () => {
    return (
        <section className="experience">
            <div className="container">
                <InnerTop subtitle='You need us.' title='Leverage fortune 500 experience,
                        cost-effective & customised solution.' />
                {experienceData && (
                    experienceData.map(item => (
                        <div className="experience-content" key={item.id}>
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                            <figure><img src={item.image} alt={item.alt} /></figure>
                        </div>
                    ))
                )}

            </div>
        </section>
    )
}

export default Experience
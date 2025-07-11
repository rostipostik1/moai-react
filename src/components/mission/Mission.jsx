import React from 'react'
import './mission.scss'
import { statement, mision } from '../../assets/images'
import { experienceValues } from '../../utils/data'

const Mission = () => {
    return (
        <section className="experience">
            <div className="container">
                <div className="experience-content">
                    <div className="experience-img__about">
                        <img src={statement} alt="statment" />
                        <ul className="experience-list" >
                            {experienceValues && (
                                experienceValues.map(item => (
                                    <li key={item.id} className="experience-item" id={item.id}>{item.label}</li>
                                ))
                            )}
                        </ul>
                    </div>
                    <div className="content">
                        <h3>Vision Statement</h3>
                        <p>To earn the lifetime loyalty of our customers’ by consistently delivering the most responsive
                            and personalized IT services in the industry.</p>
                    </div>
                </div>
                <div className="experience-content experience-content__about">
                    <div className="experience-content__bottom">
                        <figure><img src={mision} alt="mision" /></figure>
                        <ul className="experience-list">
                            <li className="experience-item" id="Values">Values</li>
                            <li className="experience-item" id="Goals">Goals</li>
                            <li className="experience-item" id="Purpose">Purpose</li>
                        </ul>
                    </div>


                    <div className="content">
                        <h3>Mission Statement</h3>
                        <p>To listen, understand and deliver tailored IT solutions that surpass our customers’
                            expectations at every turn.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission
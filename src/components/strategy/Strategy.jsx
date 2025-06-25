import React from 'react'
import './strategy.scss'
import InnerTop from '../innerTop/InnerTop'
const Strategy = () => {
    return (

        <section className="strategy">
            <div className="container">
                <div className="strategy-wrapper">
                    <div className="strategy-content">
                        <InnerTop subtitle='Flexible Engagement' title='Simple & Easy ways to get started, Choose the one as you like'/>
                    </div>
                    <div className="strategy-list">
                        <ul className="strategy-information">
                            <li className="strategy-info">
                                <h4>On-Demand</h4>
                                <p>Pay-as-you-go pricing based on the scope and duration of our engagement.</p>

                                <p> On-demand access to our team of expert IT consultants for development immediate
                                    problem-solving and strategic guidance.</p>
                            </li>
                            <li className="strategy-info">
                                <h4>Project-Based Collaboration</h4>
                                <p>Fixed pricing based on project scope and deliverables with defined timelines and
                                    milestones.</p>

                                <p>Dedicated project team focused on delivering high-quality results within agreed-upon
                                    timelines.</p>
                            </li>
                            <li className="strategy-info">
                                <h4>Time and Material</h4>
                                <p>No more wondering what we’re doing or when your app will be done.</p>

                                <p>With us, you can expect frequent check-ins, progress updates, and plenty of
                                    handholding.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Strategy
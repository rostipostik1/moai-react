import React from 'react'
import './experience.scss'

const Experience = () => {
    return (
        <section className="experience">
            <div className="container">
                <div className="inner-top">
                    <span className="subtitle experience-subtitle">You need us.</span>
                    <h2 className="title experience-title">Leverage fortune 500 experience,
                        cost-effective & customised solution.</h2>
                </div>
                <div className="experience-content">
                    <div className="content">
                        <h3>We Breathe Tech Day & Night</h3>
                        <p>MOAI strives to be your partner in delivering solutions. With our quick turnaround and round
                            the clock support, we would always be your trusted product partner.</p>
                    </div>
                    <figure><img src="./img/boll.jpg" alt="boll"/></figure>
                </div>
                <div className="experience-content">
                    <div className="content">
                        <h3>Customized Solutions</h3>
                        <p>We deliver customized solutions that align with your goals, add tangible value, and give you
                            a competitive edge.</p>
                    </div>
                    <figure><img src="./img/square.jpg" alt="square"/></figure>
                </div>
                <div className="experience-content">
                    <div className="content">
                        <h3>Peace of mind</h3>
                        <p>No more wondering what we’re doing or when your app will be done. With us, you can expect
                            frequent check-ins, progress updates, and plenty of hand-holding.</p>
                    </div>
                    <figure><img src="./img/room.jpg" alt="room"/></figure>
                </div>
            </div>
        </section>
    )
}

export default Experience
import React, { useRef } from 'react';
import TextSlider from './TextSlider';
import AvatarSlider from './AvatarSlider';
import './testimonial.scss'
import InnerTop from '../innerTop/InnerTop'

const Testimonials = () => {
    const textSliderRef = useRef();
    const avatarSliderRef = useRef();
    return (
        <section className="testimonials">
            <div className="container">
                <InnerTop subtitle='Client Testimonials' title='Voices that prove our excellence' />
                <TextSlider
                    avatarSliderRef={avatarSliderRef}
                    textSliderRef={textSliderRef}
                />

                <AvatarSlider
                    textSliderRef={textSliderRef}
                    avatarSliderRef={avatarSliderRef}
                />
                <div className="testimonials-slider">
                    <div className="slider-text">
                        <p>“ Highly recommended! The content suggestions provided are spot-on and improved our social
                            media engagement.</p>
                    </div>
                    <div className="slider-text">
                        <p>“ Highly recommended! The content suggestions provided are spot-on and improved our social
                            media engagement.</p>
                    </div>
                    <div className="slider-text">
                        <p>“ Highly recommended! The content suggestions provided are spot-on and improved our social
                            media engagement.</p>
                    </div>
                    <div className="slider-text">
                        <p>“ Highly recommended! The content suggestions provided are spot-on and improved our social
                            media engagement.</p>
                    </div>
                    <div className="slider-text">
                        <p>“ Highly recommended! The content suggestions provided are spot-on and improved our social
                            media engagement.</p>
                    </div>
                    <div className="slider-text">
                        <p>“ Highly recommended! The content suggestions provided are spot-on and improved our social
                            media engagement.</p>
                    </div>
                </div>
                <div className="slider-avatars">
                    <div className="avatar">
                        <img src="./img/Avatar.png" alt="avatar" />
                        <span className="avatar-title">Sarah Johnson</span>
                        <span className="avatar-job">Marketing Manager, Zoho</span>
                    </div>
                    <div className="avatar">
                        <img src="./img/Avatar-1.png" alt="Avatar-1" />
                        <span className="avatar-title">Sarah Johnson</span>
                        <span className="avatar-job">Marketing Manager, Zoho</span>
                    </div>
                    <div className="avatar">
                        <img src="./img/Avatar-2.png" alt="Avatar-2" />
                        <span className="avatar-title">Sarah Johnson</span>
                        <span className="avatar-job">Marketing Manager, Zoho</span>
                    </div>
                    <div className="avatar">
                        <img src="./img/Avatar-3.png" alt="Avatar-3" />
                        <span className="avatar-title">Sarah Johnson</span>
                        <span className="avatar-job">Marketing Manager, Zoho</span>
                    </div>
                    <div className="avatar">
                        <img src="./img/Avatar-4.png" alt="Avatar-4" />
                        <span className="avatar-title">Sarah Johnson</span>
                        <span className="avatar-job">Marketing Manager, Zoho</span>
                    </div>
                    <div className="avatar">
                        <img src="./img/Avatar-5.png" alt="Avatar-5" />
                        <span className="avatar-title">Sarah Johnson</span>
                        <span className="avatar-job">Marketing Manager, Zoho</span>
                    </div>
                    <div className="avatar">
                        <img src="./img/Avatar-6.png" alt="Avatar-6" />
                        <span className="avatar-title">Sarah Johnson</span>
                        <span className="avatar-job">Marketing Manager, Zoho</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
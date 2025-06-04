import React, { useRef, useState } from 'react';
import TextSlider from './TextSlider';
import AvatarSlider from './AvatarSlider';
import './testimonial.scss'
import InnerTop from '../innerTop/InnerTop'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const textSliderRef = useRef();
    const avatarSliderRef = useRef();

    return (
        <section className="testimonials">
            <div className="container">
                <InnerTop subtitle='Client Testimonials' title='Voices that prove our excellence' />
            </div>
            <TextSlider
                nav2={nav2} setNav1={setNav1}
            />

            <AvatarSlider className='slider-avatars'
                nav1={nav1} setNav2={setNav2}
            />

        </section>
    )
}

export default Testimonials
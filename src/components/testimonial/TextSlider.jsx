import React from 'react'
import { testimonialTexts } from '../../utils/data'
import Slider from 'react-slick'
import TextSlide from './TextSlide';

const TextSlider = ({ nav2, setNav1 }) => {

    const settings = {
        asNavFor: nav2,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: <img className="prev slick-btn" src="./assets/arrow-right.svg" alt="prev" />,
        // nextArrow: <img className="next slick-btn" src="./assets/arrow-left.svg" alt="next" />,
    };
    return (
        <Slider ref={slider => setNav1(slider)} {...settings}>
            {testimonialTexts.map((text, index) => (
                <TextSlide key={index} text={text} />
            ))}
        </Slider>
    )
}

export default TextSlider
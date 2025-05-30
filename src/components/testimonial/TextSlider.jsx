import React from 'react'
import { testimonialTexts } from '../../utils/data'
import Slider from 'react-slick'

const TextSlider = ({ avatarSliderRef, textSliderRef }) => {

    const settings = {
        asNavFor: avatarSliderRef.current,
        ref: textSliderRef,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <img className="prev slick-btn" src="./assets/arrow-right.svg" alt="prev" />,
        nextArrow: <img className="next slick-btn" src="./assets/arrow-left.svg" alt="next" />,
    };
    return (
        <Slider {...settings}>
            {testimonialTexts.map((text, index) => (
                <div className="slider-text" key={index}>
                    <p>“ {text}</p>
                </div>
            ))}
        </Slider>
    )
}

export default TextSlider
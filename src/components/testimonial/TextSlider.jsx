import React from 'react'
import { testimonialTexts } from '../../utils/data'
import Slider from 'react-slick'
import TextSlide from './TextSlide';
import CustomArrow from '../customArrow/CustomArrow';
import arrowRight from '../../assets/arrow-right.svg';
import arrowLeft from '../../assets/arrow-left.svg';


const TextSlider = ({ nav2, setNav1 }) => {

    const settings = {
        asNavFor: nav2,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1, 
        prevArrow: (<CustomArrow className="prev slick-btn" imgSrc={arrowLeft}/>),
        nextArrow: (<CustomArrow className="next slick-btn" imgSrc={arrowRight}/>),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false
                }
            }
        ]
    };
    return (
        <> 
        <Slider className='testimonials-slider' ref={slider => setNav1(slider)} {...settings}>
            {testimonialTexts.map((text, index) => (
                <TextSlide key={index} text={text} />
            ))}
        </Slider>
        </>
    )
}

export default TextSlider
import React from 'react'
import Slider from 'react-slick'
import { testimonialAvatars } from '../../utils/data'
import AvatarSlide from './AvatarSlide';


const AvatarSlider = ({ nav1, setNav2 }) => {
    const settings = {
        asNavFor: nav1,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        arrows: false,
        focusOnSelect: true,
    };
    return (
        <div className='container'>
            <Slider className='slider-avatars' ref={slider => setNav2(slider)} {...settings}>
                {testimonialAvatars.map((avatar, index) => (
                    <AvatarSlide key={index} {...avatar} index={index} />
                ))}
            </Slider>
        </div>
    )
}

export default AvatarSlider
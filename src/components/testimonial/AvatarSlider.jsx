import React from 'react'
import Slider from 'react-slick'
import { testimonialAvatars } from '../../utils/data'


const AvatarSlider = ({ textSliderRef, avatarSliderRef }) => {
    const settings = {
        asNavFor: textSliderRef.current,
        ref: avatarSliderRef,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        arrows: false,
        focusOnSelect: true,
    };
    return (
        <Slider {...settings}>
            {testimonialAvatars.map((avatar, index) => (
                <div className="avatar" key={index}>
                    <img src={avatar.img} alt={`avatar-${index}`} />
                    <span className="avatar-title">{avatar.name}</span>
                    <span className="avatar-job">{avatar.job}</span>
                </div>
            ))}
        </Slider>
    )
}

export default AvatarSlider
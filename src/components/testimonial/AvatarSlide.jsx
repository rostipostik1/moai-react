import React from 'react'

const AvatarSlide = ({img, name, job, index}) => {
    return (
        <div className="avatar">
            <img src={img} alt={`avatar-${index}`} />
            <span className="avatar-title">{name}</span>
            <span className="avatar-job">{job}</span>
        </div>
    )
}

export default AvatarSlide
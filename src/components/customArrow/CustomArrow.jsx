import React from 'react'

const CustomArrow = ({ onClick, imgSrc, className }) => {
    return (
        <button className={className} onClick={onClick}>
            <img src={imgSrc} alt='arrow' />
        </button>
    )
}

export default CustomArrow
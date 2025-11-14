import React from 'react'
import './not-sure.scss'

const NotSure = ({title}) => {
  return (
        <div className="not-sure">
            <div className="container">
                <div className="not-sure__wrapper">
                    <h2>{title}</h2>
                    <a href="" className="not-sure__link inner-link">Contact us</a>
                </div>
            </div>
        </div>
  )
}

export default NotSure
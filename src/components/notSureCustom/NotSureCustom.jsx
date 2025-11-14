import React from 'react'
import '../not-sure/not-sure.scss'

const NotSureCustom = ({title, subtitle}) => {
  return (
        <div className="not-sure">
            <div className="container">
                <div className="not-sure__wrapper">
                    <h2> {title}
                        <span className="text">{subtitle}</span>
                    </h2>
                    <a href="" className="not-sure__link inner-link">Contact us</a>
                </div>
            </div>
        </div>
  )
}

export default NotSureCustom
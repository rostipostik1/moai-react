import React from 'react'

const InnerTop = ({ subtitle, title, className, classTitle}) => {
  return (
    <div className="inner-top">
      <span className={`subtitle ${className}`}>{subtitle}</span>
      <h2 className={`title ${classTitle}`}>{title}</h2>
    </div>
  )
}

export default InnerTop
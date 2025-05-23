import React from 'react'

const InnerTop = ({ subtitle, title }) => {
  return (
    <div className="inner-top">
      <span className="subtitle">{subtitle}</span>
      <h2 className="title">{title}</h2>
    </div>
  )
}

export default InnerTop
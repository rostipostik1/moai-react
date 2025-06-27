import React from 'react'
import {icon404} from '../assets/images'


const Error404 = () => {
  return (
    <main>

      <div className="error-block">
        <h1>Error 404</h1>
        <img src={icon404} alt="404" />
      </div>
    </main>
    
  )
}

export default Error404
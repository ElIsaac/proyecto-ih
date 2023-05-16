import React from 'react'
import shape1 from './assets/blob.svg'
import shape2 from './assets/blob3.svg'

const Background = () => {
  return (
    <div className="background">
      <img src={shape1} alt="shape1" className="shape1" />
      <img src={shape2} alt="shape2" className="shape2" />
    </div>
  )
}

export default Background

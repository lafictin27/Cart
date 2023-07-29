import React from 'react'
import './Slider.css'

const Offer = ({discount,url}) => {
  return (
    <div className='module'>
        <div className='logo'>
            <img src={url} alt="" />
        </div>
        <div className='title'>
            <h3>{discount}</h3>
        </div>
    </div>
  )
}

export default Offer
import React from 'react'
import './Card.css'
const Card = ({title,url}) => {
  return (
    <div className='iconItem'>
        <div className='icon_card'>
            <img src={url} alt="" />
        </div>
        <div className='title'>
            <h3>{title}</h3>
        </div>
    </div>
  )
}

export default Card
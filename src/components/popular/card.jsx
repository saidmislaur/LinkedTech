import React from 'react'
import Price from '../priceElement/Price'

import './popular.scss'

const Card = ({image, name}) => {
  return (
    <div className="card">
      <span>Get up to 20% off Today Only!</span>
      <img src={image} alt="" />
      <span className="card__name">{name}</span>
      <Price />
      <div className="card__grade">
        <img src="./img/products/grade-red.svg" alt="" />
        <img src="./img/products/grade-red.svg" alt="" />
        <img src="./img/products/grade-red.svg" alt="" />
        <img src="./img/products/grade-red.svg" alt="" />
        <img src="./img/products/grade-gray.svg" alt="" />
      </div>
    </div>
  )
}

export default Card
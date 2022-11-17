import React from 'react'
import Price from '../priceElement/Price'

import './popular.scss'

const Card = ({image, name, discount}) => {
  return (
    <div className="card">
      <span>{discount}</span>
      <img className="card__image" src={image} alt="" />
      <span className="card__name">{name}</span>
      <Price />
      <div className="card__grade">
        <img src="./img/products/grade-red.svg" alt="" />
        <img src="./img/products/grade-red.svg" alt="" />
        <img src="./img/products/grade-red.svg" alt="" />
        <img src="./img/products/grade-red.svg" alt="" />
        <img src="./img/products/grade-gray.svg" alt="" />
      </div>
      <div className="card__show">
        <div className="card__offers">
          <img src="./img/cart.svg" alt="" />
          <img src="./img/Group 55.svg" alt="" />
          <img src="./img/favorite.svg" alt="" />
          <img src="./img/Group 53.svg" alt="" />
        </div>
        <div className="card__footer">
          <div className="card__rating">
            <Price />
            <div className="card__grade card__grade--show">
              <img src="./img/products/grade-red.svg" alt="" />
              <img src="./img/products/grade-red.svg" alt="" />
              <img src="./img/products/grade-red.svg" alt="" />
              <img src="./img/products/grade-red.svg" alt="" />
              <img src="./img/products/grade-gray.svg" alt="" />
            </div>
          </div>
          <div className="card__colors">
            <div className="card__color card__color--1"></div>
            <div className="card__color card__color--2"></div>
            <div className="card__color card__color--3"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
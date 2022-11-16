import React from 'react'
import Price from '../priceElement/Price'
const Card = ({image}) => {
  return (
    <div>
      <div className="example__card">
          <img src={image} alt="" />
          <div className="example__card_description">
            <h3>Always in style!</h3>
            <p>The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.</p>
            <Price />
            <div className="example__grade">
              <img src="./img/products/grade-red.svg" alt="" />
              <img src="./img/products/grade-red.svg" alt="" />
              <img src="./img/products/grade-red.svg" alt="" />
              <img src="./img/products/grade-red.svg" alt="" />
              <img src="./img/products/grade-gray.svg" alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card
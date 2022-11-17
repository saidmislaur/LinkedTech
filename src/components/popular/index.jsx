import React from 'react'
import Card from './card'

import './popular.scss'

const Popular = () => {
  return (
    <div className="popular container">
      <div className="popular__title">
        <span>New Products</span>
        <h1>Popular Products</h1>
      </div>
      <div className="popular__nav">
        <ul>
          <li className="active">Recent arrival</li>
          <li>best sellers</li>
          <li>special offers</li>
          <li>featured in</li>
        </ul>
      </div>
      <div className="popular__products">
        <Card 
          discount="Get up to 10% off Today Only!"
          image="./img/products/Rectangle 85.png"
          name="Mouse"
        />
        <Card 
          discount="Get up to 40% off Today Only!"
          image="./img/products/Rectangle 86.png"
          name="Black iPhone Speaker"
        />
        <Card 
          discount="Get up to 55% off Today Only!"
          image="./img/products/Rectangle 90.png"
          name="Mackbook Pro"
        />
      </div>
      <button className="popular__all"></button>
    </div>
  )
}

export default Popular
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
          image="./img/products/Rectangle 86.png"
          name="Mouse"
        />
        <Card 
          image="./img/products/Rectangle 85.png"
          name="Black iPhone Speaker"
        />
        <Card 
          image="./img/products/Rectangle 88.png"
          name="iOS Keyboard"
        />
      </div>
      <button className="popular__all"></button>
    </div>
  )
}

export default Popular
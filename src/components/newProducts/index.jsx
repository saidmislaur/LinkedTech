import React from 'react'
import Card from './card'

import './newProd.scss'

const NewProd = () => {
  return (
    <div className="new-prod container">
      <div className="new-prod__title">
        <span>New shop</span>
        <h2>An enormous storehouse of facts</h2>
        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
      </div>
      <div className="new-prod__cards">
        <Card image="./img/products/444.png"/>
        <Card image="./img/products/Rectangle 92.png"/>
        <Card image="./img/products/iphone-12-blue.png"/>
        <Card image="./img/products/ipad-pro-12.png"/>
        <Card image="./img/products/Rectangle 44.png"/>
        <Card image="./img/products/Rectangle 48.png"/>
        <Card image="./img/products/mackBook.png"/>
      </div>
    </div>
  )
}

export default NewProd

import React from 'react'

import './brands.scss'

const Brands = () => {
  return (
    <div className="brands">
      <div className="brands__main">
        <div className="brands__text">
          <span>Favorite brands</span>
          <h1>An exciting place for the whole family to shop.</h1>
          <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
          <div className="brands__btn">
            <button>shop now</button>
            <span className="brands__price">$ 249.99</span>
            <span className="brands__price--line">$ 249.99</span>
          </div>
        </div>
        <div className="brands__logo">
          <img src="./img/brand-logo.png" alt="" />
        </div>
      </div>
      <div className="brands__lists">
        <img src="./img/cl_logo2.png" alt="" />
        <img src="./img/cl_logo4.png" alt="" />
        <img src="./img/cl_logo5.png" alt="" />
        <img src="./img/cl_logo7.png" alt="" />
      </div>
    </div>
  )
}

export default Brands
import React from 'react'
import Card from './card'

import './example.scss'

const Example = () => {
  return (
    <div className="example">
      <div className="example__cards">
        <Card image="./img/Rectangle 39.png" />
        <Card image="./img/Rectangle 53.png" />
      </div>
      <div className="example__advertising">
        <div className="example__promo">
          <div className="example__promo_text">
            <span>Get up to 20% off Today Only!</span>
            <h4>THE 4K HDR COMPACT DRONE</h4>
            <button>Show now</button>
          </div>
          <img src="./img/pack anafi 1.png" alt="" />
        </div>
        <div className="example__promo">
          <div className="example__promo_text">
            <span>Get up to 30% off Today Only!</span>
            <h4>THE 4K HDR COMPACT DRONE</h4>
            <button>Show now</button>
          </div>
          <img src="./img/pack anafi 2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Example
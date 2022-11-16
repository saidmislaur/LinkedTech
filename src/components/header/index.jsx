import React from 'react'

import './header.scss'

const Header = () => {
  return (
    <header className="header">
        <div className="header__logo">
          <img src="./img/header-logo.png" alt="logo" />
        </div>
        <div className="header__nav">
          <ul>
            <li>
              <a href="/">Home</a>
              <img src="./img/arrow.svg" alt="" />
            </li>
            <li>
              <a href="/">About</a>
              <img src="./img/arrow.svg" alt="" />
            </li>
            <li>
              <a href="/">product</a>
              <img src="./img/arrow.svg" alt="" />
            </li>
            <li>
              <a href="/">blog</a>
              <img src="./img/arrow.svg" alt="" />
            </li>
            <li>
              <a href="/">shop</a>
              <img src="./img/arrow.svg" alt="" />
            </li>
            <li>
              <a href="/">contact us</a>
              <img src="./img/arrow.svg" alt="" />
            </li>
          </ul>
        </div>
        <div className="header__icons">
          <img src="./img/search.svg" alt="" />
          <div className="header__cart-img">
            <img src="./img/cart.svg" alt="" />
            <div className="header__cart-amount">3</div>
          </div>
          <img src="./img/profile.svg" alt="" />
        </div>
    </header>
  )
}

export default Header
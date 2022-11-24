import React from 'react'

import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__content container">
        <div className="footer__logo">
          <img src="./img/footer-logo.png" alt="..." />
          <span>STORE - worldwide fashion store since 1978. <br/>
          We sell over 1000+ branded products on our web-site.</span>
        </div>
        <div className="footer__information">
          <h4>information</h4>
          <ul>
            <li>New Collection</li>
            <li>About Store</li>
            <li>Contact Us</li>
            <li>Latest News</li>
            <li>Our Sitemap</li>
            <li>Orders History</li>
          </ul>
        </div>
        <div className="footer__menu">
          <h4>footer menu</h4>
          <ul>
            <li>Instagram profile</li>
            <li>New Collection</li>
            <li>Contact Us</li>
            <li>Latest News</li>
            <li>Terms & Conditions</li>
            <li>Purchase Theme</li>
          </ul>
        </div>
        <div className="footer__useful">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>Instagram profile</li>
            <li>New Collection</li>
            <li>Contact Us</li>
            <li>Latest News</li>
            <li>Terms & Conditions</li>
            <li>Purchase Theme</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
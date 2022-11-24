import React from 'react'

import './contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact__content container">
        <div className="contact__text">
          <span>User Contact</span>
          <h2>Contact Us for those interested.</h2>
          <p>The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.</p>
        </div>
        <div className="contact__input">
          <input type="email" placeholder='Enter your email address'/>
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
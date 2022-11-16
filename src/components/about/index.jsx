import React from 'react'

import './about.scss'

const About = () => {
  return (
    <div className="about">
      <div className="about__title">
        <span>about Products</span>
        <h1>About For Products</h1>
      </div>
      <div className="about__desc">
        <p>There are many variations of passages of 
          Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or 
          randomised words which don't look even slightly have suffered believable. 

          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
          embarrassing hidden in the middle of text.</p>
        <div className="about__lists">
          <ul>
            <li>
              <img src="./img/done.png" alt="" />
              There are many variations of passages of Lorem Ipsum</li>
            <li> 
              <img src="./img/done.png" alt="" />
              There are many variations of passages of Lorem  Embarrassing middle of text.</li>
            <li> 
              <img src="./img/done.png" alt="" />
              There are many variations of passages of Lorem Ipsum</li>
            <li> 
              <img src="./img/done.png" alt="" />
              There are many variations of passages.</li>
            <li> 
              <img src="./img/done.png" alt="" />
              There are many variations of passages.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
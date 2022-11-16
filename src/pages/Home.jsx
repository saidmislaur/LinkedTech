import React from 'react'
import About from '../components/about'
import Brands from '../components/brands'
import Example from '../components/exapmle'
import Header from '../components/header'
import Popular from '../components/popular'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Header />
        <Brands />
        <Example />
      </div>
      <About />
      <Popular />
    </div>
  )
}

export default Home
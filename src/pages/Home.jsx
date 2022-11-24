import React from 'react'
import About from '../components/about'
import Brands from '../components/brands'
import Contact from '../components/contacts'
import Example from '../components/exapmle'
import Footer from '../components/footer'
import Header from '../components/header'
import NewProd from '../components/newProducts'
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
      <NewProd />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
// im making a dessert ecommerce website
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Products from './components/Products'
import Reviews from './components/Reviews'
import Custom from './components/Custom'
import News from './components/News'

function App() {
  

  return (
    <div className=''>
    
      <Header />
      <Carousel />
      <Products />
      <Reviews />
      <Custom />
      <News />
      <Footer />

    </div>
  )
}

export default App

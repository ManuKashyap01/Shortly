import { useState } from 'react'
import Header from './Header'
import './App.css'
import Footer from './Footer'
import Hero from './Hero'

function App() {

  return (
    <div className="app mx-auto overflow-x-hidden">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App

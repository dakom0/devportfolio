/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Sponsors from './components/Sponsors/Sponsors'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Testimonials from './components/Testimonials/Testimonials'

import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  })

  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      {/* <Sponsors /> */}
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  )
}

export default App

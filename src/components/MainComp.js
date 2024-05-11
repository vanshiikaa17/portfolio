import React from 'react'
import Home from './home/Home'
import Contact from './Contact/Contact'
import Projects from './projects/Projects'
import Navbar from './Navbar';
import About from './about/About';


const MainComp = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default MainComp
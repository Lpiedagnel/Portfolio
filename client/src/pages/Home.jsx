import React from 'react'
import Hero from '../components/Home/Hero'
import History from '../components/Home/History'
import Skills from '../components/Home/Skills'
import Projects from '../components/Home/Projects'
import Contact from '../components/Home/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className="container">
      <div className="home">
        <div className="home__container">
          {/* <Navbar /> */}
          <Hero />
          <History />
          <Skills />
          <Projects />
          <Contact />
          {/* <Footer />  */}
        </div>
      </div>
    </div>
  )
}

export default Home
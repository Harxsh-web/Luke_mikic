import { useState } from 'react'
import './App.css'
import { Navbar } from './pages/Navbar'
import LandingSection from './pages/LandingSection'
import { About } from './pages/About'
import { Testimonial } from './pages/Testimonial'
import BonusSection from './pages/BonusSection'
import QuestionSection from './pages/QuestionSection'
import YoutubeFrameworkSection from './pages/YoutubeFrameworkSection'
import GuaranteeSection from './pages/GuaranteeSection'
import Footer from './pages/Footer'
import { IntroSection } from './pages/IntroSection'

function App() {
 

  return (
    <>
     <Navbar/>
     <LandingSection/>
    <About/>
    <IntroSection/>
    <Testimonial/>
    <BonusSection/>
    <GuaranteeSection/>
    <YoutubeFrameworkSection/>
    <QuestionSection/>
    <Footer/>
    </>
  )
}

export default App

import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Construction from '../components/Construction'
import Card from '../components/Card'
import HandoverProjects from '../components/HandoverProjects'
import RunningProjects from '../components/RunningProjects'
import TechStack from '../components/TechStack'
import Shop from '../components/Shop'
import Contact from '../components/Contact'

export default function page() {
  return (
    <div>
      <Hero />
      <About />
      <Construction />
      <Card />
      <RunningProjects />
      <HandoverProjects />
      <TechStack />
      <Shop />
      <Contact />
    </div>
  )
}

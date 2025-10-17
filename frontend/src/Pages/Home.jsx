import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import Features from '../Components/Home/Features'
import PopularCourses from '../Components/Home/PopularCourses'
import Instructors from '../Components/Home/Instructors'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Features/>
      <PopularCourses/>
      <Instructors/>
    </div>
  )
}

export default Home
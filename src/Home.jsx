import React from 'react'
import BannerSection from './components/Banner'
import Package from './components/Package'
import Popular from './components/Popular'
import Risk from './components/Risk'
import Conditions from './components/Conditions'
import Whywe from './components/Whywe'
import Blogs from './components/Blogs'
import Review from './components/Review'
import Achievements from './components/Achievements'
import Apps from './components/Apps'
import Awards from './components/Awards'

const Home = () => {
  return (
    <div>
      <BannerSection />
      <Package />
      <Popular  />
      <Risk />
      <Conditions />
      <Whywe />
      <Blogs/>
      <Review />
      <Achievements />
      <Apps/>
      <Awards/>
    </div>
  )
}

export default Home

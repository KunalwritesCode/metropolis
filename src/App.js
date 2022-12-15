import React from 'react'
import NavBar from './components/NavBar';
import Top from './components/Top'
import Navigation from './components/Navigation';
import BannerSection from './components/Banner';
import Package from './components/Package';
import Popular from './components/Popular';
import Risk from './components/Risk';
import Whywe from './components/Whywe';
import Conditions from './components/Conditions';
import Blogs from './components/Blogs';
import Apps from './components/Apps';
import Review from './components/Review';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import Awards from './components/Awards';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
        <NavBar />
        <Top />
        <Navigation />
        <BannerSection />
        <Package />
        <Popular />
        <Risk />
        <Conditions />
        <Whywe />
        <Blogs />
        <Review />
        <Achievements />
        <Apps />
        <Awards />
        <Footer />
    </div>
  )
}

export default App 
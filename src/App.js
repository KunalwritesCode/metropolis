import React from 'react'
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
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
import Truepackages from './components/Truepackages';
import TPCard from './components/Cards/CardClick/TPCard';
import About from './components/NavTop/About';
import Doctors from './components/NavTop/Doctors';
import Partner from './components/NavTop/Partner';
import HealthRisk from './components/bootstrap/Navigations/HealthRisk';
import HealthConditions from './components/bootstrap/Navigations/HealthConditions';
import Corporate from './components/NavTop/Corporate';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <div>
    <Routes>
        <NavBar />
        <Top />
        <Navigation />
        
          <Route exact path="/">
            <BannerSection />
          </Route>
          <Route exact path="/">
            <Package />
          </Route>
          <Route exact path="/">
            <Popular  />
          </Route>
          <Route exact path="/">
            <Risk />
          </Route>
          <Route exact path="/">
            <Conditions />
          </Route>
          <Route exact path="/">
            <Whywe />
          </Route>
          <Route exact path="/">
            <Blogs/>
          </Route>
          <Route exact path="/">
            <Review />
          </Route>
          <Route exact path="/">
            <Achievements />
          </Route>
          <Route exact path="/">
            <Apps/>
          </Route>
          <Route exact path="/">
            <Awards/>
          </Route>
          <Route exact path="/aboutus">
            <About/>
          </Route>
          <Route exact path="/doctors">
            <Doctors/>
          </Route>
          <Route exact path="/partners">
            <Partner />
          </Route>
          <Route exact path="/healthrisk">
            <HealthRisk />
          </Route>
          <Route exact path="/healthconditions">
            <HealthConditions />
          </Route>
          <Route exact path="/corporate">
            <Corporate />
          </Route>                

          <Route exact path="/truepackage">
            <Truepackages />
          </Route>

          <Route exact path="/truepackage/Card">
            <TPCard />
          </Route>
        
        
         
    
        <Footer />
        </Routes>
    </div>
  )
}

export default App 
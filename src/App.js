import React from 'react'
import { BrowserRouter as Routes, Route,Switch  } from "react-router-dom";
import NavBar from './components/NavBar';
import Top from './components/Top'
import Navigation from './components/Navigation';


import Footer from './components/Footer';

import Truepackages from './components/Truepackages';
import TPCard from './components/Cards/CardClick/TPCard';
import About from './components/NavTop/About';
import Doctors from './components/NavTop/Doctors';
import Partner from './components/NavTop/Partner';
import HealthRisk from './components/bootstrap/Navigations/HealthRisk';
import HealthConditions from './components/bootstrap/Navigations/HealthConditions';
import Corporate from './components/NavTop/Corporate';
import HomeVisit from './components/NavTop/HomeVisit';
import HeartTest from './components/HeartTest';
import Alcoholism from './components/bootstrap/Alcoholism';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';



const App = () => {
  return (
    <div>
        <NavBar />
        <Top />
        <Navigation />
        <Switch>
        
        
          <Route exact path="/">
            <Home />
          </Route> 
          <Route exact path="/aboutus">
            <About /> 
          </Route>
          <Route exact path="/doctors">
            <Doctors />
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
          <Route exact path="/homevisit">
            <HomeVisit />
          </Route>

          <Route exact path="/healthrisk/viewall">
            <HealthRisk />
          </Route>
          <Route exact path="/healthrisk/heart">
            <HeartTest />
          </Route>
          <Route exact path="/healthconditions/viewall">
            <HealthConditions />
          </Route>
          <Route exact path="/healthconditions/alcoholism">
            <Alcoholism />
          </Route>
          
        
         
          </Switch>
        <Footer />
        
    </div>
  )
}

export default App 
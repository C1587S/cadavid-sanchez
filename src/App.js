import './App.css';
import React from 'react';

import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home.js'
import CV from "./pdfs/SCS_CV.pdf"

import SchoolMarketsP from './components/DataScience/SchoolMarkets/SchoolMarkets.js'


const App = () => { 
  return <Router>
      <Route exact path='/'               component={Home}/>
      <Route exact path='/research/school_markets' component={SchoolMarketsP}/>
      <Route exact path='/CV'><a href={CV}/></Route>
  </Router>
} 
export default App;

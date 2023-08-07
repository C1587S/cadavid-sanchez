import './App.css';
import React from 'react';

import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home.js'
import SchoolMarketsP from './components/DataScience/SchoolMarkets/SchoolMarkets.js'


const App = () => { 
  return <Router>
      <Route exact path='/'               component={Home}/>
      <Route exact path='/research/school_markets' component={SchoolMarketsP}/>
  </Router>
} 
export default App;

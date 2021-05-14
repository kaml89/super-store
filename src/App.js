import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Cart from './components/Cart'
import Deals from './components/Deals'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/deals' component={ Deals }/>
          <Route path='/cart' component={ Cart }/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Cart from './components/Cart'
import Deals from './components/Deals/Deals'
import Item from './components/Item/Item';
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/deals' component={ Deals }/>
            <Route path='/cart' component={ Cart }/>
            <Route path='/item/:itemId' component={ Item }/>
          </Switch>
        </Router>
      </CartProvider>
      
    </div>
  );
}

export default App;

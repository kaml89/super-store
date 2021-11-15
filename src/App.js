import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Deals from "./pages/Deals/Deals";
import Item from "./components/Item/Item";
import Checkout from "./pages/Checkout/Checkout";
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./context/NotificationContext";
import Navigation from "./components/Navigation/Navigation";
import Notification from "./components/Notification/Notification";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <NotificationProvider>
          <Router>
            <Navigation />
            <Notification />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/deals" component={Deals} />
              <Route path="/cart" component={Cart} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/item/:itemId" component={Item} />
            </Switch>
          </Router>
        </NotificationProvider>
      </CartProvider>
    </div>
  );
}

export default App;

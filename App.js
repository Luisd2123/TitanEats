import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/createaccount" element ={<CreateAccount />} />
        <Route path="/restaurants" element ={<RestaurantList />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;

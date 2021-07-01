import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TravelInsurance from "./pages/TravelInsurance/TravelInsurance";
import Tabs from "./pages/Tabs";
import TravellerDetails from "./pages/TravelInsurance/TravellerDetails";
import VehicleDetails from "./pages/VehicleDetails";
import DriverDetails from "./pages/DriverDetails";
import CarInsurance from "./pages/CarInsurance";
import "./components/layout.css";
import Details from "./pages/HealthInsurance/Details";
import Declaration from "./pages/HealthInsurance/Declaration";
import Quotes from "./pages/HealthInsurance/Quotes";
import TravelerQuotes from "./pages/TravelInsurance/Quotes";
import TermInsuranceDetails from "./pages/TermInsurance/Details";
import Payment from "./pages/Payment";
import HomePage from "./homepage";
import TermPlans from "./pages/TermInsurance/Plans";
import Header from "./Header";
import Footer from "./Footer";
import QuoteModels from "./pages/QuoteModels";
import Plans from "./pages/TermInsurance/Plans";
import TwoWheelerPlans from "./pages/TwoWheelerInsurance/TwoWheelerInsurance";
import StepForm from "./pages/Investment/MultiStepForm";
import Login from "./Login";
import Dashbaord from "./Dashboard";
import Policies from "./Policies";
import Userquotes from "./Quotes";
import MyClaims from "./Claims";
import Myproposals from "./Proposals";
import Profile from "./pages/Profie/Profile";
import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./logic/actions/actions";
import Configs from "./configs/config";
import { useHistory } from "react-router-dom";
import axios from "axios";
import HousingInsuranceDetails from "./pages/Housing/Housing";
import PolicyBazar from "./PolicyBazar";
import Helps from "./Help";
import Products from "./pages/AllProducts/products";
import Microproduct from "./pages/Allmicroproducts/MicroProduct";
import Microproduct2 from "./pages/Allmicroproducts/Microproduct2";
import Microproduct3 from "./pages/Allmicroproducts/Microproduct3";
import Microproduct4 from "./pages/Allmicroproducts/MicroProduct4";
import Microproduct5 from "./pages/Allmicroproducts/MicroProduct5";

import Gmcproducts from "./pages/GMC-products/GmcProducts";
import qs from 'qs';

import ClientForm from "./pages/ClientContact/ClientForm";

const url = Configs.endpoint;

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedIn = useSelector((state) => state.user.loggedIn);

  // const apiKey = 'AIzaSyDCyrPiAOAeqLWEuuDrnVWg5RcBUQv3BLA'
  // const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDCyrPiAOAeqLWEuuDrnVWg5RcBUQv3BLA'
 
  useEffect(() => {
    const checkToken = async () => {
      const authToken = localStorage.getItem("token");
      const user = localStorage.getItem("username");
      if (authToken) {

          dispatch(login({ username: user }));
      }
    };
    checkToken();
  }, [loggedIn]);

  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/" component={PolicyBazar} />
        <Route exact path="/another" component={HomePage} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/user-login" component={Login} />
        <Route exact path="/dashboard" component={Dashbaord} />
        <Route exact path="/policies" component={Policies} />
        <Route exact path="/quotes" component={Userquotes} />
        <Route exact path="/claims" component={MyClaims} />
        <Route exact path="/help" component={Helps} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/proposals" component={Myproposals} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/products" component={Products} />

        <Route exact path="/vehicle-details" component={VehicleDetails} />
        <Route exact path="/driver-details" component={DriverDetails} />
        <Route exact path="/car-quotes" component={CarInsurance} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/health-quotes" component={Quotes} />
        <Route exact path="/declaration" component={Declaration} />
        <Route exact path="/travelInsurance" component={TravelInsurance} />
        <Switch>
          <Route exact path="/traveller-details" component={TravellerDetails} />
        </Switch>
        <Route exact path="/traveller-quotes" component={TravelerQuotes} />
        <Switch>
          <Route
            exact
            path="/termInsurance-details"
            component={TermInsuranceDetails}
          />
        </Switch>
        <Switch>
          <Route exact path="/micro-products" component={Microproduct} />
          <Route exact path="/micro-page2" component={Microproduct2} />
          <Route exact path="/micro-page3" component={Microproduct3} />
          <Route exact path="/micro-page4" component={Microproduct4} />
          <Route exact path="/micro-page5" component={Microproduct5} />
        </Switch>
        <Route exact path="/quoteDetails" component={QuoteModels} />
        <Route exact path="/termPlans" component={Plans} />
        <Route exact path="/stepForm" component={StepForm} />

        <Route exact path="/gmcproducts" component={Gmcproducts} />

        <Route exact path="/two-wheeler-plans" component={TwoWheelerPlans} />
        <Route
          exact
          path="/housing-society"
          component={HousingInsuranceDetails}
        />
        <Route exact path="/contact-form" component={ClientForm} />

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;

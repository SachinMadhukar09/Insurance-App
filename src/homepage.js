import "./App.css";
import "./main.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NewHomePage from "./NewHomePage";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { login } from "./logic/actions/actions";

function HomePage() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* <Header /> */}
      {/* <NewHomePage props={props} /> */}
      <Home />
      <Footer />
    </div>
  );
}

export default HomePage;

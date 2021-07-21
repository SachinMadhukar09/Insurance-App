import "./App.css";
import "./main.css";
import Header from "./Header";
import Footer from "./Footer";
import NewHomePage from "./NewHomePage";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Configs from "./configs/config";
import { useEffect } from "react";

const url = Configs.endpoint;

function PolicyBazar(props) {
  let { company } = useParams();

  useEffect(() => {
    props.setCompany(company);
  }, []);

  return (
    <div className="App">
      {/* <Header /> */}
      <NewHomePage />
      <Footer />
    </div>
  );
}

export default PolicyBazar;

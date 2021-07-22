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

  const getClients = async () => {
    try {
      const response = await axios.get(`${url}/client/getClientId/${company}`);
      if (response) {
        localStorage.setItem("company", company);
        localStorage.setItem("clientId", response.data[0].xpcClientId);
      }
    } catch (error) {
      localStorage.removeItem("clientId");
      localStorage.removeItem("company");
    }
  };

  useEffect(() => {
    props.setCompany(company);
    getClients();
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

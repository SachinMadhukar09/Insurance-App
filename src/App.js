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
import HousingInsuranceDetails from "./pages/Housing/Housing";
import PolicyBazar from "./PolicyBazar";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/new" component={PolicyBazar} />
        <Route exact path="/payment" component={Payment} />
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
        <Route exact path="/quoteDetails" component={QuoteModels} />
        <Route exact path="/termPlans" component={Plans} />
        <Route exact path="/stepForm" component={StepForm} />

        <Route exact path="/two-wheeler-plans" component={TwoWheelerPlans} />
        <Route
          exact
          path="/housing-society"
          component={HousingInsuranceDetails}
        />

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;

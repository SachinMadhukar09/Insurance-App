import "./App.css";
import "./main.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NewHomePage from "./NewHomePage";

function HomePage(props) {
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

import "./App.css";
import "./main.css";
import Header from "./Header";
import Footer from "./Footer";
import NewHomePage from "./NewHomePage";

function PolicyBazar(props) {
  return (
    <div className="App">
      {/* <Header /> */}
      <NewHomePage props={props} />
      <Footer />
    </div>
  );
}

export default PolicyBazar;

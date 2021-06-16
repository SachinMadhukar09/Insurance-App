import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Microproducts.css";


const Microproduct1 = () => {
  const history = useHistory()

  const onSubmitOption = () => {
      // buy api for buy option

      history.push('/micro-page2')
  };

  return (
    <div className="page-container">
      <div className="content-part">
        <div className="section2">
          <h3>Inclusions</h3>
          <p>
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident,
          </p>
        </div>
        <div className="section2">
          <h3>Exclusions</h3>
          <p>
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident,
          </p>
        </div>
        <div className="section2">
          <h3>Terms And Conditions</h3>
          <p>
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident,
          </p>
        </div>
        <div className="section2">
          <h3>Addition Detail</h3>
        </div>
        <div className="section2">
          <p>In partnership with</p>

          <div className="small">
            <h4>Insurance Camapany Logo</h4>
          </div>
        </div>
      </div>
      <div className="buy-part">
        <h1>{"Rs.400"}</h1>

        <p>valid for 1 month</p>

        <button
          type="submit"
          className="login-submit"
          onClick={onSubmitOption}
          style={{ width: 150, marginRight: 20 }}
        >
          {"Buy Now"}
        </button>
      </div>
      {/* <div className="header-top">
        <div className="logo-img">
           <img src={""} />
        </div>
        <div>
            <h1>Product Name</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="options">
          {/* <ul>
              <li><button>Option1</button></li>
              <li><button>Option2</button></li>
              <li><button>Option3</button></li>
              <li><button>Option4</button></li>
              <li><button>Option5</button></li>
          </ul> 
      </div>
      <div>
          <div className="content-body">
              <form>
                  <label></label>
                  <input type="text"></input>
                  <label></label>
                  <input type="text"></input>
                  <label></label>
                  <input type="text"></input>
                  <label></label>
                  <input type="text"></input>
              </form>
          </div>
          <div className="price-box"><div className="price"></div></div>
      </div> */}
    </div>
  );
};

export default Microproduct1;

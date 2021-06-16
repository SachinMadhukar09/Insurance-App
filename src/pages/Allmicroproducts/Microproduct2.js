import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MicroHeader from "./Header";
import "./Microproducts.css";



const Microproduct2 = () => {
  const history = useHistory()

  const onClickNext = ()=>{
    history.push('/micro-page3')
  }
  return (
   <div><MicroHeader/>
    <div className="page-container">
      <div className="content-part">
        <div className="section2">
          <div className="content-body">
            <form>
              <label className="content-label">Name</label>
              <input type="text" className="content-input" />
              <label className="content-label">Phone Number</label>
              <input type="text" className="content-input" />
              <label className="content-label">Verify OTP</label>

              <input type="text" className="content-input" />

              <button
                type="submit"
                className="login-submit"
                onClick={onClickNext}
                style={{ width: "100%", marginRight: 20 }}
              >
                {"Next"}
              </button>
            </form>
            <span>
              {" "}
              <p>Don't Get OTP</p>
              <p style={{ color: "blue" }}>Resend</p>
            </span>
          </div>
        </div>
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

        {/* <button
          type="submit"
          className="login-submit"
          // onClick={}
          style={{ width: 150, marginRight: 20 }}
        >
          {"Buy Now"}
        </button> */}
      </div>
      </div>
    </div>
  );
};

export default Microproduct2;

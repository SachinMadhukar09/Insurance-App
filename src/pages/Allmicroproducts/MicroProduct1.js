import { useHistory, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Microproducts.css";


const Microproduct1 = () => {
  const history = useHistory()
  let { company } = useParams();
  if (!company) {
    company = localStorage.getItem("company");
  }
  const onSubmitOption = () => {
      // buy api for buy option

      history.push(`${company}/micro-page2`)
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
          className="confirmbtn"
          onClick={onSubmitOption}
        >
          {"Buy Now"}
        </button>
      </div>
     
    </div>
  );
};

export default Microproduct1;

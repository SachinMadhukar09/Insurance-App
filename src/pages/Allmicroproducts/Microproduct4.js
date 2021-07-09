

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Microproducts.css";
import MicroHeader from "./Header";

const Microproduct4 = () => {
  const history = useHistory()

  const onClickNext = ()=>{
    history.push('/micro-page5')
  }
  return (
    <div className="micro_wrapper"><MicroHeader/>
    <div className="page-container">
      <div className="content-part">
        <div className="form-body">
          <div className="form-left">
            <label className="content-label">Full Name</label>
            <input type="text" />
            <label className="content-label">Phone Number</label>
            <input type="text" />
            <label className="content-label">Email Id</label>
            <input type="text" />
            <label className="content-label">Flat No. Society</label>
            <input type="text" />
            <label className="content-label">City</label>
            <input type="text" />
          </div>
          <div className="form-right">
            <label className="content-label">Date of Birth</label>
            <input type="text" />
            <label className="content-label">Gender</label>
            <input type="text" />
            <label className="content-label">Pin Code</label>
            <input type="text" />
            <label className="content-label">Street, Locality</label>
            <input type="text" />
            <label className="content-label">State</label>
            <input type="text" />
         
          </div>
        </div>
        <div className="nomine">
          <h1>Nominee Details</h1>
        </div>

        <div className="form-body">
          <div className="form-left">
            <label className="content-label">Full Name</label>
            <input type="text" />
          </div>
          <div className="form-right">
            <label className="content-label">Relationship</label>
            <input type="text" />
          </div>
        </div>

        <div className="checkboxes">
          <div>
            <input type="checkbox" />
            <label> Send Policy Copy as PDF </label>
          </div>
          <div>
            <input type="checkbox" />
            <label>
              Agree to the <a href="#"> Terms and Conditions</a>
            </label>
          </div>
        </div>

        <div className="form-right" style={{ float: "right", marginTop: 30 }}>
          <button
            type="submit"
            className="confirmbtn"
            onClick={onClickNext}
            style={{ width: "100%", marginRight: 20 }}
          >
            {"Next"}
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Microproduct4;

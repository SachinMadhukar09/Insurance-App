import uploadIcon from "../../../Assets/svg/upload.png";
import axios from "axios";
import Configs from "../../../configs/config";
import { useState } from "react";

const url = Configs.serverless;

const GcmSummary = (props) => {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");

  const OnSubmitDetails = async (event) => {
    event.preventDefault();
    try {
      setloading(true);
      const response = await axios.post(
        `${url}/quotations`,
        props.memberdetails
      );
      if (response) {
        setloading(false);
      }
    } catch (err) {
      setloading(false);
      if (err && err.response) {
        console.log("errrprr--", err.response.data.error);
        setError(err.response.data.error);
      } else {
        setError("something went wrong !");
      }
    }
  };

  return (
    <div className="gmc-container">
      <h3>Company Summary</h3>
      <div className="page-gmc-container">
        <div className="compdetails">
          <div className="uploadDoc">
            <label for="memberslist1">Upload Memebers list excel</label>
            <input type="file" id="memberslist1" />
          </div>
          <div className="uploadDoc">
            <label for="memberslist2">Upload Company PAN</label>
            <input type="file" id="memberslist2" />
          </div>

          <div className="uploadDoc">
            <label for="memberslist3">Upload Company GST</label>
            <input type="file" id="memberslist3" />
          </div>

          <div className="uploadDoc">
            <label for="memberslist4">Upload Company Address Proof</label>
            <input type="file" id="memberslist4" />
          </div>

          <div className="uploadDoc">
            <label for="memberslist5">Upload Authorised Signatory Proof</label>
            <input type="file" id="memberslist5" />
          </div>

          <p>Download sample proof Doc</p>
          <h3>Authenticate with OTP</h3>
          <button>Send OTP</button>
          <div className="btn-gmc-container">
            <button className="draftbtn">Save as Draft</button>
            <button className="confirmbtn" onClick={OnSubmitDetails}>
              {loading ? "loading..." : "Confirm"}
            </button>
          </div>
        </div>
      </div>
      <p>{error ? <div className="text-danger">{error}</div> : null}</p>
    </div>
  );
};
export default GcmSummary;

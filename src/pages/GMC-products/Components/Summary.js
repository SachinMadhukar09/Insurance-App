import uploadIcon from "../../../Assets/svg/upload.png";

const GcmSummary = () => {
  return (
    <div className="gmc-container">
      <h3>Company Summary</h3>
      <div className="page-gmc-container">
        <div className="compdetails">
          <div className="uploadDoc">
            <label for="memberslist1">Upload Memebers list excel</label>
            <input
              type="file"
              id="memberslist1"
            />
          </div>
          <div className="uploadDoc">
            <label for="memberslist2">Upload Company PAN</label>
            <input
              type="file"
              id="memberslist2"
             
            />
          </div>

          <div className="uploadDoc">
            <label for="memberslist3">Upload Company GST</label>
            <input
              type="file"
              id="memberslist3"
            />
          </div>

          <div className="uploadDoc">
            <label for="memberslist4">Upload Company Address Proof</label>
            <input
              type="file"
              id="memberslist4"
            />
          </div>

          <div className="uploadDoc">
            <label for="memberslist5">Upload Authorised Signatory Proof</label>
            <input
              type="file"
              id="memberslist5"
            />
          </div>
          
          <p>Download sample proof Doc</p>
          <h3>Authenticate with OTP</h3>
          <button>Send OTP</button>
          <div className="btn-gmc-container">
            <button className="draftbtn">Save as Draft</button>
            <button className="confirmbtn">Confirm</button>
          </div>
        </div>
       
      </div>
     
    </div>
  );
};
export default GcmSummary;

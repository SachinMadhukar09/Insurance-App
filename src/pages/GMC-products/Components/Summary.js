import uploadIcon from "../../../Assets/svg/upload.png";

const GcmSummary = () => {
  return (
    <div className="container">
      <h3>Company Summary</h3>
      <div className="page-container">
        <div className="compdetails">
          <input
            type="file"
            hidden
            // ref={this.inputReference}
            // onChange={this.fileUploadInputChange}
          />
          <div className="uploadDoc">
            <img className="uploadIcon" src={uploadIcon} />
            <span>Upload Memebers list excel</span>
          </div>

          <input
            type="file"
            hidden
            // ref={this.inputReference}
            // onChange={this.fileUploadInputChange}
          />
          <div className="uploadDoc">
            <img className="uploadIcon" src={uploadIcon} />
            <span>Upload Memebers list excel</span>
          </div>

          <input
            type="file"
            hidden
            // ref={this.inputReference}
            // onChange={this.fileUploadInputChange}
          />
          <div className="uploadDoc">
            <img className="uploadIcon" src={uploadIcon} />
            <span>Upload Memebers list excel</span>
          </div>

          <input
            type="file"
            hidden
            // ref={this.inputReference}
            // onChange={this.fileUploadInputChange}
          />
          <div className="uploadDoc">
            <img className="uploadIcon" src={uploadIcon} />
            <span>Upload Memebers list excel</span>
          </div>

          <input
            type="file"
            hidden
            // ref={this.inputReference}
            // onChange={this.fileUploadInputChange}
          />
          <div className="uploadDoc">
            <img className="uploadIcon" src={uploadIcon} />
            <span>Upload Memebers list excel</span>
          </div>
          
   
          <p>Download sample proof Doc</p>
          <h3>Authenticate with OTP</h3>
          <button>Send OTP</button>
          <div className="btn-container">
            <button className="draftbtn">Save as Draft</button>
            <button className="confirmbtn">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GcmSummary;

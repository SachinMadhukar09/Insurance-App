const CompanyDetails = () => {
  return (
    <div className="container">
      <h3>Company Details</h3>
      <div className="page-container">
        <div className="compdetails">
          <input type="text" placeholder="Company GST" name="companygst" />
          <select>
            <option selected>Select Bussiness Type</option>
            <option>option1</option>
            <option>option1</option>
            <option>option1</option>
            <option>option1</option>
          </select>
          <input type="text" placeholder="Company Name" name="companygst" />
          <textarea
            placeholder="Company Address"
            name="companygst"
            rows="5"
          />
          <select>
            <option selected>Select City</option>
            <option>option1</option>
            <option>option1</option>
            <option>option1</option>
            <option>option1</option>
          </select>
          <input type="text" placeholder="Company PAN" name="companygst" />
          <p>Authorised Signatory Details</p>
          <input type="text" placeholder="Full Name" name="companygst" />
          <div className="btn-container">
            <button className="draftbtn">Save as Draft</button>
            {/* <button className="draftbtn">Save as Draft</button> */}
          </div>
        </div>
        <div>
          <img />
        </div>
      </div>
    </div>
  );
};
export default CompanyDetails;

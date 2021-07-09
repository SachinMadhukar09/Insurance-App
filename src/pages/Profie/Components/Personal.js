
const Personal = () => {
  return (
      <div className="personal-container">
        <p>
          Keeping these updates will help you buying insurance in a fast way
        </p>
        <form>
          <div className="form-container">
            <div className="form-data">
              <div className="field">
                <label>First Name</label>
                <input type="text" name="firstName" required></input>
              </div>
              <div className="field">
                <label>Mobile Number</label>
                <input type="text" name="mobile" required></input>
              </div>
              <div className="field">
              <label>Sex</label>
                <input list="genders" name="gender" id="gender" required/>
                <datalist id="genders">
                    <option value="male" key="male"/>
                    <option value="female" key="female"/>
                    <option value="transgender" key="transgender"/>
                </datalist>
              </div >
               <div className="field">
                <label>Current Location</label>
                <input type="text" name="location" required></input>
              </div>
              <div className="field">
                <label>Address 2</label>
                <input type="text" name="address" required></input>
              </div>
              <div className="field">
                <label>State</label>
                <input type="text" name="state" required></input>
              </div>
            </div>
          <div className="form-data">
              <div className="field">
                <label>Last Name</label>
                <input type="text" name="lastName" required></input>
              </div>
              <div className="field">
                <label>Email ID</label>
                <input type="text" name="email" required></input>
              </div >
              <div className="field">
                <label>Date of Birth</label>
                <input type="date" name="dob" required></input>
              </div>
              <div className="field">
                <label>Address1</label>
                <input type="text" name="address1" required></input>
              </div>
              <div className="field">
                <label>Address 3</label>
                <input type="text" name="address3" required></input>
              </div>
              <div className="field">
                <label>Country</label>
                <input type="text" name="country" required></input>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="confirmbtn"
              onClick={()=> true}
              style={{ width: 200 }}
            >
              {false ? "Please wait..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
  );
};
export default Personal;

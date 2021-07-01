import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Progress from "react-progressbar";

const Customizes = () => {
//   const [ref, percentage] = useScrollPercentage({
//     /* Optional options */
//     threshold: 0,
//   });

  const [employeeNumber, setEmployees] = useState("10");
  const [selectmsg, setSelectMsg] = useState(false);

  const history = useHistory();

  const Onfreshpolicies = () => {
    history.push("/gmcproducts");
  };

  const increaseNumber = () => {
    if (employeeNumber < 1000) {
      setSelectMsg(false);
      setEmployees(`${Number(employeeNumber) + 1}`);
    } else {
      setSelectMsg(true);
    }
  };

  const decreaseNumber = () => {
    if (employeeNumber > 10) {
      setSelectMsg(false);
      setEmployees(`${Number(employeeNumber) - 1}`);
    } else {
      setSelectMsg(true);
    }
  };

  const inputempNumber = (event) => {
    let value = Number(event.target.value);
    if (value < 10 || value > 1000) {
      setSelectMsg(true);
    } else {
      setSelectMsg(false);
    }
    setEmployees(`${event.target.value}`);
  };

  return (
    <div className="container">
      <h3>Age Group and Member Details</h3>
      <div class="page-container">
        <div className="form-part">
          <div className="form-list">
            <div className="agelist">
              <p>Age Group</p>
              <input list="agegrps1" name="age1" id="age1" />
              <datalist id="agegrps1">
                <option value="18-30" />
                <option value="31-50" />
                <option value="50-100" />
              </datalist>
              <input list="agegrps2" name="age2" id="age1" />
              <datalist id="agegrps2">
                <option value="18-30" />
                <option value="31-50" />
                <option value="50-100" />
              </datalist>
              <input list="agegrps3" name="age3" id="age3" />
              <datalist id="agegrps3">
                <option value="18-30" />
                <option value="31-50" />
                <option value="50-100" />
              </datalist>
              <input list="agegrps4" name="age4" id="age4" />
              <datalist id="agegrps4">
                <option value="18-30" />
                <option value="31-50" />
                <option value="50-100" />
              </datalist>
              <input list="agegrps5" name="age5" id="age5" />
              <datalist id="agegrps5">
                <option value="18-30" />
                <option value="31-50" />
                <option value="50-100" />
              </datalist>
            </div>
            <div className="sum-insured">
              <p>Age Group</p>
              <input list="agegrps1" name="age1" id="age1" />
              <datalist id="agegrps1">
                <option value="18-30" />
                <option value="31-50" />
                <option value="50-100" />
              </datalist>
              <input list="agegrps2" name="age2" id="age1" />
              <datalist id="agegrps2">
                <option value="18-30" />
                <option value="31-50" />
                <option value="50-100" />
              </datalist>
              <input list="agegrps3" name="age3" id="age3" />
              <datalist id="agegrps3">
                <option value="18-30" />
                <option value="31-50" />
                <option value="50-100" />
              </datalist>
              <input list="agegrps4" name="age4" id="age4" />
              <datalist id="agegrps4">
                <option value="18-30" />
                <option value="31-50" />
                <option value="50-100" />
              </datalist>
              <input list="agegrps5" name="age5" id="age5" />
              <datalist id="agegrps5">
                <option value="18-30" />
                <option value="31-50" />
                <option value="50-100" />
              </datalist>
            </div>
            <div className="members">
                <p>No. of Members</p>
              <div className="empnumbers">
                <button onClick={decreaseNumber} className="minus-btn"></button>
                <input
                  type="number"
                  className="numberstring"
                  onChange={inputempNumber}
                  value={employeeNumber.toString()}
                />
                {/* <input type="number" className="numberstring" name="empnumber" value={employeeNumber}/> */}
                {/* <span className="numberstring">{employeeNumber}</span> */}
                <button onClick={increaseNumber} className="plus-btn"></button>
              </div>
              <div className="empnumbers">
                <button onClick={decreaseNumber} className="minus-btn"></button>
                <input
                  type="number"
                  className="numberstring"
                  onChange={inputempNumber}
                  value={employeeNumber.toString()}
                />
                {/* <input type="number" className="numberstring" name="empnumber" value={employeeNumber}/> */}
                {/* <span className="numberstring">{employeeNumber}</span> */}
                <button onClick={increaseNumber} className="plus-btn"></button>
              </div>
              <div className="empnumbers">
                <button onClick={decreaseNumber} className="minus-btn"></button>
                <input
                  type="number"
                  className="numberstring"
                  onChange={inputempNumber}
                  value={employeeNumber.toString()}
                />
                {/* <input type="number" className="numberstring" name="empnumber" value={employeeNumber}/> */}
                {/* <span className="numberstring">{employeeNumber}</span> */}
                <button onClick={increaseNumber} className="plus-btn"></button>
              </div>
              <div className="empnumbers">
                <button onClick={decreaseNumber} className="minus-btn"></button>
                <input
                  type="number"
                  className="numberstring"
                  onChange={inputempNumber}
                  value={employeeNumber.toString()}
                />
                {/* <input type="number" className="numberstring" name="empnumber" value={employeeNumber}/> */}
                {/* <span className="numberstring">{employeeNumber}</span> */}
                <button onClick={increaseNumber} className="plus-btn"></button>
              </div>
              <div className="empnumbers">
                <button onClick={decreaseNumber} className="minus-btn"></button>
                <input
                  type="number"
                  className="numberstring"
                  onChange={inputempNumber}
                  value={employeeNumber.toString()}
                />
                {/* <input type="number" className="numberstring" name="empnumber" value={employeeNumber}/> */}
                {/* <span className="numberstring">{employeeNumber}</span> */}
                <button onClick={increaseNumber} className="plus-btn"></button>
                
              </div>
              <p style={{fontSize:"12px"}}>Total Insured Members: {10}</p>
            </div>
          </div>
          <div>
            <h3>Pre-Existing Disease Cover</h3>
            <div className="btn-container">
              <button>Yes</button>
              <button>No</button>
            </div>
          </div>
          <div>
            <h3>Pre/Post Hospitalisation Expenses</h3>
            <div className="btn-container">
              <button>Yes</button>
              <button>No</button>
            </div>
          </div>
          <div>
            <h3>Pre/Post Hospitalisation Expenses</h3>
            <div className="btn-container">
              <button>Yes</button>
              <button>No</button>
            </div>
          </div>
          <div>
            <h3>Pre/Post Hospitalisation Expenses</h3>
            <div className="btn-container">
              <button>Yes</button>
              <button>No</button>
            </div>
          </div>
          <div>
            <h3>Pre/Post Hospitalisation Expenses</h3>
            <div className="btn-container">
              <button>Yes</button>
              <button>No</button>
            </div>
          </div>
          <div>
            <h3>Pre/Post Hospitalisation Expenses</h3>
            <div className="btn-container">
            <select>
              <option>option1</option>
              <option>option1</option>
              <option>option1</option>
              <option>option1</option>
              <option>option1</option>
            </select>
            </div>
          </div>
          <div>
            <h3>Pre/Post Hospitalisation Expenses</h3>
            <div className="btn-container">
              <button className="expenses">Self</button>
              <button className="expenses">Spouse/Partner</button>
              <button className="expenses">Child</button>
            </div>
          </div>
          <div className="btn-container">
            <button className="draftbtn">Save as Draft</button>
          </div>
        </div>
        <div className="submit-part">
          <h3>Co-Payment</h3>
          <p className="desc">
            Save upto 15% by opting for co-payment on each and every admissible
            claim amount
          </p>
          <div className="progressbar">
            <Progress completed={75} />
          </div>

          <p>Total Premium (including GST)</p>

          <p>₹ {24000} per yeart</p>
          <p className="cover">₹ {24000} per member every year</p>
        </div>
      </div>
    </div>
  );
};
export default Customizes;

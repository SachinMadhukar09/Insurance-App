import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Progress from "react-progressbar";

const Customizes = () => {
  const [employeeNumber, setEmployees] = useState("3");
  const [employeeNumber1, setEmployees1] = useState("3");
  const [employeeNumber2, setEmployees2] = useState("3");
  const [employeeNumber3, setEmployees3] = useState("3");
  const [employeeNumber4, setEmployees4] = useState("3");
  const [selectmsg, setSelectMsg] = useState(false);
  const [selectmsg1, setSelectMsg1] = useState(false);
  const [selectmsg2, setSelectMsg2] = useState(false);
  const [selectmsg3, setSelectMsg3] = useState(false);
  const [selectmsg4, setSelectMsg4] = useState(false);
  const [btnActive, setBtnActive] = React.useState({});

  const history = useHistory();

  const increaseNumber = (val) => {
    console.log("avpp", val);
    switch (Number(val)) {
      case 1:
        console.log("heressss", val);
        if (employeeNumber < 1000) {
          setSelectMsg(false);
          setEmployees(`${Number(employeeNumber) + 1}`);
        } else {
          setSelectMsg(true);
        }
        break;
      case 2:
        if (employeeNumber1 < 1000) {
          setSelectMsg1(false);
          setEmployees1(`${Number(employeeNumber1) + 1}`);
        } else {
          setSelectMsg1(true);
        }
        break;
      case 3:
        if (employeeNumber2 < 1000) {
          setSelectMsg2(false);
          setEmployees2(`${Number(employeeNumber2) + 1}`);
        } else {
          setSelectMsg2(true);
        }
        break;
      case 4:
        if (employeeNumber3 < 1000) {
          setSelectMsg3(false);
          setEmployees3(`${Number(employeeNumber3) + 1}`);
        } else {
          setSelectMsg3(true);
        }
        break;

      case 5:
        if (employeeNumber4 < 1000) {
          setSelectMsg4(false);
          setEmployees4(`${Number(employeeNumber4) + 1}`);
        } else {
          setSelectMsg4(true);
        }
        break;
    }
  };

  const decreaseNumber = (val) => {
    console.log("fdsffsd", val);
    switch (val) {
      case 1:
        console.log("heressss", val);
        if (employeeNumber > 10) {
          setSelectMsg(false);
          setEmployees(`${Number(employeeNumber) - 1}`);
        } else {
          setSelectMsg(true);
        }
        break;
      case 2:
        if (employeeNumber1 > 10) {
          setSelectMsg1(false);
          setEmployees1(`${Number(employeeNumber1) - 1}`);
        } else {
          setSelectMsg1(true);
        }
        break;
      case 3:
        if (employeeNumber2 > 10) {
          setSelectMsg2(false);
          setEmployees2(`${Number(employeeNumber2) - 1}`);
        } else {
          setSelectMsg2(true);
        }
        break;

      case 4:
        if (employeeNumber3 > 10) {
          setSelectMsg3(false);
          setEmployees3(`${Number(employeeNumber3) - 1}`);
        } else {
          setSelectMsg3(true);
        }
        break;
      case 5:
        if (employeeNumber4 > 10) {
          setSelectMsg4(false);
          setEmployees4(`${Number(employeeNumber4) - 1}`);
        } else {
          setSelectMsg4(true);
        }
        break;
    }
  };

  const inputempNumber = (event) => {
    event.preventDefault();
    switch (event.target.name) {
      case "employees1":
        if (employeeNumber > 10) {
          setSelectMsg(false);
        } else {
          setSelectMsg(true);
        }
        setEmployees(`${event.target.value}`);
        break;
      case "employees2":
        if (employeeNumber1 > 10) {
          setSelectMsg1(false);
        } else {
          setSelectMsg1(true);
        }
        setEmployees1(`${event.target.value}`);
        break;
      case "employees3":
        if (employeeNumber2 > 10) {
          setSelectMsg2(false);
        } else {
          setSelectMsg2(true);
        }
        setEmployees2(`${event.target.value}`);
        break;
      case "employees4":
        if (employeeNumber3 > 10) {
          setSelectMsg3(false);
        } else {
          setSelectMsg3(true);
        }
        setEmployees3(`${event.target.value}`);
        break;
      case "employees5":
        if (employeeNumber4 > 10 || employeeNumber4 < 1000) {
          setSelectMsg4(false);
        } else {
          setSelectMsg4(true);
        }
        setEmployees4(`${event.target.value}`);
        break;
    }
  };

  const setValue = (val) => {
    const obj = btnActive;
  };

  return (
    <div className="gmc-container">
      <h3>Age Group and Member Details</h3>
      <div class="page-gmc-container">
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
              <input list="agegrps2" name="age2" id="age2" />
              <datalist id="agegrps2">
                <option value="18-30" />
                <option value="31-50" />
                <option value="50-100" />
              </datalist>
              <input list="agegrps1" name="age1" id="age1" />
              <datalist id="agegrps1">
                <option value="18-30" />
                <option value="31-50" />
                <option value="50-100" />
              </datalist>
              <input list="agegrps2" name="age2" id="age2" />
              <datalist id="agegrps2">
                <option value="18-30" />
                <option value="31-50" />
                <option value="50-100" />
              </datalist>
              <input list="agegrps2" name="age2" id="age2" />
              <datalist id="agegrps2">
                <option value="18-30" />
                <option value="31-50" />
                <option value="50-100" />
              </datalist>
            </div>
            <div className="sum-insured">
              <p>Sum Insured</p>
              <input list="suminsured1" name="insuredsum1" id="insuredsum1" />
              <datalist id="suminsured1">
                <option value="10-50" />
                <option value="50-100" />
                <option value="100- 1000" />
              </datalist>
              <input list="suminsured2" name="insuredsum2" id="insuredsum2" />
              <datalist id="suminsured2">
                <option value="10-50" />
                <option value="50-100" />
                <option value="100- 1000" />
              </datalist>

              <input list="suminsured3" name="insuredsum3" id="insuredsum3" />
              <datalist id="suminsured3">
                <option value="10-50" />
                <option value="50-100" />
                <option value="100- 1000" />
              </datalist>

              <input list="suminsured4" name="insuredsum4" id="insuredsum4" />
              <datalist id="suminsured4">
                <option value="10-50" />
                <option value="50-100" />
                <option value="100- 1000" />
              </datalist>
              <input list="suminsured5" name="insuredsum5" id="insuredsum5" />
              <datalist id="suminsured5">
                <option value="10-50" />
                <option value="50-100" />
                <option value="100- 1000" />
              </datalist>
            </div>
            <div className="members">
              <p>No. of Members</p>
              <div className="empnumbers">
                <button
                  onClick={() => decreaseNumber(1)}
                  className="minus-btn"
                ></button>
                <input
                  type="number"
                  className="numberstring"
                  id="employees1"
                  name="employees1"
                  onChange={inputempNumber}
                  value={employeeNumber.toString()}
                />
                <button
                  onClick={() => increaseNumber(1)}
                  className="plus-btn"
                ></button>
              </div>
              {selectmsg ? (
                <p className="numbemsg">** Select between 3-1000 members</p>
              ) : null}
              <div className="empnumbers">
                <button
                  onClick={() => decreaseNumber(2)}
                  className="minus-btn"
                ></button>
                <input
                  type="number"
                  className="numberstring"
                  id="employees1"
                  name="employees2"
                  onChange={inputempNumber}
                  value={employeeNumber1.toString()}
                />
                <button
                  onClick={() => increaseNumber(2)}
                  className="plus-btn"
                ></button>
              </div>
              {selectmsg1 ? (
                <p className="numbemsg">** Select between 3-1000 members</p>
              ) : null}
              <div className="empnumbers">
                <button
                  onClick={() => decreaseNumber(3)}
                  className="minus-btn"
                ></button>
                <input
                  type="number"
                  className="numberstring"
                  id="employees1"
                  name="employees3"
                  onChange={inputempNumber}
                  value={employeeNumber2.toString()}
                />
                <button
                  onClick={() => increaseNumber(3)}
                  className="plus-btn"
                ></button>
              </div>
              {selectmsg2 ? (
                <p className="numbemsg">** Select between 3-1000 members</p>
              ) : null}
              <div className="empnumbers">
                <button
                  onClick={() => decreaseNumber(4)}
                  className="minus-btn"
                ></button>
                <input
                  type="number"
                  className="numberstring"
                  id="employees1"
                  name="employees4"
                  onChange={inputempNumber}
                  value={employeeNumber3.toString()}
                />
                <button
                  onClick={() => increaseNumber(4)}
                  className="plus-btn"
                ></button>
              </div>
              {selectmsg3 ? (
                <p className="numbemsg">** Select between 3-1000 members</p>
              ) : null}
              <div className="empnumbers">
                <button
                  onClick={() => decreaseNumber(5)}
                  className="minus-btn"
                ></button>
                <input
                  type="number"
                  className="numberstring"
                  id="employees2"
                  name="employees5"
                  onChange={inputempNumber}
                  value={employeeNumber4.toString()}
                />

                <button
                  onClick={() => increaseNumber(5)}
                  className="plus-btn"
                ></button>
              </div>
              {selectmsg4 ? (
                <p className="numbemsg">** Select between 3-1000 members</p>
              ) : null}
              <p style={{ fontSize: "12px" }}>
                Total Members:{" "}
                {Number(employeeNumber) +
                  Number(employeeNumber1) +
                  Number(employeeNumber2) +
                  Number(employeeNumber3) +
                  Number(employeeNumber4)}
              </p>
            </div>
          </div>
          <div>
            <h3>Pre-Existing Disease Cover</h3>
            
            <div class="switch1 gmc-yes_no-btn">
              <input type="radio" name="choice1" id="yes1" checked />
              <label className="yesnoLabel1" for="yes1">
                Yes
              </label>
              <input type="radio" name="choice1" id="no1" />
              <label className="yesnoLabel1" for="no1">
                No
              </label>
              <span class="gmcfilter"></span>
            </div>
          </div>
          <div>
            <h3>Pre/Post Hospitalisation Expenses</h3>
            <div class="switch1 gmc-yes_no-btn">
              <input type="radio" name="choice2" id="yes2" checked />
              <label className="yesnoLabel2" for="yes2">
                Yes
              </label>
              <input type="radio" name="choice2" id="no2" />
              <label className="yesnoLabel2" for="no2">
                No
              </label>
              <span class="gmcfilter"></span>
            </div>
          </div>
          <div>
            <h3>Maternity Benefit and New-Born Baby Cover</h3>
            <div class="switch1 gmc-yes_no-btn">
              <input type="radio" name="choice3" id="yes3" checked />
              <label className="yesnoLabel3" for="yes3">
                Yes
              </label>
              <input type="radio" name="choice3" id="no3" />
              <label className="yesnoLabel3" for="no3">
                No
              </label>
              <span class="gmcfilter"></span>
            </div>
          </div>
          <div>
            <h3>Organ Donor Expenses</h3>
            <div class="switch1 gmc-yes_no-btn">
              <input type="radio" name="choice4" id="yes4" checked />
              <label className="yesnoLabel4" for="yes4">
                Yes
              </label>
              <input type="radio" name="choice4" id="no4" />
              <label className="yesnoLabel4" for="no4">
                No
              </label>
              <span class="gmcfilter"></span>
            </div>
          </div>
          <div>
            <h3>Alternate Treatment Cover(AYUSH Treatment)</h3>
            <div class="switch1 gmc-yes_no-btn">
              <input type="radio" name="choice5" id="yes5" checked />
              <label className="yesnoLabel5" for="yes5">
                Yes
              </label>
              <input type="radio" name="choice5" id="no5" />
              <label className="yesnoLabel5" for="no5">
                No
              </label>
              <span class="gmcfilter"></span>
            </div>
          </div>
          <div>
            <h3>Accomdation/Room Rent Limits</h3>
            <div className="btn-gmc-container">
              <select>
                <option selected> Normal Room 1%/ ICU Room 2%</option>
                <option>option1</option>
                <option>option1</option>
                <option>option1</option>
                <option>option1</option>
              </select>
            </div>
          </div>
          <div>
            <h3>Select Member Type</h3>
            <div className="btn-gmc-container">
              <button className="expenses">Self</button>
              <button className="expenses">Spouse/Partner</button>
              <button className="expenses">Child</button>
            </div>
          </div>
          <div className="btn-gmc-container">
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

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Progress from "react-progressbar";

const Customizes = (props) => {
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
  const [memberdetails, setMembers] = useState([]);
  const [preExDiseaseCover, setPreExDiseaseCover] = useState(true);
  const [hospitalisationExpenses, setHospitalisationExpenses] = useState(true);
  const [matentrityCover, setMatentrityCover] = useState(true);
  const [organDonorExpense, setorganDonorExpense] = useState(true);
  const [altTreatment, setAltertreatment] = useState(true);
  const [roomrate, setRoomRent] = useState("");
  const [memberType, setMemeberType] = useState("");
  const [btnActive, setBtnActive] = React.useState({});

  const history = useHistory();

  const agegroups = ["18-25", "26-40", "41-60", "61-80", "81-above"];

  const setEmployeeDetails = () => {
    props.setdetails({
      totalEmployees: props.totalEmployees,
      customerId: localStorage.getItem("customer"),
      companyId: "cc1d",
      type: "proposal",
      brokerId: "8f599a",
      createdAt: new Date().getTime(),
      quotationName: "gmc",
      quotationAmount: {
        amountActual: 100.0,
        amountFormatted: 100, 
      },
      memberDetails: memberdetails,
      preExistingDiseaseCover: preExDiseaseCover,
      prePostHospitalisationExpenses: hospitalisationExpenses,
      maternityBenifitNewBornBabyCover: matentrityCover,
      organDonorExpense: organDonorExpense,
      alternateTreatmentCover: altTreatment,
      accomdationRoomRentLimits: roomrate,
      memberType: memberType,
    });
    props.jumpToStep(2);
  };

  const increaseNumber = (val) => {
    switch (Number(val)) {
      case 1:
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
    switch (val) {
      case 1:
        if (employeeNumber > 3) {
          setSelectMsg(false);
          setEmployees(`${Number(employeeNumber) - 1}`);
        } else {
          setSelectMsg(true);
        }
        break;
      case 2:
        if (employeeNumber1 > 3) {
          setSelectMsg1(false);
          setEmployees1(`${Number(employeeNumber1) - 1}`);
        } else {
          setSelectMsg1(true);
        }
        break;
      case 3:
        if (employeeNumber2 > 3) {
          setSelectMsg2(false);
          setEmployees2(`${Number(employeeNumber2) - 1}`);
        } else {
          setSelectMsg2(true);
        }
        break;

      case 4:
        if (employeeNumber3 > 3) {
          setSelectMsg3(false);
          setEmployees3(`${Number(employeeNumber3) - 1}`);
        } else {
          setSelectMsg3(true);
        }
        break;
      case 5:
        if (employeeNumber4 > 3) {
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
        if (employeeNumber > 3) {
          setSelectMsg(false);
        } else {
          setSelectMsg(true);
        }
        setEmployees(`${event.target.value}`);
        break;
      case "employees2":
        if (employeeNumber1 > 3) {
          setSelectMsg1(false);
        } else {
          setSelectMsg1(true);
        }
        setEmployees1(`${event.target.value}`);
        break;
      case "employees3":
        if (employeeNumber2 > 3) {
          setSelectMsg2(false);
        } else {
          setSelectMsg2(true);
        }
        setEmployees2(`${event.target.value}`);
        break;
      case "employees4":
        if (employeeNumber3 > 3) {
          setSelectMsg3(false);
        } else {
          setSelectMsg3(true);
        }
        setEmployees3(`${event.target.value}`);
        break;
      case "employees5":
        if (employeeNumber4 > 3 || employeeNumber4 < 1000) {
          setSelectMsg4(false);
        } else {
          setSelectMsg4(true);
        }
        setEmployees4(`${event.target.value}`);
        break;
    }
  };

  
  const onValChange = (event) => {
    let valname = event.target.name;
    let noOfmembers;
    let valtype = 0;
    switch (valname) {
      case "insuredsum1":
        valtype = 0;
        noOfmembers = employeeNumber;
        break;
      case "insuredsum2":
        valtype = 1;
        noOfmembers = employeeNumber1;
        break;
      case "insuredsum3":
        valtype = 2;
        noOfmembers = employeeNumber2;
        break;
      case "insuredsum4":
        valtype = 3;
        noOfmembers = employeeNumber3;
        break;
      case "insuredsum5":
        valtype = 4;
        noOfmembers = employeeNumber4;
        break;
      default:
        valtype = 0;
        noOfmembers = "";
    }
    memberdetails[Number(valtype)] = {
      ageGroup: agegroups[Number(valtype)],
      sumInsured: event.target.value,
      noOfMembers: noOfmembers,
    };
    setMembers(memberdetails);
  };

  return (
    <div className="gmc-container">
      <h3>Age Group and Member Details</h3>
      <div class="page-gmc-container">
        <div className="form-part">
          <div className="form-list">
            <div className="agelist">
              <p>Age Group</p>
              {agegroups.map((agegrp) => (
                <input
                  type="text"
                  name="age1"
                  id="age1"
                  value={agegrp}
                  readOnly={true}
                />
              ))}
              {/* <input
                type="text"
                name="age1"
                id="age1"
                value="18-25"
                readOnly={true}
              /> */}
              {/* <datalist id="agegrps1">
                <option value="18-25" selected />
                <option value="26-40" />
                <option value="41-60" />
                <option value="61-80" />
                <option value="81 above" />
              </datalist> */}
              {/* <input
                type="text"
                name="age2"
                id="age2"
                value="26-40"
                readOnly={true}
              /> */}
              {/* <input list="agegrps2" name="age2" id="age2" /> */}
              {/* <datalist id="agegrps2">
                <option value="18-25" />
                <option value="26-40" selected />
                <option value="41-60" />
                <option value="61-80" />
                <option value="81 above" />
              </datalist> */}
              {/* <input
                type="text"
                name="age3"
                id="age3"
                value="41-60"
                readOnly={true}
              /> */}
              {/* <datalist id="agegrps1">
                <option value="18-25" />
                <option value="26-40" />
                <option value="41-60" selected />
                <option value="61-80" />
                <option value="81 above" />
              </datalist> */}
              {/* <input
                type="text"
                name="age4"
                id="age4"
                value="61-80"
                readOnly={true}
              /> */}
              {/* <datalist id="agegrps2">
                <option value="18-25" />
                <option value="26-40" />
                <option value="41-60" />
                <option value="61-80" selected />
                <option value="81 above" />
              </datalist> */}
              {/* <input
                type="text"
                name="age5"
                id="age5"
                value="81-above"
                readOnly={true}
              /> */}
              {/* <datalist id="agegrps2">
                <option value="18-25" />
                <option value="26-40" />
                <option value="41-60" />
                <option value="61-80" />
                <option value="81 above" selected />
              </datalist> */}
            </div>
            <div className="sum-insured">
              <p>Sum Insured</p>
              <input
                list="suminsured1"
                name="insuredsum1"
                id="insuredsum1"
                onChange={onValChange}
              />
              <datalist id="suminsured1">
                <option value="50000" />
                <option value="100000" />
                <option value="500000" />
              </datalist>
              <input
                list="suminsured2"
                name="insuredsum2"
                id="insuredsum2"
                onChange={onValChange}
              />
              <datalist id="suminsured2">
                <option value="50000" />
                <option value="100000" />
                <option value="500000" />
              </datalist>

              <input
                list="suminsured3"
                name="insuredsum3"
                id="insuredsum3"
                onChange={onValChange}
              />
              <datalist id="suminsured3">
                <option value="50000" />
                <option value="100000" />
                <option value="500000" />
              </datalist>

              <input
                list="suminsured4"
                name="insuredsum4"
                id="insuredsum4"
                onChange={onValChange}
              />
              <datalist id="suminsured4">
                <option value="50000" />
                <option value="100000" />
                <option value="500000" />
              </datalist>
              <input
                list="suminsured5"
                name="insuredsum5"
                id="insuredsum5"
                onChange={onValChange}
              />
              <datalist id="suminsured5">
                <option value="50000" />
                <option value="100000" />
                <option value="500000" />
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
              <input
                type="radio"
                name="choice1"
                id="yes1"
                checked={preExDiseaseCover}
                onClick={() => setPreExDiseaseCover(true)}
              />
              <label className="yesnoLabel1" for="yes1">
                Yes
              </label>
              <input
                type="radio"
                name="choice1"
                id="no1"
                checked={!preExDiseaseCover}
                onClick={() => setPreExDiseaseCover(false)}
              />
              <label className="yesnoLabel1" for="no1">
                No
              </label>
              <span class="gmcfilter"></span>
            </div>
          </div>
          <div>
            <h3>Pre/Post Hospitalisation Expenses</h3>
            <div class="switch1 gmc-yes_no-btn">
              <input
                type="radio"
                name="choice2"
                id="yes2"
                checked={hospitalisationExpenses}
                onClick={() => setHospitalisationExpenses(true)}
              />
              <label className="yesnoLabel2" for="yes2">
                Yes
              </label>
              <input
                type="radio"
                name="choice2"
                id="no2"
                checked={!hospitalisationExpenses}
                onClick={() => setHospitalisationExpenses(false)}
              />
              <label className="yesnoLabel2" for="no2">
                No
              </label>
              <span class="gmcfilter"></span>
            </div>
          </div>
          <div>
            <h3>Maternity Benefit and New-Born Baby Cover</h3>
            <div class="switch1 gmc-yes_no-btn">
              <input
                type="radio"
                name="choice3"
                id="yes3"
                checked={matentrityCover}
                onClick={() => setMatentrityCover(true)}
              />
              <label className="yesnoLabel3" for="yes3">
                Yes
              </label>
              <input
                type="radio"
                name="choice3"
                id="no3"
                checked={!matentrityCover}
                onClick={() => setMatentrityCover(false)}
              />
              <label className="yesnoLabel3" for="no3">
                No
              </label>
              <span class="gmcfilter"></span>
            </div>
          </div>
          <div>
            <h3>Organ Donor Expenses</h3>
            <div class="switch1 gmc-yes_no-btn">
              <input
                type="radio"
                name="choice4"
                id="yes4"
                checked={organDonorExpense}
                onClick={() => setorganDonorExpense(true)}
              />
              <label className="yesnoLabel4" for="yes4">
                Yes
              </label>
              <input
                type="radio"
                name="choice4"
                id="no4"
                checked={!organDonorExpense}
                onClick={() => setorganDonorExpense(false)}
              />
              <label className="yesnoLabel4" for="no4">
                No
              </label>
              <span class="gmcfilter"></span>
            </div>
          </div>
          <div>
            <h3>Alternate Treatment Cover(AYUSH Treatment)</h3>
            <div class="switch1 gmc-yes_no-btn">
              <input
                type="radio"
                name="choice5"
                id="yes5"
                checked={altTreatment}
                onClick={() => setAltertreatment(true)}
              />
              <label className="yesnoLabel5" for="yes5">
                Yes
              </label>
              <input
                type="radio"
                name="choice5"
                id="no5"
                checked={!altTreatment}
                onClick={() => setAltertreatment(false)}
              />
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
                {/* <option>option1</option>
                <option>option1</option>
                <option>option1</option>
                <option>option1</option> */}
              </select>
            </div>
          </div>
          <div>
            <h3>Select Member Type</h3>
            <div className="btn-gmc-container">
              <button
                className={
                  "expenses" + (memberType == "self" ? " active-btn" : "")
                }
                onClick={() => setMemeberType("self")}
              >
                Self
              </button>
              <button
                className={
                  "expenses" + (memberType == "spouse" ? " active-btn" : "")
                }
                onClick={() => setMemeberType("spouse")}
              >
                Spouse/Partner
              </button>
              <button
                className={
                  "expenses" + (memberType == "child" ? " active-btn" : "")
                }
                onClick={() => setMemeberType("child")}
              >
                Child
              </button>
            </div>
          </div>
          <div className="btn-gmc-container">
            <button className="draftbtn">Save as Draft</button>
            <button className="confirmbtn" onClick={setEmployeeDetails}>
              Next
            </button>
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

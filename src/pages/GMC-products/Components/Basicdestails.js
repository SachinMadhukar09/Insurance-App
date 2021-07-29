import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../gmcproducts.css";

const BasicDetails = (props) => {
  const [employeeNumber, setEmployees] = useState("3");
  const [selectmsg, setSelectMsg] = useState(false);
  const [className, setclassName] = useState(false);
  // console.log('props---', props)

  let { company } = useParams();
  if (!company) {
    company = localStorage.getItem("company");
  }
  const history = useHistory();

  const Onfreshpolicies = () => {
    history.push(`/${company}/gmcproducts`);
    setclassName(true);
  };

  const OnExistspolicies = () => {
    history.push(`/${company}/gmcexisting`);
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
    if (employeeNumber > 3) {
      setSelectMsg(false);
      setEmployees(`${Number(employeeNumber) - 1}`);
    } else {
      setSelectMsg(true);
    }
  };

  const inputempNumber = (event) => {
    let value = Number(event.target.value);
    if (value < 3 || value > 1000) {
      setSelectMsg(true);
    } else {
      setSelectMsg(false);
    }
    setEmployees(`${event.target.value}`);
  };

  const OnNextClick = () => {
    props.setEmployees(employeeNumber);
    props.jumpToStep(1);
  };
  return (
    <div>
      <div className="basic-details">
        <div className="detail-part">
          <h3>How do you plan to Protekts?</h3>

          <div
            onClick={Onfreshpolicies}
            className={"gmcpolicy" + (className ? " active-btn" : "")}
          >
            <b>Fresh Policy</b>
            <p>Insuring the employees first time!</p>
          </div>
          <div onClick={OnExistspolicies} className="gmcpolicy">
            <b>Renew Existing Policy</b>
            <p>Extending insurance for the employees!</p>
          </div>

          <div className="employeesNumber">
            <p>Total number of employees and dependents</p>
            <div className="empnumbers">
              <button onClick={decreaseNumber} className="minus-btn"></button>
              <input
                type="number"
                className="numberstring"
                onChange={inputempNumber}
                value={employeeNumber.toString()}
              />

              <button onClick={increaseNumber} className="plus-btn"></button>
            </div>
            {selectmsg ? (
              <p className="selectmsg">** Select between 3-1000 members</p>
            ) : null}
          </div>
        </div>
        <div className="gmc-picture">
          <img />
        </div>
      </div>
      <div className="btn-gmc-container">
        {/* <button className="draftbtn">Save as Draft</button> */}
        <button className="confirmbtn next-btn" onClick={OnNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};
export default BasicDetails;

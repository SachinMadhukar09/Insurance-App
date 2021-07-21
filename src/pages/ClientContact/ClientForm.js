import React, { useState } from "react";
import Configs from "../../configs/config";
import "./client.css";

const url = Configs.endpoint;

const ClientForm = () => {
  const [values, setValues] = useState({
    fullname: "",
    positionHeld: "",
    email: "",
    phone: "",
    companyType: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullname: "",
    positionHeld: "",
    email: "",
    phone: "",
    companyType: "",
    message: "",
  });
  const [submitmsg, setSubmitMsg] = useState({ color: "", msg: "" });

  const set = (fullname) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [fullname]: value }));
    };
  };

  const saveFormData = async () => {
    const response = await fetch(`${url}/client/clientLead`, {
      method: "POST",
      body: JSON.stringify(values),
    });
    if (response.status !== 200) {
      throw new Error(`Request failed: ${response.error}`);
    }
  };

  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;

    if (!values["fullname"]) {
      formIsValid = false;
      errors["fullname"] = "Cannot be empty";
    }

    if (typeof values["fullname"] !== "undefined") {
      if (!values["fullname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["fullname"] = "Only letters";
      }
    }

    if (!values["positionHeld"]) {
      formIsValid = false;
      errors["positionHeld"] = "Cannot be empty";
    }

    if (!values["phone"]) {
      formIsValid = false;
      errors["phone"] = "Cannot be empty";
    }

    if (!values["companyType"]) {
      formIsValid = false;
      errors["companyType"] = "Cannot be empty";
    }

    if (!values["message"]) {
      formIsValid = false;
      errors["message"] = "Cannot be empty";
    }

    if (!values["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof values["email"] !== "undefined") {
      let lastAtPos = values["email"].lastIndexOf("@");
      let lastDotPos = values["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          values["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          values["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    setErrors(errors);
    return formIsValid;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      if (handleValidation()) {
        await saveFormData();
        setValues({
          fullname: "",
          positionHeld: "",
          email: "",
          phone: "",
          companyType: "",
          message: "",
        });
        setSubmitMsg({ color: "green", msg: `Successfully Added Client Lead` });
      }
    } catch (e) {
      setSubmitMsg({ color: "red", msg: `${e.message}` });
    }
  };

  return (
    <div className="clientForm">
      <div class="work-with-us">
        <div class="form">
          {/* <h1>ADEPT</h1> */}
          <h2>Better Together</h2>
          <h2>Reach out and let's make something.</h2>
          <form>
            <label for="fullname">FIRST AND LAST NAME</label>
            <input
              id="fullname"
              type="text"
              fullname="firstfullname"
              value={values.fullname}
              onChange={set("fullname")}
            />
            <span style={{ color: "red" }}>{errors["fullname"]}</span>
            <label for="company-fullname">POSITION HELD</label>
            <input
              id="company-fullname"
              type="text"
              fullname="positionHeld"
              value={values.positionHeld}
              onChange={set("positionHeld")}
            />
            <span style={{ color: "red" }}>{errors["positionHeld"]}</span>
            <label for="work-email"> EMAIL</label>
            <input
              id="work-email"
              type="text"
              fullname="email"
              value={values.email}
              onChange={set("email")}
            />
            <span style={{ color: "red" }}>{errors["email"]}</span>
            <label for="work-phone"> PHONE</label>
            <input
              id="work-phone"
              type="text"
              fullname="phone"
              value={values.phone}
              onChange={set("phone")}
            />
            <span style={{ color: "red" }}>{errors["phone"]}</span>
            <label for="cars">Your Company Type:</label>

            <select
              style={{ padding: "0 10px", height: "50px", width: "100%" }}
              fullname="type"
              id="type"
              fullname="companyType"
              value={values.companyType}
              onChange={set("companyType")}
            >
              <option value="Cooperative Bank">Cooperative Bank</option>
              <option value="Retailer">Retailer</option>
              <option value="Cooperative Society">Cooperative Society </option>
              <option value="Association">Association</option>
              <option value="Employee Benefits">Employee Benefits</option>
              <option value="Insurance Company">Insurance Company</option>
              <option value="Housing Society">Housing Society</option>
              <option value="POSP">POSP</option>
              <option value="Aggregator">Aggregator</option>
            </select>
            <span style={{ color: "red" }}>{errors["companyType"]}</span>
            <label style={{ marginTop: "28px" }} for="project-idea">
              HOW CAN WE WORK TOGETHER
            </label>
            <textarea
              id="project-idea"
              rows="4"
              fullname="message"
              value={values.message}
              onChange={set("message")}
            ></textarea>
            <span style={{ color: "red" }}>{errors["message"]}</span>
            <button
              className="continue_btn view_quotes__btn"
              type="submit"
              onClick={onSubmit}
            >
              SUBMIT
            </button>
            <span style={{ color: submitmsg.color }}>{submitmsg.msg}</span>
          </form>
        </div>
        <div class="illustration">
          <img
            src="https://xpcover.com/assets/images/undraw-business-deal-cpi9.svg"
            alt="img"
          />
          <div class="link-rollup">
            <h2>Our Email</h2>
            <h1>Hello@xpcover.com</h1>
            <h2>Feature Us</h2>
            <h1>feature@adeptnfk.com</h1>
            <h2>Anything Else</h2>
            <h1>hello@adeptnfk.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientForm;

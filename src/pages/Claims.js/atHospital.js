import React, { useState } from "react";
import Configs from "../../configs/config";

function AtHospital() {
  const url = Configs.endpoint;
  const [values, setValues] = useState({
    cityname: "",
    patientName: "",
    attendingDoctor: "",
    phone: "",
    companyType: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    cityname: "",
    patientName: "",
    attendingDoctor: "",
    phone: "",
    companyType: "",
    message: "",
  });
  const [submitmsg, setSubmitMsg] = useState({ color: "", msg: "" });

  const set = (cityname) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [cityname]: value }));
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

    if (!values["cityname"]) {
      formIsValid = false;
      errors["cityname"] = "Cannot be empty";
    }

    if (typeof values["cityname"] !== "undefined") {
      if (!values["cityname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["cityname"] = "Only letters";
      }
    }

    if (!values["patientName"]) {
      formIsValid = false;
      errors["patientName"] = "Cannot be empty";
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

    if (!values["attendingDoctor"]) {
      formIsValid = false;
      errors["attendingDoctor"] = "Cannot be empty";
    }

    if (typeof values["attendingDoctor"] !== "undefined") {
      let lastAtPos = values["attendingDoctor"].lastIndexOf("@");
      let lastDotPos = values["attendingDoctor"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          values["attendingDoctor"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          values["attendingDoctor"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["attendingDoctor"] = "attendingDoctor is not valid";
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
          cityname: "",
          patientName: "",
          attendingDoctor: "",
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
    <div class="form">
      <form>
        <label for="cityname">City</label>
        <input
          id="cityname"
          type="text"
          cityname="firstcityname"
          value={values.cityname}
          onChange={set("cityname")}
        />
        <span style={{ color: "red" }}>{errors["cityname"]}</span>
        <label for="company-cityname">Patient Name</label>
        <input
          id="company-cityname"
          type="text"
          cityname="patientName"
          value={values.patientName}
          onChange={set("patientName")}
        />
        <span style={{ color: "red" }}>{errors["patientName"]}</span>
        <label for="cars">Relationship with Proposer</label>

        <select
          style={{ padding: "0 10px", height: "50px", width: "100%" }}
          cityname="type"
          id="type"
          cityname="companyType"
          value={values.companyType}
          onChange={set("companyType")}
        >
          <option value="Cooperative Bank">Cooperative Bank</option>
          <option value="Retailer">Retailer</option>
          <option value="Cooperative Society">Cooperative Society </option>
          <option value="Association">Association</option>
        </select>
        <span style={{ color: "red" }}>{errors["companyType"]}</span>
        <label for="work-attendingDoctor" style={{ marginTop: "30px" }}>
          {" "}
          Name Of Attending Doctor
        </label>
        <input
          id="work-attendingDoctor"
          type="text"
          //   cityname="email"
          value={values.email}
          onChange={set("email")}
        />
        <span style={{ color: "red" }}>{errors["email"]}</span>
        <label for="work-phone"> Nature of Illness/Injury</label>
        <input
          id="work-phone"
          type="text"
          cityname="phone"
          value={values.phone}
          onChange={set("phone")}
        />
        <span style={{ color: "red" }}>{errors["phone"]}</span>
        <label for="work-phone"> Date of Admission</label>
        <input
          id="work-phone"
          type="date"
          cityname="phone"
          value={values.phone}
          onChange={set("phone")}
        />
        <span style={{ color: "red" }}>{errors["phone"]}</span>
        <label for="work-phone"> Expected Length of Stay</label>
        <input
          id="work-phone"
          type="text"
          cityname="phone"
          value={values.phone}
          onChange={set("phone")}
        />
        <span style={{ color: "red" }}>{errors["phone"]}</span>
        <label for="work-phone"> Expected Hospital Bill </label>
        <input
          id="work-phone"
          type="text"
          cityname="phone"
          value={values.phone}
          onChange={set("phone")}
        />
        <span style={{ color: "red" }}>{errors["phone"]}</span>

        <label style={{ marginTop: "28px" }} for="project-idea">
          Additonal Details
        </label>
        <textarea
          id="project-idea"
          rows="4"
          cityname="message"
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
  );
}

export default AtHospital;

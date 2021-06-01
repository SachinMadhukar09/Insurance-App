import React, { Component, useState, useEffect } from "react";
import "./main.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./logic/actions/actions";

import axios from 'axios';
import Configs from "./configs/config";
import moment from "moment";

const url = Configs.endpoint;

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [loading, setloading] = React.useState(false);
  const [reqotp, setReqotp] = React.useState(false);
  const [phone, setPhone] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [name, setName] = React.useState("");
  const [errormsg, seterrormsg] = React.useState("");
  const [successmsg, setSuccessMsg] = React.useState("");
  const [otp, setOtp] = React.useState("");
  // const [counter, setOtpTime] = React.useState(0);

  const userName = useSelector((state) => state.user.username);
  const loggedIn = useSelector((state) => state.user.loggedIn);

  React.useEffect(() => {
    console.log("logIn---", loggedIn);
    /* check token and refresh user after login */
    if (loggedIn) {
      history.push("/dashboard", { username: userName });
    }
  }, []);

  // React.useEffect(() => {
  //   counter > 0 && setTimeout(() => setOtpTime(counter - 1), 1000);
  // }, [counter]);

  const handleChange = (event) => {
    if (event.target.name == "mobile") {
      setPhone(event.target.value);
    }
    if (event.target.name == "otp") {
      setOtp(event.target.value);
    }
    seterrormsg("");
    // setSuccessMsg("");
  };


  const getGeoInfo = () => {
    axios.get('https://ipapi.co/json/').then((response) => {
      let data = response.data;
      setCountryCode(data.country_calling_code);
    }).catch((error) => {
      seterrormsg(error.message);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setloading(true);
    let isValid = true;
    console.log("phone----", phone);
    if (!phone) {
      isValid = false;
      seterrormsg("Please enter your mobile number");
      setloading(false);
    }
    if (phone) {
      let pattern = new RegExp(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      );
      if (!pattern.test(phone)) {
        isValid = false;
        seterrormsg("Please enter valid phone number");
        setloading(false);
      } else if (phone.length != 10) {
        isValid = false;
        seterrormsg("Please enter valid phone number");
        setloading(false);
      }
    }
    if (isValid) {
      try {
        console.log('response---', JSON.stringify({ phone: phone, countryCode: countryCode, companyName: companyName }))
        await getGeoInfo();
        const response = await axios.post(
          `${url}/customer/login`,
          { phone: phone, countryCode: countryCode, companyName: companyName }
        )
        let time = moment().format("YYYY-MM-DDTHH:mm:00.000") + 'z';
        console.log("response---", response, time, response.data.expireAt)
        if (response) {
          // setOtpTime(130)
          setloading(false)
          setReqotp(true)
          // setSuccessMsg(response.data.message);
        }
      } catch (err) {
        setloading(false);
        console.log('errrprr--', err.response.data.error)
        seterrormsg(err.response.data.error);
      }
    }
  };

  const resendOTP = async () => {
    try {
      console.log('response---', JSON.stringify({ phone: phone, countryCode: countryCode, companyName: companyName }))
      await getGeoInfo();
      const response = await axios.post(
        `${url}/customer/login`,
        { phone: phone, countryCode: countryCode, companyName: companyName }
      )
      console.log("response---", response)
      if (response) {
        // setOtpTime(50)
        setloading(false)
        setReqotp(true)
        // setSuccessMsg(response.data.message);
      }
    } catch (err) {
      setloading(false);
      console.log('errrprr--', err.response.data.error)
      seterrormsg(err.response.data.error);
    }
  }

  const handleOtpSub = async (event) => {
    event.preventDefault();
    setloading(true);

    if (!otp) {
      seterrormsg("Please enter your OTP");
      setloading(false);
    } else {
      try {
        const response = await axios.post(
          `${url}/customer/otp/verify`,
          { phone: phone, verificationCode: otp }
        )
        if (response) {
          localStorage.setItem("token", response.data.token)
          dispatch(login({ username: name }));
          history.push("/dashboard", { username: name });
          setloading(false);
        }
      } catch (error) {
        seterrormsg("Please enter valid OTP");
        setloading(false)
        console.error(error);
      }
    }
  };

  if (reqotp) {
    return (
      <div className="login-wrapper">
        <div className="login-container">
          <div className="logo-center">
            <a href="/">
              <img
                alt="XPcover.com"
                data-cms-attr="src:logo_src"
                src="https://xpcover.com/assets/images/logo1.png"
              />
            </a>
          </div>
          <div className="form-wrapper">
            <form className="login-form">
              <label>Enter mobile OTP</label>
              <input
                type="input"
                placeholder="OTP"
                name="otp"
                value={otp}
                className="mobile-input"
                onChange={handleChange}
              />
              {errormsg ? <div className="text-danger">{errormsg}</div> : null}
              {/* <Link to="/vehicle-details">
                <div className="login-submit">
                  {loading ? "Please wait..." : "confirm otp"}
                </div>
              </Link> */}
              <button
                type="submit"
                className="login-submit"
                onClick={handleOtpSub}
              >
                {loading ? "Please wait..." : "Sign in with otp"}
              </button>
            </form>
            {/* <div>Resend Again - {counter}</div>
            {
              (!counter) ? <div onClick={resendOTP}>resend</div> : null
            } */}
            {successmsg ? <div className="text-success">{successmsg}</div> : null}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="login-wrapper">
        <div className="login-container">
          <div className="logo-center">
            <a href="/">
              <img
                alt="XPcover.com"
                data-cms-attr="src:logo_src"
                src="https://xpcover.com/assets/images/logo1.png"
              />
            </a>
          </div>
          <div className="form-wrapper">
            <form className="login-form">
              <label>Enter your Mobile</label>
              <input
                type="input"
                placeholder="mobile"
                name="mobile"
                value={phone}
                className="mobile-input"
                onChange={handleChange}
              />
              {errormsg ? <div className="text-danger">{errormsg}</div> : null}

              <button
                type="submit"
                className="login-submit"
                onClick={handleSubmit}
              >
                {loading ? "Please wait..." : "Sign in with otp"}
              </button>
            </form>
            {successmsg ? <div className="text-success">{successmsg}</div> : null}
          </div>
        </div>
      </div>
    );
  }
};

export default Login;

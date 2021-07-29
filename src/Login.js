import React, { Component, useState, useEffect } from "react";
import "./main.css";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./logic/actions/actions";

import axios from "axios";
import Configs from "./configs/config";
import moment from "moment";
// import firebase from "firebase/app";
import firebase from "./firebase";
// const fire = require("./firebase");

const url = Configs.endpoint;

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { company } = useParams();
  if (!company) {
    company = localStorage.getItem("company");
  }
  const [loading, setloading] = React.useState(false);
  const [reqotp, setReqotp] = React.useState(false);
  const [phone, setPhone] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [errormsg, seterrormsg] = React.useState("");
  const [successmsg, setSuccessMsg] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [confirmationResult, setConfirmationResult] = React.useState(undefined);

  const userName = useSelector((state) => state.user.username);
  const loggedIn = useSelector((state) => state.user.loggedIn);

  const checkuser = () => {
    if (loggedIn) {
      history.push(`${company}/dashboard`, { username: userName });
    } else {
      getGeoInfo();
    }
  };
  React.useEffect(() => {
    checkuser();
  }, []);

  const handleChange = (event) => {
    if (event.target.name == "mobile") {
      setPhone(event.target.value);
    }
    if (event.target.name == "otp") {
      setOtp(event.target.value);
    }
    seterrormsg("");
    setSuccessMsg("");
  };

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setCountryCode(data.country_calling_code);
      })
      .catch((error) => {
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
        const phoneNumber = countryCode + phone;
        let appVerifier = new firebase.auth.RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {
              console.log("captcha resolved----", response);
            },
          }
        );
        firebase
          .auth()
          .signInWithPhoneNumber(phoneNumber, appVerifier)
          .then(function (confirmationResult) {
            setReqotp(true);
            setConfirmationResult(confirmationResult);
            setloading(false);
            setPhone("");
            seterrormsg("");
            setSuccessMsg("OTP has been sent to your mobile number");
          })
          .catch(function (error) {
            console.log("error---", error);
            setloading(false);
            seterrormsg(error.message);
          });
      } catch (err) {
        setloading(false);
        console.log("errrprr--", err);
        seterrormsg(err.message);
      }
    }
  };

  const resendOTP = async () => {
    try {
      await getGeoInfo();
      const response = await axios.post(`${url}/customer/login`, {
        phone: phone,
        countryCode: countryCode,
        companyName: companyName,
      });
    
      if (response) {
       
        setloading(false);
        setReqotp(true);
        
      }
    } catch (err) {
      setloading(false);
      console.log("errrprr--", err.response.data.error);
      seterrormsg(err.response.data.error);
    }
  };

  const handleOtpSub = async (event) => {
    event.preventDefault();
    setloading(true);

    if (!otp) {
      seterrormsg("Please enter your OTP");
      setloading(false);
    } else {
      try {
        let code = otp;
        confirmationResult
          .confirm(code)
          .then((result) => {
          
            const user = result.user.displayName;
            let token = result.user.refreshToken;
            localStorage.setItem("token", token);
            localStorage.setItem("username", user);
            dispatch(login({ username: user }));
            history.push(`${company}/dashboard`, { username: user });
            setloading(false);
          })
          .catch((error) => {
            setloading(false);
            seterrormsg(error.message);
          });
      } catch (error) {
        seterrormsg("Please enter valid OTP");
        setloading(false);
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
             
              <button
                type="submit"
                className="login-submit"
                id=""
                onClick={handleOtpSub}
              >
                {loading ? "Please wait..." : "Sign in with otp"}
              </button>
            </form>
           
            {successmsg ? (
              <div className="text-success">{successmsg}</div>
            ) : null}
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
            {successmsg ? (
              <div className="text-success">{successmsg}</div>
            ) : null}
          </div>
        </div>
        <div id="recaptcha-container"></div>
      </div>
    );
  }
};

export default Login;

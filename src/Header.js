import React, { Component, useState } from "react";
import "./main.css";
import loginIcon from "./Assets/svg/mbri-login.svg";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./logic/actions/actions";
import bellIcon from "./Assets/svg/bell.png";
import logoImg from "./Assets/svg/logo1.svg";
import { useLocation } from "react-router-dom";


const Header = () => {
  const { pathname } = useLocation();

  const loggedIn = useSelector((state) => state.user.loggedIn);
  const [className, setclassName] = React.useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const Logoutuser = () => {
    localStorage.clear();
    dispatch(logout());
    history.push("/");
  };

  console.log("location--", window.location.pathname);
  if (pathname === "/user-login/") {
    return (
      <div className="header-wrapper">
        <div className="main-header">
          <div className="logo">
            <a href="/">
              <img
                alt="XPcover.com"
                data-cms-attr="src:logo_src"
                src={logoImg}
              />
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header-wrapper header-wrapper--transparent navbar">
        <div className="main-header">
          <div
            onClick={() => setclassName(!className)}
            class="menu-toggle"
            className={className ? "menu-toggle is-active" : "menu-toggle"}
            id="mobile-menu"
          >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <div className="logo">
            <a href="/">
              <img
                alt="XPcover.com"
                data-cms-attr="src:logo_src"
                src={logoImg}
              />
            </a>
          </div>

          <ul
            className={
              className
                ? "nav-items-left hidden-xs header-ver2 mobile-nav"
                : "nav-items-left hidden-xs header-ver2"
            }
          >
            <li className="nav-item-drodown" style={{ margin: "7px 44px" }}>
              <a className="open-claim-form" href="/submit-claim-request/">
                Renew your policy
              </a>
            </li>
            <li className="nav-item-dropdown">
              <span>Insurance</span>
              <span className="menu-dropdown-font"></span>
              <ul className="nav-list">
                <li className="nav-sub-menu-item-dropdown">
                  <a id="mohrefr-href-product">Car</a>
                  <span className="menu-dropdown-font"></span>

                  <ul className="nav-list">
                    <li>
                      <a href="/carInsurance/">Car Insurance</a>
                    </li>
                    <li>
                      <a href="/car-insurance/companies/">Companies</a>
                    </li>
                    <li>
                      <a href="/car-insurance/third-party-car-insurance/">
                        Third party car insurance
                      </a>
                    </li>
                    <li>
                      <a href="/car-insurance/comprehensive-car-insurance/">
                        Comprehensive car insurance
                      </a>
                    </li>
                    <li>
                      <a href="/car-insurance/car-insurance-premium-calculahrefr/">
                        Car insurance calculahrefr
                      </a>
                    </li>
                    <li>
                      <a href="/car-insurance/new/">New car insurance</a>
                    </li>
                    <li>
                      <a href="/car-insurance/zero-depreciation/">
                        Zero Dep Car Insurance
                      </a>
                    </li>
                    <li>
                      <a href="/car-insurance/buy-car-insurance/">
                        Buy Car Insurance
                      </a>
                    </li>
                    <li>
                      <a href="/car-insurance/compare-car-insurance-online/">
                        Compare Car Insurance
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-sub-menu-item-dropdown">
                  <a id="two-wheeler-insurance">Bike</a>
                  <span className="menu-dropdown-font"></span>
                  <ul className="nav-list">
                    <li>
                      <a href="/bike-insurance/">Bike Insurance</a>
                    </li>
                    <li>
                      <a href="/two-wheeler-insurance/">
                        Two Wheeler Insurance
                      </a>
                    </li>
                    <li>
                      <a href="/two-wheeler-insurance/companies/">Companies</a>
                    </li>
                    <li>
                      <a href="/two-wheeler-insurance/two-wheeler-insurance-claim/">
                        Two Wheeler Insurance Claim
                      </a>
                    </li>
                    <li>
                      <a href="/two-wheeler-insurance/two-wheeler-insurance-premium-calculahrefr/">
                        Two Wheeler premium Calculahrefr
                      </a>
                    </li>
                    <li>
                      <a href="/two-wheeler-insurance/third-party-two-wheeler-insurance/">
                        Third party Bike insurance
                      </a>
                    </li>
                    <li>
                      <a href="/two-wheeler-insurance/companies/">
                        Best Bike Insurance Companies
                      </a>
                    </li>
                    <li>
                      <a href="/two-wheeler-insurance/multiyear-bike-insurance/">
                        Multiyear Bike Insurance
                      </a>
                    </li>
                    <li>
                      <a href="/bike-insurance/buy-bike-insurance/">
                        Buy Bike Insurance
                      </a>
                    </li>
                    <li>
                      <a href="/bike-insurance/compare-bike-insurance/">
                        Compare Bike Insurance
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-sub-menu-item-dropdown">
                  <a id="health-href-product">Health</a>
                  <span className="menu-dropdown-font"></span>
                  <ul className="nav-list">
                    <li>
                      <a href="/health-insurance/">Health Insurance</a>
                    </li>
                    <li>
                      <a href="/health-insurance/companies/">Companies</a>
                    </li>
                    <li>
                      <a href="/health-insurance/mediclaim-policy/">
                        Mediclaim Policy
                      </a>
                    </li>
                    <li>
                      <a href="/health-insurance/individual-health-insurance/">
                        Individual Health Insurance plans
                      </a>
                    </li>
                    <li>
                      <a href="/health-insurance/critical-illness-insurance/">
                        Critical illness insurance
                      </a>
                    </li>
                    <li>
                      <a href="/health-insurance/senior-citizens-health-insurance/">
                        Senior citizen health insurance
                      </a>
                    </li>
                    <li>
                      <a href="/health-insurance/arogya-sanjeevani-policy/">
                        Arogya sanjeevani policy
                      </a>
                    </li>
                    <li>
                      <a href="/health-insurance/buy-health-insurance/">
                        Buy Health Insurance
                      </a>
                    </li>
                    <li>
                      <a href="/health-insurance/health-insurance-comparison/">
                        Compare Health Insurance
                      </a>
                    </li>
                    <li>
                      <a href="/covid-plan/">Coronavirus Health insurance</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-sub-menu-item-dropdown">
                  <a id="term-href-product">Term</a>
                  <span className="menu-dropdown-font"></span>
                  <ul className="nav-list">
                    <li>
                      <a href="/features-of-term-insurance-plan/">
                        Term Insurance
                      </a>
                    </li>
                    <li>
                      <a href="/term-insurance-companies/">Companies</a>
                    </li>
                    <li>
                      <a href="/life-insurance/">Life Insurance</a>
                    </li>
                    <li>
                      <a href="/life-insurance-calculahrefr/">
                        Life Insurance Calculahrefr
                      </a>
                    </li>
                    <li>
                      <a href="/term-insurance-calculahrefr/">
                        Term Insurance Calculahrefr
                      </a>
                    </li>
                    <li>
                      <a href="/life-insurance-plans/">Life Insurance Plans</a>
                    </li>
                    <li>
                      <a href="/life-insurance/term-insurance/articles/1-crore-term-insurance/">
                        1 crore term insurance
                      </a>
                    </li>
                    <li>
                      <a href="/term-insurance-comparison/">
                        Compare Term Insurance
                      </a>
                    </li>
                    <li>
                      <a href="/term-insurance/buy-term-insurance/">
                        Buy Term Insurance
                      </a>
                    </li>
                    <li>
                      <a href="/term-insurance-renewals/">
                        Term Insurance Renewals
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-sub-menu-item-dropdown">
                  <a id="ulip-href-product">Investment</a>
                  <span className="menu-dropdown-font"></span>
                  <ul className="nav-list">
                    <li>
                      <a href="/life-insurance/investment-plans/">
                        Investment Plans
                      </a>
                    </li>
                    <li>
                      <a href="/life-insurance/life-insurance-companies/">
                        Companies
                      </a>
                    </li>
                    <li>
                      <a href="/investment-plans/">Buy Investment Plans</a>
                    </li>
                    <li>
                      <a href="/life-insurance/child-plan/">Child Plans</a>
                    </li>
                    <li>
                      <a href="/life-insurance/pension-plans/">Pension Plans</a>
                    </li>
                    <li>
                      <a href="/life-insurance/ulip-plans/">ULIP</a>
                    </li>
                    <li>
                      <a href="/life-insurance/endowment-plan/">
                        Endowment Policy
                      </a>
                    </li>
                    <li>
                      <a href="/life-insurance/investment-plans/best-tax-saving-investment-options/">
                        Tax saving investment
                      </a>
                    </li>
                    <li>
                      <a href="/life-insurance/ulip-plans/buy-ulip-plans/">
                        Buy ULIP
                      </a>
                    </li>
                    <li>
                      <a href="/life-insurance/ulip-plans/best-ulip-plans/">
                        Best ULIP
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item-dropdown">
              <span>About XPcover</span>
              <span className="menu-dropdown-font"></span>
              <ul className="nav-list">
                <li className="sub-menu-selected">
                  <a href="/about/">About us</a>
                </li>

                <li className="sub-menu-selected">
                  <a href="/articles/">Insurance Blog</a>
                </li>
              </ul>
            </li>
            <li className="nav-item-dropdown">
              <a className="open-claim-form" href="/submit-claim-request/">
                Claims
              </a>
            </li>
          </ul>
          <ul className="nav-items-right">
            <li className="hidden-xs">
              {loggedIn ?
                <a className="open-contact-form" href="/notifications/">
                  {/* for icon of notifications */}
                  <img src={bellIcon} className="bellicon" />
                </a> :
                <a className="open-contact-form" href="/contact/">
                  Contact us
                </a>
              }
            </li>
            <li style={{ display: "flex" }}>
              {loggedIn ? (
                <button className="open-login-form" onClick={Logoutuser}>
                  <object
                    type="image/svg+xml"
                    className="svgicon"
                    data={loginIcon}
                  >
                    SVGs aren't supported.
                  </object>
                  {/* <img src={loginIcon} alt="icon" className="a-icon" /> */}
                  Logout
                </button>
              ) : (
                <a className="open-login-form" href="/user-login/">
                  <object
                    type="image/svg+xml"
                    className="svgicon"
                    data={loginIcon}
                  >
                    SVGs aren't supported.
                  </object>
                  Login
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Header;

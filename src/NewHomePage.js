import React from "react";
import "./Home.css";
import HealthIcon from "./Assets/svg/Health_Insurance.svg";
import TwoWheelerIcon from "./Assets/svg/2wheeler-insurance.svg";
import CarIcon from "./Assets/svg/car.svg";
import ChildInvestIcon from "./Assets/svg/Child-Investment.svg";
import FamilyIcon from "./Assets/svg/Family_health_insurance.svg";
import HeartIcon from "./Assets/svg/heart-insurance.svg";
import InvestmentIcon from "./Assets/svg/investment-plans.svg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./Animations.css";
import axios from "axios";
import Configs from "./configs/config";

const url = Configs.endpoint;

const NewHomePage = (props) => {
  console.log(props);
  const [products, setProducts] = React.useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(`${url}/insurance/getInsuranceProduct`);
      console.log("response--", response, response.data.products);
      if (response) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log("something went wrong:", error.response.data);
    }
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  const renderComponent = (product) => {
    let path;
    console.log("path------>". path)
    switch (product) {
      case "Car Insurance":
        path = "/vehicle-details";
        break;

      case "Health Insurance":
        path = "/vehicle-details";
        break;

      case "2 Wheeler Insurance":
        path = "/vehicle-details";
        break;

      case "Child Savings Plan":
        path = "/vehicle-details";
        break;

      case "Family Health Insurance":
        path = "/housing-society";
        break;

      case "Investment Plans":
        path = "/vehicle-details";
        break;

      case "Heart Insurance":
        path = "/vehicle-details";
        break;

      case "Group Protection":
        path = "/vehicle-details";
        break;

      default:
        path = "/";
        break;
    }
    
    props.props.history.push(path);
  };

  return (
    <div>
      <section>
        <div className="top-banner">
          <div>
            <h1 className="top-text">
              Let's find you
              <br /> the <span style={{ fontWeight: 500 }}>Best Insurance</span>
            </h1>
            <div>
              <div className="lowest_price">
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/758/758930.svg?token=exp=1620478001~hmac=85d495decb12c913ed090b5f4824295a"
                  alt=""
                  style={{ width: "27px", marginRight: "12px" }}
                />
                50+ insurers with the lowest prices
              </div>
              <div className="hassle_free">
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/819/819398.svg?token=exp=1620477723~hmac=c2fdbf699e4da7a69ca7701a07d691c8"
                  alt=""
                  style={{ width: "27px", marginRight: "12px" }}
                />
                Quick, easy & hassle free
              </div>
            </div>
          </div>
          <div>
            <h4 className="promise-text">XPC Promise</h4>
            <div>
              <h1 className="mid-text">
                A commitment <br /> to our customers
              </h1>
            </div>
            <div className="button_knowMOre">Know More</div>
          </div>
        </div>
      </section>
      <section
        style={{
          background: "white",
          height: "350px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="product-section">
          {/* <div className="product_card">
            <div className="card_icon">
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/3026/3026399.svg?token=exp=1620474619~hmac=22dda1a9d795cea383008b53a3b2a653"
                alt=""
                style={{ width: "34px" }}
              />
            </div>
            <div className="product_title">Term Life Insurance</div>
          </div>  */}
          {products.map((product) => (
            <div onClick={renderComponent} className="product_card">
              <img
                src={product.product_icon}
                alt=""
                style={{ width: "34px" }}
              />
              
              <div className="product_title">{product.product_name}</div>
            </div>
          ))}

          {/* <div className="product_card">
            <img src={HealthIcon} alt="" style={{ width: "34px" }} />
            <div className="product_title">Investment Plans</div>
          </div>
          <div
            onClick={() => props.props.history.push("/vehicle-details")}
            className="product_card"
          >
            <img src={CarIcon} alt="" style={{ width: "34px" }} />
            <div className="product_title">Car Insurance</div>
          </div>
          <div className="product_card">
            <img src={TwoWheelerIcon} alt="" style={{ width: "34px" }} />
            <div className="product_title">2 Wheeler Insurance</div>
          </div> */}
          {/* <div className="product_card">
            <div className="card_icon">
              <img src={ChildInvestIcon} alt="" style={{ width: "34px" }} />
            </div>
            <div className="product_title">Child Savings Plan</div>
          </div> */}
          {/* <div className="product_card">
            <img src={FamilyIcon} alt="" style={{ width: "34px" }} />
            <div className="product_title">Family Health Insurance</div>
          </div> */}
          {/* <div className="product_card">
            <img src={InvestmentIcon} alt="" style={{ width: "34px" }} />
            <div className="product_title">Investment Plans</div>
          </div> */}
          {/* <div
            onClick={() => props.props.history.push("/housing-society")}
            className="product_card"
          >
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/602/602226.svg?token=exp=1620992219~hmac=6ed953d7a7397f9484f11b078b6e336e"
              alt=""
              style={{ width: "34px" }}
            />
            <div className="product_title">Housing Society Insurance</div>
          </div> */}
          {/* <div className="product_card">
            <img
              src="https://www.flaticon.com/premium-icon/icons/svg/1768/1768201.svg"
              alt=""
              style={{ width: "34px" }}
            />
            <div className="product_title">2 Wheeler Insurance</div>
          </div> */}
          {/* <div
            className="product_card"
            onClick={() => props.props.history.push("/vehicle-details")}
          >
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/3089/3089803.svg?token=exp=1620474738~hmac=c767972e5e1ba96e5054d723343b913a"
              alt=""
              style={{ width: "34px" }}
            />
            <div className="product_title">Car Insurance</div>
          </div> */}
          {/* <div className="product_card">
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/3089/3089803.svg?token=exp=1620474738~hmac=c767972e5e1ba96e5054d723343b913a"
              alt=""
              style={{ width: "34px" }}
            />
            <div className="product_title">Car Insurance</div>
          </div> */}
          {/* <div className="product_card">
          <div className="card_icon">icon</div>
          <div className="product_title">Car Insurance</div>
        </div>
        <div className="product_card">
          <div className="card_icon">icon</div>
          <div className="product_title">2 Wheeler Insurance</div>
        </div> */}
        </div>
      </section>

      <div className="irdai-divider-container">
        <div className="lined-title">
          <hr></hr>
          <div className="lined-title__text">LICENSED BY IRDAI</div>
        </div>
        <div className="idc-desc">
          <img
            alt="Licensed By IRDAI"
            className="snil-content__irdai__img"
            loading="lazy"
            src="https://assets.coverfox.com/static/homepage/irdai_logo.71eabac56ba7.png"
          />
          <div className="idc-desc__info">
            <div>
              <span>IRDA Direct Broker Code: </span> IRDA/ DB 556/ 13{" "}
            </div>
            <div>
              <span>CIN: </span> U66000MH2013PTC243810{" "}
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
      <section className="cf-section cf-section--15 mt-100">
        <div className="container">
          <h3 className="text-center cf-section__heading cf-section__heading--lg text-center">
            The XPcover Advantage
          </h3>
          <ul className="lcra__timeline-list ">
            <li>SIMPLE</li>
            <li>FAST</li>
            <li>RELIABLE</li>
            <li>SECURE</li>
          </ul>
          <div
            style={{ display: "flex" }}
            className="row comparequotes animate"
          >
            <div className="col-md-6">
              <ScrollAnimation
                animateOnce={true}
                duration={0.4}
                animateIn="slide-in-left"
              >
                <div className="cf-section__label space_mb_8">SIMPLE</div>
                <h3 className="cf-section__heading space_mb_16 line-height-reset">
                  Easiest way to get insured
                </h3>
                <div className="cf-section__info space_mb_24">
                  {" "}
                  Our algorithms do all the hard work for you, read between the
                  lines, decode the terms and conditions, and make the purchase
                  of insurance policy a cake walk for you.
                </div>
                <ul className="lcra__features-list">
                  <li>
                    Plans explained in plain English. No research required.
                  </li>
                  <li>The process is completely online.</li>
                  <li>Unbiased advice. Exceptional Experience.</li>
                </ul>
              </ScrollAnimation>
            </div>

            <div className="col-md-6">
              <ScrollAnimation
                animateOnce={true}
                duration={0.6}
                animateIn="slide-in-right"
              >
                <img
                  alt=""
                  className="lcra__img img-responsive"
                  loading="lazy"
                  src="https://assets.coverfox.com/static/img/illustrates/compare_illustrations.246b66a9cbf2.svg"
                />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      <div>
        <section className="cf-section cf-section--26 cf-section--alter bg-blue">
          <div className="container">
            <div
              style={{ display: "flex" }}
              className="row instantpayment animate"
            >
              <div className="col-md-6">
                <ScrollAnimation
                  animateOnce={true}
                  duration={0.4}
                  animateIn="slide-in-left"
                >
                  <img
                    alt=""
                    className="rcla__img img-responsive"
                    loading="lazy"
                    src="https://assets.coverfox.com/static/img/illustrates/instant_inbox_illustrations.74f1dc1ac504.svg"
                  />
                </ScrollAnimation>
              </div>
              <div className="col-md-6">
                <ScrollAnimation
                  animateOnce={true}
                  duration={0.6}
                  animateIn="slide-in-right"
                >
                  <div className="cf-section__label space_mb_8">FAST</div>
                  <h3 className="cf-section__heading space_mb_16 line-height-reset">
                    Quick, Hassle Free Buying
                  </h3>
                  <div className="cf-section__info space_mb_24">
                    {" "}
                    Insurance buying process was never this easy. Get your
                    insurance policy in your inbox within minutes &amp; save
                    money while you're at it!
                  </div>
                  <ul className="rcla__features-list">
                    <li>Get quotes from top insurers instantly.</li>
                    <li>
                      Compare plans. Save money by selecting the best plan.
                    </li>
                    <li>
                      Use any online payment method and get policy instantly.
                    </li>
                  </ul>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="cf-section cf-section--30">
          <div className="container">
            <div className="row claimsassistance animate">
              <div className="col-md-6">
                <ScrollAnimation
                  animateOnce={true}
                  duration={0.8}
                  animateIn="fade-in"
                >
                  <div className="cf-section__label space_mb_8">RELIABLE</div>
                  <h3 className="cf-section__heading space_mb_16 line-height-reset">
                    Claims Assistance
                  </h3>
                  <div className="cf-section__info space_mb_32">
                    Our expert claims support team sets us apart. If you need a
                    claim settled, they will fight for you with our partner
                    insurers till the rightful judgement is passed. We are a
                    bunch of humans who care for their customers a lot.
                  </div>
                  <div className="video-thumbnail-testimonial">
                    <div className="video-thumbnail-testimonial__title">
                      WHAT ARE PEOPLE SAYING
                    </div>
                    <hr></hr>
                    <div className="video-thumbnail-testimonial__persona">
                      Ramachandran D
                      <img
                        alt="full star"
                        className="video-thumbnail-testimonial__star-img"
                        src="https://assets.coverfox.com/static/img/icons/ic_star__full.03a6db963f82.svg"
                      />
                      <img
                        alt="full star"
                        className="video-thumbnail-testimonial__star-img"
                        src="https://assets.coverfox.com/static/img/icons/ic_star__full.03a6db963f82.svg"
                      />
                      <img
                        alt="full star"
                        className="video-thumbnail-testimonial__star-img"
                        src="https://assets.coverfox.com/static/img/icons/ic_star__full.03a6db963f82.svg"
                      />
                      <img
                        alt="full star"
                        className="video-thumbnail-testimonial__star-img"
                        src="https://assets.coverfox.com/static/img/icons/ic_star__full.03a6db963f82.svg"
                      />
                    </div>
                    <div className="video-thumbnail-testimonial__testimony">
                      "My first experience with XPcover was an absolute delight.
                      Their
                      <br /> positive response and effective actions changed my
                      opinion of
                      <br /> the entire insurance segment. Hope they keep it
                      up!"
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="cf-section cf-section--26 cf-section--alter">
          <div className="container">
            <div
              style={{ display: "flex" }}
              className="row instantpayment animate"
            >
              <div className="col-md-6">
                <ScrollAnimation
                  animateOnce={true}
                  duration={0.6}
                  animateIn="slide-in-right"
                >
                  <img
                    alt=""
                    className="rcla__img img-responsive"
                    loading="lazy"
                    src="https://assets.coverfox.com/static/img/illustrates/data_security_illustrations.ccc8bcc5fc11.png"
                  />
                </ScrollAnimation>
              </div>
              <div className="col-md-6">
                <ScrollAnimation
                  animateOnce={true}
                  duration={0.4}
                  animateIn="slide-in-left"
                >
                  <div className="cf-section__label space_mb_8">SECURE</div>
                  <h3 className="cf-section__heading space_mb_16 line-height-reset">
                    Data Security <br /> Guaranteed
                  </h3>
                  <div className="cf-section__info space_mb_24">
                    Your data is private and stored in govt. approved data
                    centers. We don't sell it to anyone, nor will we ever share
                    it without your consent.{" "}
                  </div>
                  <ul className="rcla__features-list">
                    <li>Data stored in ISO certified data centers only.</li>
                    <li>
                      Our data centers are PCI-DSS, HIPAA/HITECH compliant.
                    </li>
                  </ul>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="nap-and-exclaim space_mb_24 space_mt_60">
          <div className="container">
            <div className="cf-section__label text-center">JUST FOR YOU</div>
            <h4 className="cf-section__heading text-center space_mb_60 line-height-reset">
              XPcover Exclusive Services
            </h4>
            <div style={{ display: "flex" }} className="row">
              <div className="col-md-6">
                <ScrollAnimation
                  animateOnce={true}
                  duration={1}
                  animateIn="fade-in"
                >
                  <div className="saf-content__right saf-content--yellow">
                    <div className="saf-fb">
                      <div className="saf-fb__free">FREE</div>
                      <div className="saf-fb__heading">
                        <div className="saf-fb__heading__icon">
                          <img
                            alt="3-Day Express Claims Service"
                            loading="lazy"
                            src="https://assets.coverfox.com/static/img/icons/ic_expres-claims.d26f8c8d8f34.svg"
                          />
                        </div>
                        <div className="saf-fb__heading__text">
                          <div className="saf-fb__heading__text__title">
                            3-Day Express Claims Service
                          </div>
                          <div className="saf-fb__heading__text__subtitle">
                            For Car Insurance Customers
                          </div>
                        </div>
                      </div>
                      <div className="saf-fb__features">
                        <div className="saf-fb__features__title">
                          FEATURES :
                        </div>
                        <ul className="saf-fb__features__list">
                          <li>We service your claim in 3 day or less</li>
                          <li>
                            We pick your car, get it repaired &amp; drop it back
                          </li>
                          <li>
                            Repairs, paper-work &amp; payments - we do it all
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="saf-content__note">
                      {" "}
                      Available for cars registered in major cities.
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="col-md-6">
                <ScrollAnimation
                  animateOnce={true}
                  duration={1.5}
                  animateIn="fade-in"
                >
                  <div className="saf-content saf-content--yellow">
                    <div className="saf-content__right">
                      <div className="saf-fb">
                        <div className="saf-fb__free">FREE</div>
                        <div className="saf-fb__heading">
                          <div className="saf-fb__heading__icon">
                            <img
                              alt="Nominee Assistance Program"
                              loading="lazy"
                              src="https://assets.coverfox.com/static/img/icons/ic_nap.afdd630d5afa.svg"
                            />
                          </div>
                          <div className="saf-fb__heading__text">
                            <div className="saf-fb__heading__text__title">
                              Nominee Assistance Program
                            </div>
                            <div className="saf-fb__heading__text__subtitle">
                              For XPcover Life Insurance Customers
                            </div>
                          </div>
                        </div>
                        <div className="saf-fb__features">
                          <div className="saf-fb__features__title">
                            FEATURES :
                          </div>
                          <ul className="saf-fb__features__list">
                            <li>
                              We ensure your nominee gets the rightful claim
                            </li>
                            <li>All your documents managed in a single app</li>
                            <li>We help you to create your Will</li>
                          </ul>
                        </div>
                      </div>
                      <div className="saf-content__note">
                        Available for everyone who buys Life Insurance from
                        XPcover.
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="cf-section cf-section--alter cf-section--20">
          <div className="container">
            <div className="cf-section__label text-center">FAQ's</div>
            <div className="cf-section__heading cf-section__heading--20 text-center">
              {" "}
              Ask us anything, we’d love to answer!
            </div>
            <div>
              <div>
                <div className="cf-faq__item dynamic-accordian">
                  <div className="cf-faq__icon"></div>
                  <div className="cf-faq__question">
                    <p>
                      How is XPcover different from other insurance
                      marketplaces?
                    </p>
                  </div>
                  <div className="cf-faq__answer">
                    <p>
                      "We, at XPcover, aspire to be your one-stop-shop, your go
                      to place ever for anything related to insurance. This
                      means:
                    </p>
                    <ol>
                      <li>
                        We tie up with all major insurers and let you compare,
                        all in one place. So, you do not have to visit other
                        websites or speak to other insurance companies. Its all
                        here, under one website.
                      </li>
                      <li>
                        We remove all the jargons from the policy details and
                        explain everything in plain English.
                      </li>
                      <li>
                        Our experts keep it simple. They really give advice, and
                        not enforce a certain insurer to you.
                      </li>
                    </ol>
                    <p>
                      But don't just blindly believe what we are saying. We have
                      a 72% customer retention rate, which is the by far one of
                      the best in the market. We are also the highest rated
                      insurance website on Facebook and Google+. :)"
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="cf-faq__item dynamic-accordian">
                  <div className="cf-faq__icon"></div>
                  <div className="cf-faq__question">
                    <p>How does XPcover make money?</p>
                  </div>
                  <div className="cf-faq__answer">
                    <p>
                      XPcover is a licensed broker. Which means we are paid a
                      commission for each insurance policy we sell, by the
                      insurance companies. Does that mean you pay anything
                      extra, other than your insurance policy premium? Nope. The
                      commission is paid for by the insurer and not by you, the
                      customer.
                    </p>
                    <p>
                      Does the commission make us biased for or against any
                      insurance company? The answer is simply no, we cannot be
                      biased as a broker. A broker is a customer's
                      representative and is always for the customer and not for
                      the insurance company.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="cf-faq__item dynamic-accordian">
                  <div className="cf-faq__icon"></div>
                  <div className="cf-faq__question">
                    <p>Is it cheaper to buy insurance through XPcover.com?</p>
                  </div>
                  <div className="cf-faq__answer">
                    <p>
                      Insurance is a regulated market. No insurance company,
                      neither XPcover nor any other agent can give you a deal
                      cheaper than what the insurance company has set. It is
                      illegal to do so. The best way to save money on insurance
                      premiums is by comparing various insurance plans available
                      and making an informed choice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewHomePage;

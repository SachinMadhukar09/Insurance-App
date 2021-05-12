import React from "react";
// import Tabs from "./components/Tabs/Tabs";
import "./main.css";
import Tabs from "./pages/Tabs";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./Animations.css";
export default function Home() {
  return (
    <div className="container-fluid">
      <section className="hero-widget">
        <ScrollAnimation animateOnce={true} animateIn="slide-in-left">
          <h1 className="hero-widget__header font-mw stashable">
            Best Policies at Lowest Premiums
          </h1>
        </ScrollAnimation>

        <div className="hero-widget__inner-wrapper">
          <Tabs />
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
}

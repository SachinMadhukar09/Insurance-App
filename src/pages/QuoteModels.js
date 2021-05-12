import React, { useEffect, useState } from "react";
import "./QuoteModel.css";
const QuoteModels = (props) => {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    // props.history.push("#openModal");
  });
  const display = {
    display: "block",
  };
  const hide = {
    display: "none",
  };

  return (
    <div>
      {/* <a class="button" href="#openModal">
        Open it up!
      </a> */}

      <div style={toggle ? display : hide} class="modalbg">
        <div class="dialog">
          <a
            onClick={() => setToggle(!toggle)}
            href="#close"
            title="Close"
            class="close"
          >
            X
          </a>{" "}
          <div class="modal-body" style={{ textAlign: "center" }}>
            <p
              class="font-family-gotham text-primary text-center"
              // style="font-size: 1.2rem;"
            >
              Your Quote Details
            </p>
            <p style={{ textAlign: "center" }}></p>

            <div class="modal-body">
              <div
                class="healthMemberSummary container-fluid pb-10"
                style={{
                  boxShadow: " 4px 3px 10px #aaaaaa",
                  textAlign: "left",
                  fontSize: "15px",
                }}
              >
                <div style={{ marginTop: "10px" }}>
                  <div
                    class=""
                    style={{ textAlign: "center", paddingBottom: "10px" }}
                  >
                    <div
                      class="col-sm-12 col-md-12"
                      style={{ textAlign: "center" }}
                    >
                      <strong>Health Insurance for:</strong> family
                    </div>
                  </div>

                  <div
                    class=""
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      paddingBottom: "10px",
                    }}
                  >
                    <div class="col-sm-5 col-md-7">
                      <strong>Your Name</strong> Ritesh yadav
                    </div>
                    <div class="col-sm-5 col-sm-offset-2 col-md-5 col-md-offset-0">
                      <strong>Mobile</strong> 545558734
                    </div>
                  </div>
                  <div
                    class=""
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      paddingBottom: "10px",
                    }}
                  >
                    <div class="col-sm-5 col-md-7">
                      <strong>Email</strong> 45riteshyadav@gmail.com
                    </div>
                    <div class="col-sm-5 col-sm-offset-2 col-md-5 col-md-offset-0">
                      <strong>Visa Emirate</strong> Dubai
                    </div>
                  </div>

                  <div
                    class=""
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      paddingBottom: "10px",
                    }}
                  >
                    <div class="col-sm-5 col-md-7">
                      <strong>Salary Above AED 4,000?</strong> false
                    </div>
                    <div class="col-sm-5 col-sm-offset-2 col-md-5 col-md-offset-0">
                      <strong>Insurance for yourself?</strong> false
                    </div>
                  </div>
                </div>

                <h3
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid black",
                  }}
                >
                  Member Summary
                </h3>

                <div style={{ marginTop: "10px" }}>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      backgroundColor: "#EEE",
                      padding: "5px",
                    }}
                  >
                    Member 1
                  </div>
                  <div
                    class=" "
                    style={{
                      paddingBottom: "10px",
                      display: "flex",
                      justifyContent: "space-around",
                      marginTop: "10px",
                    }}
                  >
                    <div class="">
                      <strong>Date of Birth</strong>

                      <span class="">06 Mar 2003</span>
                    </div>
                    <div class="col-sm-offset-2  col-md-offset-0">
                      <strong class="">Gender</strong>{" "}
                      <span class="">Male</span>
                    </div>
                  </div>

                  <div
                    class=""
                    style={{
                      paddingBottom: "10px",
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <div class=" ">
                      <strong class="">Salary Above AED 4,000?</strong>{" "}
                      <span class="">false</span>
                    </div>
                    <div class="col-sm-offset-2  col-md-offset-0 ">
                      <strong class="">Nationality</strong>{" "}
                      <span class="">India</span>
                    </div>
                  </div>

                  <div
                    class=""
                    style={{
                      paddingBottom: "10px",
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <div class=" ">
                      <strong class="">Relationship</strong>{" "}
                      <span class="">Child</span>
                    </div>
                    <div
                      class=" viewHealthDeclaration"
                      style={{ cursor: "pointer" }}
                    >
                      <strong class="">Declaration</strong>{" "}
                      <span style={{ fontStyle: "italic", color: "blue" }}>
                        View <i class="insurance-icon-angle-right"></i>
                      </span>
                    </div>
                  </div>

                  <div
                    class=" healthDeclaration"
                    style={{
                      paddingBottom: "10px",
                      fontSize: "12px",
                      display: "none",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div class="modal-footer" style={{ padding: "10px" }}>
              <p
                style={{ fontSize: "10px" }}
                class="text-center text-primary font-weight-bold"
              >
                Does everything look correct?
              </p>
              <p style={{ fontSize: "10px" }} class="text-center text-primary">
                It is YOUR obligation to provide complete and accurate
                information. If any information is false your insurer may cancel
                your policy and/or refuse to pay any claims.
                <br />
                <br />
              </p>
              <div class="d-flex">
                <button type="button" class="btn btn-default">
                  <a
                    href="/insurance/uae/en/health/details"
                    style={{ fontWeight: "bold", textDecoration: "none" }}
                  >
                    I want to make changes
                  </a>
                </button>
                <span class="flex-g-1-basis-0"></span>

                <button
                  type="button"
                  class="button-accent px-15 w-auto py-5"
                  data-dismiss="modal"
                >
                  All Good
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteModels;

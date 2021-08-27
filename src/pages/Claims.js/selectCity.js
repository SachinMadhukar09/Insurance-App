import React from "react";

function SelectCity() {
  return (
    <div style={{ marginTop: "70px" }} className="">
      <div className="">
        <div
          className="card height-equal"
          style={{ minWidth: "100%", textAlign: "inherit" }}
        >
          <div className="card-header card-header-border" style={{ marginBottom:"-20px"}}>
            <div className="row">
              <div style={{ width: "100%", paddingLeft: "18%" }} className="" >
                <h1 style={{ justifyContent: "center" }}>
                  List of Hospitals in "City"{" "}
                </h1>
              </div>
              <div className="col-md-6">
                <div className="pull-right right-header">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="new-users">
              <div className="media" style={{ marginBottom:"-20px"}}>
                <img className="rounded-circle image-radius m-r-15" alt="" />
                <div className="media-body">
                  <h6 className="mb-0 f-w-700">Nick Stone</h6>
                  <p>Visual Designer, Github Inc</p>
                </div>
                <span className="pull-right">
                  <button
                    className="btn btn-pill btn-outline-light"
                    style={{ margin: "10%", marginLeft: "40%" }}
                  >
                    Select
                  </button>
                </span>
              </div>
              <div className="media" style={{ marginBottom:"-20px"}}>
                <img className="rounded-circle image-radius m-r-15" alt="" />
                <div className="media-body">
                  <h6 className="mb-0 f-w-700">Milano Esco</h6>
                  <p>Visual Designer, Github Inc</p>
                </div>
                <span className="pull-right">
                  <button
                    className="btn btn-pill btn-outline-light"
                    style={{ margin: "10%", marginLeft: "40%" }}
                  >
                    Select
                  </button>
                </span>
              </div>
              <div className="media" style={{ marginBottom:"-20px"}}>
                <img className="rounded-circle image-radius m-r-15" alt="" />
                <div className="media-body">
                  <h6 className="mb-0 f-w-700">Wiltor Noice</h6>
                  <p>Visual Designer, Github Inc</p>
                </div>
                <span className="pull-right">
                  <button
                    className="btn btn-pill btn-outline-light"
                    style={{ margin: "10%", marginLeft: "40%" }}
                  >
                    Select
                  </button>
                </span>
              </div>
              <div className="media mb-0" style={{ marginBottom:"-20px"}}>
                <img className="rounded-circle image-radius m-r-15" alt="" />
                <div className="media-body">
                  <h6 className="mb-0 f-w-700">Anna Strong</h6>
                  <p>Visual Designer, Github Inc</p>
                </div>
                <span className="pull-right">
                  <button
                    className="btn btn-pill btn-outline-light"
                    style={{ margin: "10%", marginLeft: "40%" }}
                  >
                    Select
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectCity;

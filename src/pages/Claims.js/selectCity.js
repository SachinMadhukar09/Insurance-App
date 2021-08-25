import React from "react";

function SelectCity() {
  return (
    <div style={{ marginTop: "70px" }} className="">
      <div className="">
        <div
          className="card height-equal"
          style={{ minWidth: "100%", textAlign: "inherit" }}
        >
          <div className="card-header card-header-border">
            <div className="row">
              <div className="col-md-6">
                <h1> Hospitals in "City" </h1>
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
              <div className="media">
                <img className="rounded-circle image-radius m-r-15" alt="" />
                <div className="media-body">
                  <h6 className="mb-0 f-w-700">Nick Stone</h6>
                  <p>Visual Designer, Github Inc</p>
                </div>
                <span className="pull-right">
                  <button className="btn btn-pill btn-outline-light">
                    Select
                  </button>
                </span>
              </div>
              <div className="media">
                <img className="rounded-circle image-radius m-r-15" alt="" />
                <div className="media-body">
                  <h6 className="mb-0 f-w-700">Milano Esco</h6>
                  <p>Visual Designer, Github Inc</p>
                </div>
                <span className="pull-right">
                  <button className="btn btn-pill btn-outline-light">
                    Select
                  </button>
                </span>
              </div>
              <div className="media">
                <img className="rounded-circle image-radius m-r-15" alt="" />
                <div className="media-body">
                  <h6 className="mb-0 f-w-700">Wiltor Noice</h6>
                  <p>Visual Designer, Github Inc</p>
                </div>
                <span className="pull-right">
                  <button className="btn btn-pill btn-outline-light">
                    Select
                  </button>
                </span>
              </div>
              <div className="media mb-0">
                <img className="rounded-circle image-radius m-r-15" alt="" />
                <div className="media-body">
                  <h6 className="mb-0 f-w-700">Anna Strong</h6>
                  <p>Visual Designer, Github Inc</p>
                </div>
                <span className="pull-right">
                  <button className="btn btn-pill btn-outline-light">
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

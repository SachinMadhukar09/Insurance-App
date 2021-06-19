import React, { Component, useState, useEffect } from "react";


const MicroHeader = () => {
  let logoIcon = "";
  const [option, setOption] = React.useState(1);


  return (
    <div>
      <div className="head">
        <div className="head-container">
          <div className="logo2">
            {logoIcon ? (
              <img src={logoIcon} className="logoImg" />
            ) : (
              <div className="logoImg" />
            )}
          </div>

          <div className="paragarph">
            <h1 className="product-name">Product Name</h1>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              na pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroHeader;

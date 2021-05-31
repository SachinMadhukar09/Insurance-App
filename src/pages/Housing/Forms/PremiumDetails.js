import React from "react";

const PremiumDetails = () => {
  return (
    <div>
      <form action="">
        <div className="inputBox">
          <p className="health_question">Coverage Amount</p>
          <input type="text" name="name" id="name" tabindex="1" />
        </div>
        <div className="inputBox">
          <p className="health_question">Duration</p>
          <input type="text" name="name" id="name" tabindex="1" />
        </div>
      </form>
      <br />
      <h3 style={{ textAlign: "center" }}>Premium Options</h3>
      <details class="collapse" close>
        <summary class="title">
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <div className="amount"> ₹ 2456</div>
              <div>MONTHLY</div>
            </div>

            <div className="coverageDetails">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vel
              deserunt provident ullam quasi beatae pariatur qui
            </div>
          </div>
        </summary>
        <hr class="divider" />
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          molestias, iusto optio labore officiis repudiandae error consectetur
          deleniti, at molestiae rem? Soluta consectetur excepturi dicta fugiat
          laboriosam dolorum delectus atque!
        </p>
      </details>
    </div>
  );
};

export default PremiumDetails;

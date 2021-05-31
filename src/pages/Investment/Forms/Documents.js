import React from "react";

const Documents = () => {
  return (
    <div>
      <form action="#" method="post">
        <div className="inputBox">
          <p for="name" className="health_question">
            Passport Size Photo
          </p>
          <input type="file" name="name" id="name" tabindex="1" />
        </div>
        {/* <p for="password"className="health_question"> */}
        <div className="inputBox">
          <p for="name" className="health_question">
            Pan Card Image
          </p>
          <input type="file" name="name" id="name" tabindex="1" />
        </div>
        <div className="inputBox">
          <p for="name" className="health_question">
            Address Proof
          </p>
          <input type="file" name="name" id="name" tabindex="1" />
        </div>
        <div className="inputBox">
          <p for="name" className="health_question">
            Income Proof
          </p>
          <input type="file" name="name" id="name" tabindex="1" />
        </div>
        <div className="inputBox">
          <p for="name" className="health_question">
            Income Source
          </p>
          <input type="file" name="name" id="name" tabindex="1" />
        </div>
        <div>
          <div className="continue_btn view_quotes__btn">Submit</div>
        </div>
      </form>
    </div>
  );
};

export default Documents;

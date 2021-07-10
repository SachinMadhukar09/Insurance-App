import React from "react";

const Documents = () => {
  return (
    <div>
      <form action="#" method="post">
        <div className="inputBox">
          <p className="health_question" for="name">
            Mandate Letter
          </p>
          <input type="file" name="name" id="name" tabindex="1" />
        </div>
        <p style={{ fontWeight: 200 }} className="health_question">
          * Mandate content to be printed on Society Letter Head and then signed
          and scanned for upload
        </p>
        {/* <p for="password" > */}
        <div className="inputBox">
          <p className="health_question" for="name">
            Pan Card Image
          </p>
          <input type="file" name="name" id="name" tabindex="1" />
        </div>
        <p style={{ fontWeight: 200 }} className="health_question">
          * PAN card should be of the Housing Society1
        </p>
      </form>
      <div className="newnextbtn1 view_quotes__btn">Submit</div>
    </div>
  );
};

export default Documents;

import React from "react";

const Documents = () => {
  return (
    <div>
      <form action="#" method="post">
        <fieldset>
          <div className="inputBox">
            <label for="name" class="mid">
              Passport Size Photo
            </label>
            <input type="file" name="name" id="name" tabindex="1" />
          </div>
          {/* <label for="password" class="mid"> */}
          <div className="inputBox">
            <label for="name" class="mid">
              Pan Card Image
            </label>
            <input type="file" name="name" id="name" tabindex="1" />
          </div>
          <div className="inputBox">
            <label for="name" class="mid">
              Address Proof
            </label>
            <input type="file" name="name" id="name" tabindex="1" />
          </div>
          <div className="inputBox">
            <label for="name" class="mid">
              Income Proof
            </label>
            <input type="file" name="name" id="name" tabindex="1" />
          </div>
          <div className="inputBox">
            <label for="name" class="mid">
              Income Source
            </label>
            <input type="file" name="name" id="name" tabindex="1" />
          </div>
          <div>
            <input type="submit" value="Submit" class="submit" />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Documents;

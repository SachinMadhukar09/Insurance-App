import React from "react";

const HealthDetails = () => {
  return (
    <div>
      <div className="inputBox">
        <label for="name" class="mid">
          Height
        </label>
        <input type="text" placeholder="ft" name="ft" id="ft" tabindex="1" />
        <input type="text" placeholder="inch" name="ft" id="ft" tabindex="1" />
        <input type="text" placeholder="cm" name="ft" id="ft" tabindex="1" />
      </div>
      <div className="inputBox">
        <label for="name" class="mid">
          Weight
        </label>
        <input type="text" placeholder="kg" name="kg" id="kg" tabindex="1" />
        <input
          type="text"
          placeholder="pounds"
          name="pounds"
          id="pounds"
          tabindex="1"
        />
      </div>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <p>Have you ever consumed narcotics? </p>
        <div className="inputBox">
          <label for="radio-choice-1">yes</label>
          <input
            type="radio"
            name="radio-choice"
            id="radio-choice-1"
            class="radio"
            tabindex="5"
            value="choice-1"
          />
        </div>
        <div className="inputBox">
          <label for="radio-choice-2">no</label>
          <input
            type="radio"
            name="radio-choice"
            id="radio-choice-2"
            class="radio"
            tabindex="6"
            value="choice-2"
          />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <p>Have you ever consumed Alcohol in the last one year? </p>
        <div className="inputBox">
          <label for="radio-choice-1">yes</label>
          <input
            type="radio"
            name="radio-choice"
            id="radio-choice-1"
            class="radio"
            tabindex="5"
            value="choice-1"
          />
        </div>
        <div className="inputBox">
          <label for="radio-choice-2">no</label>
          <input
            type="radio"
            name="radio-choice"
            id="radio-choice-2"
            class="radio"
            tabindex="6"
            value="choice-2"
          />
        </div>
      </div>{" "}
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <p>Are you employed in the armed, para miltary or police forced? </p>
        <div className="inputBox">
          <label for="radio-choice-1">yes</label>
          <input
            type="radio"
            name="radio-choice"
            id="radio-choice-1"
            class="radio"
            tabindex="5"
            value="choice-1"
          />
        </div>
        <div className="inputBox">
          <label for="radio-choice-2">no</label>
          <input
            type="radio"
            name="radio-choice"
            id="radio-choice-2"
            class="radio"
            tabindex="6"
            value="choice-2"
          />
        </div>
      </div>
      <div>
        <h2> Do you have any health related condition mentioned below: </h2>
        <div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p>Weight gain/weight loss more than 10 kg in last 6 months </p>
            <div className="inputBox">
              <label for="radio-choice-1">yes</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-1"
                class="radio"
                tabindex="5"
                value="choice-1"
              />
            </div>
            <div className="inputBox">
              <label for="radio-choice-2">no</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-2"
                class="radio"
                tabindex="6"
                value="choice-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p>Hearth related ailments/hypertension/high cholesterol </p>
            <div className="inputBox">
              <label for="radio-choice-1">yes</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-1"
                class="radio"
                tabindex="5"
                value="choice-1"
              />
            </div>
            <div className="inputBox">
              <label for="radio-choice-2">no</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-2"
                class="radio"
                tabindex="6"
                value="choice-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p>Undergone angioplasty,bypass sugery, heart surgery </p>
            <div className="inputBox">
              <label for="radio-choice-1">yes</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-1"
                class="radio"
                tabindex="5"
                value="choice-1"
              />
            </div>
            <div className="inputBox">
              <label for="radio-choice-2">no</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-2"
                class="radio"
                tabindex="6"
                value="choice-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p>Diabetes or related complications </p>
            <div className="inputBox">
              <label for="radio-choice-1">yes</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-1"
                class="radio"
                tabindex="5"
                value="choice-1"
              />
            </div>
            <div className="inputBox">
              <label for="radio-choice-2">no</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-2"
                class="radio"
                tabindex="6"
                value="choice-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p>Asthama/ Tuberculosis/ other respiratory disorders </p>
            <div className="inputBox">
              <label for="radio-choice-1">yes</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-1"
                class="radio"
                tabindex="5"
                value="choice-1"
              />
            </div>
            <div className="inputBox">
              <label for="radio-choice-2">no</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-2"
                class="radio"
                tabindex="6"
                value="choice-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p>Nervous disorder/stroke/epilepsy/spinal issues </p>
            <div className="inputBox">
              <label for="radio-choice-1">yes</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-1"
                class="radio"
                tabindex="5"
                value="choice-1"
              />
            </div>
            <div className="inputBox">
              <label for="radio-choice-2">no</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-2"
                class="radio"
                tabindex="6"
                value="choice-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p>
              Gastrointestinal issues/LIver disorder/pancreatitiis/hepatitis B
              or C{" "}
            </p>
            <div className="inputBox">
              <label for="radio-choice-1">yes</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-1"
                class="radio"
                tabindex="5"
                value="choice-1"
              />
            </div>
            <div className="inputBox">
              <label for="radio-choice-2">no</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-2"
                class="radio"
                tabindex="6"
                value="choice-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p>
              Genitourinary disorders related to kidney, prostate, urinary
              system and any other disorder{" "}
            </p>
            <div className="inputBox">
              <label for="radio-choice-1">yes</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-1"
                class="radio"
                tabindex="5"
                value="choice-1"
              />
            </div>
            <div className="inputBox">
              <label for="radio-choice-2">no</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-2"
                class="radio"
                tabindex="6"
                value="choice-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p>History of cancer or a Tumour, Growth or cyst </p>
            <div className="inputBox">
              <label for="radio-choice-1">yes</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-1"
                class="radio"
                tabindex="5"
                value="choice-1"
              />
            </div>
            <div className="inputBox">
              <label for="radio-choice-2">no</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-2"
                class="radio"
                tabindex="6"
                value="choice-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p>HIV infection or positive HIV test in the past </p>
            <div className="inputBox">
              <label for="radio-choice-1">yes</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-1"
                class="radio"
                tabindex="5"
                value="choice-1"
              />
            </div>
            <div className="inputBox">
              <label for="radio-choice-2">no</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-2"
                class="radio"
                tabindex="6"
                value="choice-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p>Anemia /thalassemia/ any blood related disorder </p>
            <div className="inputBox">
              <label for="radio-choice-1">yes</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-1"
                class="radio"
                tabindex="5"
                value="choice-1"
              />
            </div>
            <div className="inputBox">
              <label for="radio-choice-2">no</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-2"
                class="radio"
                tabindex="6"
                value="choice-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p>Psychiatric illness such as anxiety, depression orn any other</p>
            <div className="inputBox">
              <label for="radio-choice-1">yes</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-1"
                class="radio"
                tabindex="5"
                value="choice-1"
              />
            </div>
            <div className="inputBox">
              <label for="radio-choice-2">no</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-2"
                class="radio"
                tabindex="6"
                value="choice-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p>Congential defect/ abnormality/ physical deformity/ handicap</p>
            <div className="inputBox">
              <label for="radio-choice-1">yes</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-1"
                class="radio"
                tabindex="5"
                value="choice-1"
              />
            </div>
            <div className="inputBox">
              <label for="radio-choice-2">no</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-2"
                class="radio"
                tabindex="6"
                value="choice-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p>
              Family history(parents or siblings) related to heart disease,
              diabetes, cancer or any tother herediary/familal disorder
            </p>
            <div className="inputBox">
              <label for="radio-choice-1">yes</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-1"
                class="radio"
                tabindex="5"
                value="choice-1"
              />
            </div>
            <div className="inputBox">
              <label for="radio-choice-2">no</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-2"
                class="radio"
                tabindex="6"
                value="choice-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p>Any other disorder not mentioned above </p>
            <div className="inputBox">
              <label for="radio-choice-1">yes</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-1"
                class="radio"
                tabindex="5"
                value="choice-1"
              />
            </div>
            <div className="inputBox">
              <label for="radio-choice-2">no</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-2"
                class="radio"
                tabindex="6"
                value="choice-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p>
              is your occupation associated with any specific hazard or do you
              take part in activities or have hobbbies that could be dangerous
              in any way{" "}
            </p>
            <div className="inputBox">
              <label for="radio-choice-1">yes</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-1"
                class="radio"
                tabindex="5"
                value="choice-1"
              />
            </div>
            <div className="inputBox">
              <label for="radio-choice-2">no</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-2"
                class="radio"
                tabindex="6"
                value="choice-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p>
              Have you undergone any tests/investigations/surgery or have been
              hosptalized for observation or treatment in the past?{" "}
            </p>
            <div className="inputBox">
              <label for="radio-choice-1">yes</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-1"
                class="radio"
                tabindex="5"
                value="choice-1"
              />
            </div>
            <div className="inputBox">
              <label for="radio-choice-2">no</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-2"
                class="radio"
                tabindex="6"
                value="choice-2"
              />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p>None of the Abover </p>
            <div className="inputBox">
              <label for="radio-choice-1">yes</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-1"
                class="radio"
                tabindex="5"
                value="choice-1"
              />
            </div>
            <div className="inputBox">
              <label for="radio-choice-2">no</label>
              <input
                type="radio"
                name="radio-choice"
                id="radio-choice-2"
                class="radio"
                tabindex="6"
                value="choice-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthDetails;

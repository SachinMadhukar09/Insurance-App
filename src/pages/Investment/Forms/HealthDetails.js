import React from "react";

const HealthDetails = () => {
  return (
    <div>
      <form action="#" method="post" style={{ width: "1000px" }}>
        <div
          style={{ width: "965px", marginBottom: "35px", marginTop: "35px" }}
          className="inputBox"
        >
          <label for="name" class="mid">
            Height
          </label>
          <input type="text" placeholder="ft" name="ft" id="ft" tabindex="1" />
          <input
            type="text"
            placeholder="inch"
            name="ft"
            id="ft"
            tabindex="1"
          />
          <input type="text" placeholder="cm" name="ft" id="ft" tabindex="1" />
        </div>
        <div
          style={{ width: "965px", marginBottom: "35px", marginTop: "35px" }}
          className="inputBox"
        >
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
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <p className="health_question">Have you ever consumed narcotics? </p>
          <div className="radio_flex">
            <div className="inputBox">
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>Yes</span>
              </label>
            </div>
            <div className="inputBox">
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>No</span>
              </label>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <p className="health_question">
            Have you ever consumed Alcohol in the last one year?{" "}
          </p>
          <div className="radio_flex">
            <div className="inputBox">
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>Yes</span>
              </label>
            </div>
            <div className="inputBox">
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>No</span>
              </label>
            </div>
          </div>
        </div>{" "}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <p className="health_question">
            Are you employed in the armed, para miltary or police forced?{" "}
          </p>
          <div className="radio_flex">
            <div className="inputBox">
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>Yes</span>
              </label>
            </div>
            <div className="inputBox">
              <label className="housing_radio">
                <input type="radio" name="radio" checked />
                <span>No</span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <h2 style={{ margin: "51px 0" }}>
            {" "}
            Do you have any health related condition mentioned below:{" "}
          </h2>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p className="health_question">
                Weight gain/weight loss more than 10 kg in last 6 months{" "}
              </p>
              <div className="radio_flex">
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>Yes</span>
                  </label>
                </div>
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p className="health_question">
                Hearth related ailments/hypertension/high cholesterol{" "}
              </p>
              <div className="radio_flex">
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>Yes</span>
                  </label>
                </div>
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p className="health_question">
                Undergone angioplasty,bypass sugery, heart surgery{" "}
              </p>
              <div className="radio_flex">
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>Yes</span>
                  </label>
                </div>
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p className="health_question">
                Diabetes or related complications{" "}
              </p>
              <div className="radio_flex">
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>Yes</span>
                  </label>
                </div>
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p className="health_question">
                Asthama/ Tuberculosis/ other respiratory disorders{" "}
              </p>
              <div className="radio_flex">
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>Yes</span>
                  </label>
                </div>
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p className="health_question">
                Nervous disorder/stroke/epilepsy/spinal issues{" "}
              </p>
              <div className="radio_flex">
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>Yes</span>
                  </label>
                </div>
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p className="health_question">
                Gastrointestinal issues/LIver disorder/pancreatitiis/hepatitis B
                or C{" "}
              </p>
              <div className="radio_flex">
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>Yes</span>
                  </label>
                </div>
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p className="health_question">
                Genitourinary disorders related to kidney, prostate, urinary
                system and any other disorder{" "}
              </p>
              <div className="radio_flex">
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>Yes</span>
                  </label>
                </div>
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p className="health_question">
                History of cancer or a Tumour, Growth or cyst{" "}
              </p>
              <div className="radio_flex">
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>Yes</span>
                  </label>
                </div>
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p className="health_question">
                HIV infection or positive HIV test in the past{" "}
              </p>
              <div className="radio_flex">
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>Yes</span>
                  </label>
                </div>
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p className="health_question">
                Anemia /thalassemia/ any blood related disorder{" "}
              </p>
              <div className="radio_flex">
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>Yes</span>
                  </label>
                </div>
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p className="health_question">
                Psychiatric illness such as anxiety, depression orn any other
              </p>
              <div className="radio_flex">
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>Yes</span>
                  </label>
                </div>
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p className="health_question">
                Congential defect/ abnormality/ physical deformity/ handicap
              </p>
              <div className="radio_flex">
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>Yes</span>
                  </label>
                </div>
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p className="health_question">
                Family history(parents or siblings) related to heart disease,
                diabetes, cancer or any tother herediary/familal disorder
              </p>
              <div className="radio_flex">
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>Yes</span>
                  </label>
                </div>
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p className="health_question">
                Any other disorder not mentioned above{" "}
              </p>
              <div className="radio_flex">
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>Yes</span>
                  </label>
                </div>
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p className="health_question">
                is your occupation associated with any specific hazard or do you
                take part in activities or have hobbbies that could be dangerous
                in any way{" "}
              </p>
              <div className="radio_flex">
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>Yes</span>
                  </label>
                </div>
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p className="health_question">
                Have you undergone any tests/investigations/surgery or have been
                hosptalized for observation or treatment in the past?{" "}
              </p>
              <div className="radio_flex">
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>Yes</span>
                  </label>
                </div>
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <p className="health_question">None of the Abover </p>
              <div className="radio_flex">
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>Yes</span>
                  </label>
                </div>
                <div className="inputBox">
                  <label className="housing_radio">
                    <input type="radio" name="radio" checked />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HealthDetails;

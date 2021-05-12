import React, { useEffect } from "react";
import "./Quotes.css";
import { Link } from "react-router-dom";
const Declaration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div class="formHeader">
        Declaration
        <br />
        <small
          style={{
            fontSize: ".8rem",
            lineHeight: "1.2em",
            display: "block",
            marginTop: "25px",
          }}
        >
          Please note that you must answer all questions, and answer them
          truthfully. <br />
          Failure to do so may result in your policy being cancelled without
          notice.
        </small>
      </div>

      <div>
        <div className="carInsuranceForm">
          <div className="car_year box">
            <div className="year title_question">
              Diseases of the cardiovascular system incl. hypertension
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="accept-offers"
                id="brand-new-yes-button"
              />
              <label class="button-label" for="brand-new-yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="accept-offers"
                id="brand-new-no-button"
                checked={true}
              />
              <label class="button-label" for="brand-new-no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>
          <div className="car_brand box">
            <div className="first_car_ques title_question">
              Diseases of the respiratory system
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="dis-offers"
                id="yes-button"
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="dis-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>
          <div className="first_car box">
            <div className="first_car_ques title_question">
              Diseases of digestive system
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="dige-offers"
                id="yes-button"
                checked={true}
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="dige-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>

          <div className="makeCar box">
            <div className="make title_question">
              Diseases of genitourinary system, kidney diseases and breast
              disorders
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="diff-offers"
                id="yes-button"
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="diff-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>
          <div className="modelName box">
            <div className="model title_question">
              Osteoarticular & Muscular Diseases or Transplants or Disease of
              the skin and subcutaneous tissue
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="skin-offers"
                id="yes-button"
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="skin-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>
          <div className="modelDetails box">
            <div className="details title_question">
              Diseases of the nervous system and sense organs (ears, eyes, nose)
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="nerv-offers"
                id="yes-button"
                checked={true}
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="nerv-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>
          <div className="carValue box">
            <div className="value title_question">
              Diseases of the endocrine system, nutritional-, metabolic diseases
              and immunity disorders, diabetes
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="endo-offers"
                id="yes-button"
                checked={true}
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="endo-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>
          <div className="firstCarRegistered box">
            <div className="carRegsiDate title_question">
              Neoplasms/Cancer (benign or malignant)
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="Neo-offers"
                id="yes-button"
                checked={true}
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="Neo-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>

          <div className="registeredCity box">
            <div className="cityName title_question">
              Sexually Transmitted Diseases & AIDs
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="aid-offers"
                id="yes-button"
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="aid-offers"
                id="no-button"
                checked="true"
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>
          <div className="gccspec box">
            <div className="gccTitle title_question">
              Congenital anomalies, hereditary/genetic diseases
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="cong-offers"
                id="yes-button"
                checked="checked"
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="cong-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>

          <div className="fully box">
            <div className="fullyTitle title_question">
              Other Diseases, Accidents, Previous or Future operations you
              already know about
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="oth-offers"
                id="yes-button"
                checked="checked"
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="oth-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>
          <div className="agencyRepair box">
            <div className="title title_question">
              Does the current policy of this car include agency repair?
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="other-offers"
                id="yes-button"
                checked="checked"
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="other-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>

          <div className="policyExpiry box">
            <div className="expiryTitle title_question">
              Is the adherent following or has ever followed any medical
              treatment? Did or is he taking medication?
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="adh-offers"
                id="yes-button"
                checked="checked"
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="adh-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>
          <div className="policyExpiry box">
            <div className="expiryTitle title_question">
              Pregnant or trying to get pregnant, or any previous complications
              in pregnancy, childbirth or abortion
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="preg-offers"
                id="yes-button"
                checked="checked"
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="preg-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>
          <div className="policyExpiry box">
            <div className="expiryTitle title_question">
              Infectious and parasitic diseases
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="infe-offers"
                id="yes-button"
                checked="checked"
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="infe-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>
          <div className="policyExpiry box">
            <div className="expiryTitle title_question">
              Diseases of blood and blood forming organs
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="dis-offers"
                id="yes-button"
                checked="checked"
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="dis-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>
          <div className="policyExpiry box">
            <div className="expiryTitle title_question">
              Mental-/psychiatric disorders
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="ment-offers"
                id="yes-button"
                checked="checked"
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="ment-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>
          <div className="policyExpiry box">
            <div className="expiryTitle title_question">
              Diseases of the musculoskeletal system and connective tissue
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="muscu-offers"
                id="yes-button"
                checked="checked"
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="muscu-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>
          <div className="policyExpiry box">
            <div className="expiryTitle title_question">
              Injury and poisoning
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="inju-offers"
                id="yes-button"
                checked="checked"
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="inju-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>
          <div className="policyExpiry box">
            <div className="expiryTitle title_question">
              Previous medical/surgical hospitalisations, procedures and
              operations
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="prev-offers"
                id="yes-button"
                checked="checked"
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="prev-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>
          <div className="policyExpiry box">
            <div className="expiryTitle title_question">
              Any (chronic) disease(s), symptoms and complaints not mentioned
              above
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="any-offers"
                id="yes-button"
                checked="checked"
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="any-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>
          <div className="policyExpiry box">
            <div className="expiryTitle title_question">
              Any Pre-existing disease(s), symptoms and complaints within the
              last ten years
            </div>
            <div class="button-wrap">
              <input
                class="hidden radio-label"
                type="radio"
                name="pre-offers"
                id="yes-button"
                checked="checked"
              />
              <label class="button-label" for="yes-button">
                <h1>Yes</h1>
              </label>
              <input
                class="hidden radio-label"
                type="radio"
                name="pre-offers"
                id="no-button"
                checked={true}
              />
              <label class="button-label" for="no-button">
                <h1>No</h1>
              </label>
            </div>
          </div>
          <div className="terms_condition">
            <div style={{ margin: "20px auto", textAlign: "justify" }}>
              I hereby declare and agree, with respect to both, myself and to my
              Dependants, that I am aware of the general terms of this insurance
              and I accept them. With the above, I authorise my doctor, health
              institution or other organisation or person that has any
              information about my health and/or activities (and those of my{" "}
              <b>Dependants</b>) to provide the <b>Insurer</b> with the said
              information. This shall include hospital and any other records
              pertaining to medical advice, diagnosis, treatment or
              disturbances. A photocopy of this authorisation has the same
              validity as the original.
            </div>
            <div style={{ margin: "20px auto", textAlign: "justify" }}>
              I understand and acknowledge any <b>pregnancy</b> not declared at
              the time of this application’s coverage will be at the sole
              discretion of the insurer. The insurer has the right to not cover
              any maternity claims to any <b>undeclared pregnancy</b>. I also
              acknowledge and understand that for any pregnancy, which arises
              within forty calendar days from the date of this application;
              coverage will also be at the discretion of the insurer.
            </div>
          </div>
          <Link to="/health-quotes">
            <div
              style={{ width: "100%" }}
              className="continue_btn view_quotes__btn"
            >
              Continue
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Declaration;

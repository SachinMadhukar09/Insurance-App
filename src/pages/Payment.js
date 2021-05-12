import React from "react";
import "../components/Payment.css";
import Receipt from "../components/Receipt";

const Payment = () => {
  return (
    <div style={{ width: "100%" }} className="payment_container">
      <div className="containers">
        <div className="price">
          <h1>Pay for your policy!</h1>
        </div>
        <div className="paymentCard containers">
          <div className="paymentCard">
            <div className="row credit">
              <div className="left">
                <input id="cd" type="radio" name="payment" />
                <div className="radio"></div>
                <label for="cd">Debit/ Credit Card</label>
              </div>
              <div className="right">
                <img
                  src="https://d16053qvinakro.cloudfront.net/insurance/logos/cards.png"
                  alt="visa"
                />
                {/* <img
                  src="https://seeklogo.com/images/M/mastercard-logo-473B8726A9-seeklogo.com.png"
                  alt="mastercard"
                /> */}
                {/* <img src="http://i63.tinypic.com/1572ot1.png" alt="amex" />
              <img src="http://i64.tinypic.com/2i92k4p.png" alt="maestro" /> */}
              </div>
            </div>
            <div className="row paypal">
              <div className="left">
                <input id="pp" type="radio" name="payment" />
                <div className="radio"></div>
                <label for="pp">Cash</label>
              </div>
              <div className="right">
                <img
                  src="https://png.pngtree.com/png-vector/20191024/ourlarge/pngtree-cash-icon-flat-style-png-image_1857089.jpg"
                  alt="paypal"
                />
              </div>
            </div>
            <div className="row cardholder">
              <div className="info">
                <label for="cardholdername">Name</label>
                <input
                  placeholder="e.g. Richard Bovell"
                  id="cardholdername"
                  type="text"
                />
              </div>
            </div>
            <div className="row number">
              <div className="info">
                <label for="cardnumber">Card number</label>
                <input
                  id="cardnumber"
                  type="text"
                  pattern="[0-9]{16,19}"
                  maxlength="19"
                  placeholder="8888-8888-8888-8888"
                />
              </div>
            </div>
            <div className="row details">
              <div className="left">
                <label for="expiry-date">Expiry</label>
                <select id="expiry-date">
                  <option>MM</option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                  <option value="7">07</option>
                  <option value="8">08</option>
                  <option value="9">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <span>/</span>
                <select id="expiry-date">
                  <option>YYYY</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
              </div>
              <div className="right">
                <label for="cvv">CVC/CVV</label>
                <input type="text" maxlength="4" placeholder="123" />
                <span
                  data-balloon-length="medium"
                  data-balloon="The 3 or 4-digit number on the back of your card."
                  data-balloon-pos="up"
                >
                  i
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button type="submit">
            <i className="ion-locked"></i> Confirm and Pay
          </button>
        </div>
      </div>
      <Receipt />
    </div>
  );
};

export default Payment;

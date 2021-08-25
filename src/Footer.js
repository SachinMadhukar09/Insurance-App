import React from "react";

function Footer() {
  return (
    <div>
      <footer className="stashable">
        <div className="footer-wrapper">
          <div className="footer-wrapper__finish">
            <div className="container-fluid">
              <div className="divider"></div>
              <ul className="footer-links clearfix">
                <li>
                  <a href="/shipping-and-delivering/">
                    Shipping &amp; Delivery Policy
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/cancellation-and-refund-policy/">
                    Cancellation &amp; Refund
                  </a>
                </li>
                <li>
                  <a href="/terms-and-conditions/">Terms &amp; Conditions</a>
                </li>
              </ul>
              <span className="copyright">
                <a href="/articles/insurance/insurance-subject-matter-of-solicitation/">
                  Insurance is a subject matter of solicitation
                </a>

                <span>Copyright © 2021 XPcover.com. All Rights Reserved</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

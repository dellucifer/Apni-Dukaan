import React from "react";
import "./Iframe.css";
import { Link } from "react-router-dom";

function Iframe() {
  return (
    <div className="iframe">
      <div className="iframe__wrapper">
        <h1>Welcome to Apni Dukaan!</h1>

        <p>
          We're so glad you're here. Our mission is to provide best quality of
          ecommerce features to our end user. Whether you're here to buy for you
          or for someone else, we're here to help. Take a look around and see
          what we have to offer. If you have any questions, feel free to reach
          out to our <a href="mailto: pg99285@gmail.com">team</a>. We hope you
          enjoy your time here and come back soon!"
        </p>
        <br />
        <p>
          Like most websites, we use cookies to improve your browsing experience
          and personalize the content we show you. By clicking 'Accept', you
          consent to our use of cookies. You can learn more about the cookies we
          use in our <Link to="/privacy">Privacy Policy</Link>. If you prefer
          not to accept cookies, you can adjust your browser settings to disable
          them. However, please note that some features of our website may not
          function properly without cookies. Thank you for visiting Apni Dukaan!
        </p>

        <button className="iframe__button">Accept all cookies</button>
      </div>
    </div>
  );
}

export default Iframe;

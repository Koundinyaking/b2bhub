import React, { useState } from "react";
import "../Components/Registration.css";
import Lottie from "react-lottie";
import * as Reg_icon from "../assests/registration_json.json";
import * as Success_icon from "../assests/succesful_json.json";

const Registration = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: Reg_icon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: Success_icon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleGoBack = () => {
    console.log("Go back to home");
  };

  return (
    <div className="main-cont">
      {isSubmitted ? (
        <div className="success-box">
          <Lottie options={defaultOptions2} height={200} width={200} />
          <h2>Registered Successfully</h2>
          <button onClick={handleGoBack} className="home-button">
            Go Back to Home
          </button>
        </div>
      ) : (
        <>
          <div className="form-cont">
            <h1> Buyer/Seller Registration </h1>
            <div className="form">
              <div className="form-input">
                <p>
                  <b>Name</b>
                </p>
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div className="form-input">
                <p>
                  <b>Company Name</b>
                </p>
                <input type="text" />
              </div>
              <div className="form-input">
                <p>
                  <b>GST no</b>
                </p>
                <input type="text" />
              </div>
              <div className="form-input">
                <p>
                  <b>Phone Number</b>
                </p>
                <input type="text" placeholder="+91" className="phone-code" />
                <input type="text" />
              </div>
              <div className="form-input">
                <p>
                  <b>Mail</b>
                </p>
                <input type="text" />
              </div>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
          <div className="lottie">
            <Lottie options={defaultOptions1} height={400} width={400} />
          </div>
        </>
      )}
    </div>
  );
};

export default Registration;

import React, { useState } from "react";
import "../Components/Registration.css";
import Lottie from "react-lottie";
import * as Reg_icon from "../assets/registration_json.json";
import * as Success_icon from "../assets/succesful_json.json";
import { Navigate, useNavigate } from "react-router-dom";
import { Flex, Modal } from "antd";
import moong from "./moong.jpg";

const Registration = () => {
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const defaultOptions1 = {
    loop: false,
    autoplay: true,
    animationData: Reg_icon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: Success_icon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSubmit = () => {
    showModal();
    // navigate('/')
  };

  const handleGoBack = () => {
    console.log("Go back to home");
  };

  return (
    <div  style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      width:"100vw",
      height:"100vh",
      // backgroundImage: `url(${moong})`, // Use moong image as background
      // backgroundSize: "cover",
      // backgroundPosition: "center",
      position: "relative",
      padding: "20px",
      borderRadius: "10px",
      overflow: "hidden",
    }}>
      <>
        <div className="form-cont" style={{height:"fit-content"}}>
          <h1 style={{textAlign:"center"}}> Buyer/Seller Registration </h1>
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
              <input type="number" placeholder="+91" className="phone-code" />
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
        {/* <Modal>
          <div className="success-box">
            <Lottie options={defaultOptions2} height={200} width={200} />
            <h2>Registered Successfully</h2>
            <button onClick={handleGoBack} className="home-button">
              Go Back to Home
            </button>
          </div>
        </Modal> */}

        <Modal
          // title="Registration Successful"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <>
            <div className="success-box">
              <Lottie options={defaultOptions2} height={200} width={200} />
              <h2>Registration Successful</h2>
              <button
                onClick={() => navigate("/products")}
                className="home-button"
              >
                Explore Products
              </button>
            </div>
          </>
        </Modal>
      </>
    </div>
  );
};

export default Registration;
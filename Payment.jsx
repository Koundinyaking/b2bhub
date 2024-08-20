import React from "react";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="container">
      <div className="section payment-section">
        <h2>Payment Details</h2>
        <div className="input-group">
          <label>Buyer Name</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Buyer's Company</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>E-Mail</label>
          <input type="text" />
        </div>
        <div className="bank-details">
          <h3>Bank Details</h3>
          <div className="input-group">
            <label>Acc No :</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>IFSC Code :</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>MICR Code :</label>
            <input type="text" />
          </div>
        </div>

        <center>
          <p className="email-instruction">
            Send Your Transaction Details Via E-Mail
          </p>
        </center>
        <input
          type="text"
          className="email-input"
          value="admin@vtsenterprises.com"
          readOnly
        />
      </div>

      <div className="section delivery-section">
        <h2>Delivery Details</h2>
        <div className="input-group">
          <label style={{ marginBottom: "20px", marginTop: "10px" }}>
            Delivery Address
          </label>
          <textarea rows="4" />
        </div>
        <div className="input-group">
          <label>Delivery Date :</label>
          <p>
            The product will be delivered within 3 to 7 Business days from the
            date of payment.
          </p>
        </div>
        <p className="sample-info">
          The samples can be checked at the given location before the purchase.
        </p>
      <button>Proceed to Payment</button>

      </div>
    </div>
  );
};

export default Payment;

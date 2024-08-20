import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Cartitems = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];  
  const navigate = useNavigate();

  const handlePayment = ()=>{
    navigate('/payment')
  }
  return (
    <div className="cartpage-container">
      <div className="cartpage-header">
        <button onClick={() => navigate("/cart-items")} className="cartpage-back">
          <u>Continue Shopping</u>
        </button>
      </div>

      <div className="cartpage-title">Shopping Cart</div>
      <div className="cartpage-subtitle">
        You have {cartItems.length} item(s) in your cart
      </div>

      {cartItems.map((item, index) => (
        <div key={index} className="cartpage-item">
          <div className="cartpage-image-container">
            <img src={item.image} alt={item.name} className="cartpage-image" />
          </div>
          <div className="cartpage-details">
            <div className="cartpage-product-name">{item.name}</div>
            <div className="cartpage-product-subname">{item.name}</div>
          </div>
          <div className="cartpage-quantity-container">
            <label className="cartpage-label">Quantity</label>
            <input
              type="number"
              value={item.quantity}
              readOnly
              className="cartpage-quantity-input"
            />
          </div>
          <div className="cartpage-price">
            ₹ {item.price.toFixed(2)}
          </div>
        </div>
      ))}
      
      <div className="cartpage-footer">
        <button onClick={handlePayment} className="cartpage-proceed-button">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Cartitems;

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Cartitems = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Initialize state for cart items
  const [cartItems, setCartItems] = useState(location.state?.cartItems || []);
  
  // State for the current date
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Set the current date when the component mounts
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
    setCurrentDate(formattedDate);
  }, []); // Empty dependency array means this runs only once on mount

  const handlePayment = () => {
    navigate('/payment');
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (indexToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="cartpage-container">
      {/* Display the current date at the top */}
      <div className="cartpage-date">
        Date: {currentDate}
      </div>

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
            <button 
              className="cartpage-remove-button" 
              onClick={() => handleRemoveItem(index)}
            >
              ❌
            </button>
          </div>
        </div>
      ))}

      <div className="cartpage-footer">
        <button 
          onClick={handlePayment} 
          className="cartpage-proceed-button"
          disabled={cartItems.length === 0} // Disable button if no items
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cartitems;

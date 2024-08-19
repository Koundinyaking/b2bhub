import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import rice from "./rice.jpg";

const dalItems = [
  { name: "Toor Dal", image: rice, minQuantity: 100 },
  { name: "Urad Dal", image: rice, minQuantity: 100 },
  { name: "Moong Dal", image: rice, minQuantity: 100 },
  { name: "Gram Dal", image: rice, minQuantity: 100 },
];

const Addcart = () => {
  const [quantities, setQuantities] = useState(Array(dalItems.length).fill());
  const [prices, setPrices] = useState(Array(dalItems.length).fill());
  const [cartItems, setCartItems] = useState([]);  
  const [isBuyer, setIsBuyer] = useState(true);
  const navigate = useNavigate();
  const pricePerKg = 150;

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  const handlePriceChange = (index, value) => {
    const newPrices = [...prices];
    newPrices[index] = value;
    setPrices(newPrices);
  };

  const handleModeChange = (mode) => {
    setIsBuyer(mode === "Buyer");
  };

  const handleSubmit = (index) => {
    const item = dalItems[index];
    const quantity = quantities[index];

    if (isBuyer && quantity) {
      // Add the item to the cart
      const newItem = { ...item, quantity, price: quantity * pricePerKg * 10 };
      setCartItems([...cartItems, newItem]);

      // Navigate to the cart page and pass cart items as state
      navigate("/cart", { state: { cartItems: [...cartItems, newItem] } });
    } else if (!isBuyer) {
      console.log(`Submitted ${item.name} at ₹${prices[index]} per kg.`);
      navigate("/Aftersubmit");
    }
  };

  return (
    <div className="addcart-ctn">
      <div className="addcart-role-ctn">
        <button
          className={`addcart-role-button ${isBuyer ? "active" : ""}`}
          onClick={() => handleModeChange("Buyer")}
        >
          Buyer
        </button>
        <button
          className={`addcart-role-button ${!isBuyer ? "active" : ""}`}
          onClick={() => handleModeChange("Seller")}
        >
          Seller
        </button>
      </div>
      <div className="addcart-grid">
        {dalItems.map((dal, index) => (
          <div key={index} className="addcart-grid-row">
            <div className="addcart-grid-header">
              <div className="addcart-header-item">Product Name</div>
              <div className="addcart-header-item">{isBuyer ? "Quantity" : "Price"}</div>
              <div className="addcart-header-item">{isBuyer ? "Price" : "Quantity"}</div>
              <div className="addcart-header-item">Action</div>
            </div>
            <div className="addcart-grid-content">
              <div className="addcart-grid-item">
                <img src={dal.image} alt={dal.name} className="addcart-image" />
                <div className="addcart-name">{dal.name}</div>
                <div className="addcart-min-quantity">
                  Min quantity {dal.minQuantity} tons
                </div>
              </div>

              {/* Swap positions based on isBuyer state */}
              {isBuyer ? (
                <>
                  <div className="addcart-grid-item">
                    <input
                      type="number"
                      value={quantities[index]}
                      onChange={(e) => handleQuantityChange(index, e.target.value)}
                      placeholder="Enter quantity (tons)"
                      className="addcart-quantity-input"
                    />
                  </div>
                  <div className="addcart-grid-item">
                    <div className="addcart-price">
                      ₹ {(quantities[index] * pricePerKg * 10).toFixed(2)}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="addcart-grid-item">
                    <input
                      type="number"
                      value={prices[index]}
                      onChange={(e) => handlePriceChange(index, e.target.value)}
                      placeholder="Enter price (₹ per kg)"
                      className="addcart-quantity-input"
                    />
                  </div>
                  <div className="addcart-grid-item">
                    <div className="addcart-price">
                      {quantities[index] ? `${quantities[index]} tons` : "100 Tons"}
                    </div>
                  </div>
                </>
              )}

              <div className="addcart-grid-item">
                <button
                  className="addcart-button"
                  onClick={() => handleSubmit(index)}
                >
                  {isBuyer ? "Add to Cart" : "Submit"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addcart;

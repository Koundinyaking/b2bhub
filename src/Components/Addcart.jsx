import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import rice from "./rice.jpg";
import uraddal from "./urad dal.jpeg";
import moong from "./moong.jpg";
import gram from "./gram.jpeg";
import Nav from "./Nav";

const dalItems = [
  { name: "Toor Dal", image: rice, minQuantity: 100 },
  { name: "Urad Dal", image: uraddal, minQuantity: 100 },
  { name: "Moong Dal", image: moong, minQuantity: 100 },
  { name: "Gram Dal", image: gram, minQuantity: 100 },
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
      navigate("/successful-sell");
    }
  };

  return (
    <>
      <Nav />
      <div
        className="addcart-ctn"
        style={{
          backgroundImage: `url(${moong})`, // Use moong image as background
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          padding: "20px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* Overlay effect */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay with 50% opacity
            zIndex: 1,
          }}
        ></div>

        {/* Content container */}
        <div style={{ position: "relative", zIndex: 2 }}>
          {/* Style the buttons to be side by side */}
          <div
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
            className="addcart-role-ctn"
          >
           <div style={{marginLeft:"-300px"}} className="action-bts">
            <button className="addcart-role-button" onClick={handleModeChange}>Buy Produts</button>
            <button className="addcart-role-button" onClick={handleModeChange}>Sell Produts</button>
           </div>
          </div>

          <div className="addcart-grid">
            {dalItems.map((dal, index) => (
              <div key={index} className="addcart-grid-row">
                <div className="addcart-grid-header">
                  <div className="addcart-header-item">Product Name</div>
                  <div className="addcart-header-item">
                    {isBuyer ? "Quantity" : "Price"}
                  </div>  
                  <div className="addcart-header-item">
                    {isBuyer ? "Price" : "Quantity"}
                  </div>
                  <div className="addcart-header-item">Action</div>
                </div>
                <div className="addcart-grid-content">
                  <div className="addcart-grid-item">
                    {/* Container for background filter */}
                    <div
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.8)", // White background with 80% opacity
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    >
                      <img
                        src={dal.image}
                        alt={dal.name}
                        className="addcart-image"
                        style={{
                          width: "100%",
                          borderRadius: "8px",
                          marginBottom: "10px",
                        }}
                      />
                      <div className="addcart-name">{dal.name}</div>
                      <div className="addcart-min-quantity">
                        Min quantity {dal.minQuantity} tons
                      </div>
                    </div>
                  </div>

                  {/* Swap positions based on isBuyer state */}
                  {isBuyer ? (
                    <>
                      <div className="addcart-grid-item">
                        <input
                          type="number"
                          value={quantities[index]}
                          onChange={(e) =>
                            handleQuantityChange(index, e.target.value)
                          }
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
                          onChange={(e) =>
                            handlePriceChange(index, e.target.value)
                          }
                          placeholder="Enter price (₹ per kg)"
                          className="addcart-quantity-input"
                        />
                      </div>
                      <div className="addcart-grid-item">
                        <div className="addcart-price">
                          {quantities[index]
                            ? `${quantities[index]} tons`
                            : "100 Tons"}
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
      </div>
    </>
  );
};

export default Addcart;

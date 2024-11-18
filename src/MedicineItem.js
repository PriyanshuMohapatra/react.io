// MedicineItem.js
import React from "react";

function MedicineItem({ name, price, addToCart }) {
  return (
    <div style={{  backgroundColor: 'white',
      color:"black",
      padding: '1.5em',
      width: '220px',
      borderRadius: '12px',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      textAlign: 'center',
      margin: '1em 0',
      cursor: 'pointer' }}>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <button
        onClick={() => addToCart({ name, price })}
        style={{
          backgroundColor: "#457b9d",
          color: "black",
          padding: "0.5em 1em",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default MedicineItem;

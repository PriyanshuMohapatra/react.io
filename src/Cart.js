// Cart.js
import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = (medicine) => {
    // Redirect to index.php with the selected medicine name as a query parameter
    window.location.href = `http://localhost/phpcodes/index.php?medicine=${encodeURIComponent(medicine)}`;
  };

  return (
    <div style={{ padding: "2em", backgroundColor:"black" , borderRadius: "10px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} style={{ marginBottom: "1em" }}>
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
              <button
                onClick={() => removeFromCart(index)}
                style={{
                  backgroundColor: "#ff0000",
                  color: "white",
                  padding: "0.5em 1em",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove from Cart
              </button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
        </div>
      )}
      <div style={{ display: "flex", gap: "1em", marginTop: "1em" }}>
        <Link to="/" style={{ backgroundColor: "#457b9d", color: "white", padding: "1em", borderRadius: "5px" }}>
          Continue Shopping
        </Link>
        {/* Only show "Place Order" button if there are items in the cart */}
        {cart.length > 0 && (
          <button
            onClick={() => placeOrder(cart[0].name)} // Place the name of the first item as an example
            style={{
              backgroundColor: "#2a9d8f",
              color: "white",
              padding: "1em",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Place Order
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;

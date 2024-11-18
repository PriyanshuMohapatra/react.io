import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MedicineItem from "./MedicineItem";
import LoginSignup from "./LoginSignup";
import Cart from "./Cart"; 



function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAbout, setShowAbout] = useState(false);
  const [cart, setCart] = useState([]); // State for cart

  const medicines = [
    { name: "Paracetamol", price: 50 },
    { name: "Ibuprofen", price: 75 },
    { name: "Amoxicillin", price: 120 },
    { name: "Cetirizine", price: 40 },
    { name: "Aspirin", price: 30 },
    { name: "Azithromycin", price: 150 },
    { name: "Metformin", price: 60 },
    { name: "Omeprazole", price: 85 },
    { name: "Vitamin C", price: 25 },
    { name: "Lisinopril", price: 95 },
    { name: "Metoprolol", price: 110 },
    { name: "Prednisone", price: 90 },
    { name: "Amlodipine", price: 55 },
    { name: "Hydrochlorothiazide", price: 45 },
    { name: "Atorvastatin", price: 130 },
    { name: "Losartan", price: 100 },
    { name: "Doxycycline", price: 80 },
    { name: "Ciprofloxacin", price: 140 },
    { name: "Clindamycin", price: 125 },
    { name: "Levothyroxine", price: 70 },
    { name: "Gabapentin", price: 95 },
    { name: "Ranitidine", price: 60 },
    { name: "Simvastatin", price: 100 },
    { name: "Cetirizine", price: 40 },
    { name: "Fluoxetine", price: 85 },
    { name: "Sertraline", price: 90 },
    { name: "Bupropion", price: 110 },
    { name: "Montelukast", price: 75 },
    { name: "Fexofenadine", price: 70 },
    { name: "Hydroxyzine", price: 60 },
    { name: "Buspirone", price: 95 },
    { name: "Loratadine", price: 25 },
    { name: "Diazepam", price: 150 },
    { name: "Lorazepam", price: 85 },
    { name: "Clonazepam", price: 100 },
    { name: "Nitroglycerin", price: 95 },
    { name: "Sildenafil", price: 130 },
    { name: "Tadalafil", price: 140 },
    { name: "Diltiazem", price: 120 },
    { name: "Verapamil", price: 110 },
    { name: "Nifedipine", price: 100 },
    { name: "Furosemide", price: 55 },
    { name: "Spironolactone", price: 65 },
    { name: "Hydrochlorothiazide", price: 45 },
    { name: "Metoprolol", price: 110 },
    { name: "Atenolol", price: 90 },
    { name: "Carvedilol", price: 70 },
    { name: "Propranolol", price: 80 },
    { name: "Rosuvastatin", price: 95 },
    { name: "Pravastatin", price: 100 },
    { name: "Simvastatin", price: 90 },
    { name: "Gemfibrozil", price: 110 },
    { name: "Fenofibrate", price: 80 },
    { name: "Lovastatin", price: 65 },
    { name: "Baclofen", price: 70 },
    { name: "Cyclobenzaprine", price: 75 },
    { name: "Carisoprodol", price: 90 },
    { name: "Methocarbamol", price: 85 },
    { name: "Acetaminophen", price: 40 },
    { name: "Tramadol", price: 50 },
    { name: "Oxycodone", price: 95 },
    { name: "Hydrocodone", price: 120 },
    { name: "Morphine", price: 150 },
    { name: "Fentanyl", price: 200 },
    { name: "Naproxen", price: 70 },
    { name: "Celecoxib", price: 85 },
    { name: "Diclofenac", price: 60 },
    { name: "Meloxicam", price: 65 },
    { name: "Ketorolac", price: 75 },
    { name: "Piroxicam", price: 90 },
    { name: "Etodolac", price: 80 },
    { name: "Aspirin", price: 30 },
    { name: "Clopidogrel", price: 100 },
    { name: "Warfarin", price: 90 },
    { name: "Apixaban", price: 150 },
    { name: "Rivaroxaban", price: 160 },
    { name: "Dabigatran", price: 170 },
    { name: "Heparin", price: 120 },
    { name: "Enoxaparin", price: 110 },
    { name: "Fondaparinux", price: 100 },
    { name: "Amiodarone", price: 150 },
    { name: "Digoxin", price: 75 },
    { name: "Sotalol", price: 80 },
    { name: "Atenolol", price: 90 },
    { name: "Metoprolol", price: 110 },
    { name: "Carvedilol", price: 95 },
    { name: "Lisinopril", price: 100 },
    { name: "Ramipril", price: 90 },
    { name: "Enalapril", price: 85 },
    { name: "Losartan", price: 130 },
    { name: "Irbesartan", price: 140 },
    { name: "Olmesartan", price: 120 },
    { name: "Telmisartan", price: 110 },
    { name: "Azilsartan", price: 100 },
    { name: "Diltiazem", price: 120 },
    { name: "Verapamil", price: 100 },
    { name: "Nifedipine", price: 90 },
    { name: "Amiodarone", price: 150 },
    { name: "Dabigatran", price: 140 },
    { name: "Rivaroxaban", price: 160 },
    { name: "Apixaban", price: 170 },
    { name: "Warfarin", price: 100 },
    { name: "Clopidogrel", price: 90 },
    { name: "Prasugrel", price: 85 },
    { name: "Dipyridamole", price: 75 },
    { name: "Aspirin", price: 30 },
    // ... Add all the other medicines
  ];

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          backgroundImage:
            'url("https://img.freepik.com/free-vector/nice-blue-background-about-medical-science_1017-4479.jpg?t=st=1730866912~exp=1730870512~hmac=9cff7372acac13f1da7b94915b31135735f797065eab6038b38bd28f66286919&w=740")',
          backgroundSize: 'cover',
          backgroundRepeat: "no-repeat",
          padding: "2em",
          color: "white",
        }}
      >
        <div>
          <nav
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1em",
              borderRadius: "10px",
              color: "white",
              marginBottom: "2em",
            }}
          >
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search medicines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: "0.5em",
                borderRadius: "5px",
                marginRight: "1em",
                marginLeft: "auto",
              }}
            />

            {/* Cart Link */}
            
            <Link
              to="/cart"
              style={{
                backgroundColor: "#457b9d",
                color: "white",
                padding: "0.5em 1em",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginLeft: "20px",
                
                alignItems: "center"
              }}
            >
               <img
    src="https://i.pinimg.com/564x/7f/24/92/7f249252404646c08d90976505cb6937.jpg"
    alt="Cart Logo"
    style={{ width: "40px", height: "30px", marginRight: "8px" }}
  />
              {cart.length}
            </Link>

            {/* Login/Signup Link */}
            <Link
              to="/login-signup"
              style={{
                backgroundColor: "#457b9d",
                color: "white",
                padding: "0.5em 1em",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              Login
            </Link>
            
            {/* About Button */}
            <button
              onClick={() => setShowAbout(!showAbout)}
              style={{
                backgroundColor: "#457b9d",
                color: "white",
                padding: "0.5em 1em",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              About
            </button>
          </nav>

          {/* About Section */}
          {showAbout && (
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "1.5em",
                borderRadius: "10px",
                color: "#333",
                textAlign: "center",
                marginBottom: "2em",
              }}
            >
              <h2>Contact Information</h2>
              <p>
                <strong>Address:</strong> Nabarangpur, Odisha 764059
              </p>
              <p>
                <strong>Phone:</strong> +91-8917361453
              </p>
            </div>
          )}

          {/* Routing */}
          <Routes>
            <Route path="/" element={
              <div>
                <header style={{ textAlign: "center", marginBottom: "1.5em" }}>
                  <h1 style={{ fontSize: "2.8em", fontWeight: "bold" }}>Swati Medical Store</h1>
                  <p style={{ fontSize: "1.3em" }}>Reliable, Quality Medicines at Your Doorstep</p>
                </header>

                <section>
                  <h2
                    style={{
                      textAlign: "center",
                      fontSize: "2em",
                      color: "white",
                      marginBottom: "1em",
                    }}
                  >
                    Available Medicines
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "1em",
                      justifyContent: "center",
                    }}
                  >
                    {filteredMedicines.length > 0 ? (
                      filteredMedicines.map((medicine, index) => (
                        <MedicineItem
                          key={index}
                          name={medicine.name}
                          price={medicine.price}
                          addToCart={addToCart} // Pass the function to add to cart
                        />
                      ))
                    ) : (
                      <p>No medicines found</p>
                    )}
                  </div>
                </section>
              </div>
            } />
            <Route path="/login-signup" element={<LoginSignup />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          </Routes>

          {/* Footer Section */}
          <footer
            style={{
              textAlign: "center",
              padding: "1em",
              marginTop: "2em",
              fontSize: "0.9em",
            }}
          >
            &copy; 2024 Swati Medical Store. All rights reserved.
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;

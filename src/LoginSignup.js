import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false); // Flag to toggle between Login and Signup
  const [users, setUsers] = useState([{ email: "test@example.com", password: "password123" }]); // Dummy data
  const navigate = useNavigate();

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      alert("Login successful!");
      navigate("/"); // Redirect to medicine page
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  // Handle Signup
  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Check if the user is already registered
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      alert("User already exists!");
      return;
    }

    // Add new user to the users array (in a real app, you'd save this to a database)
    setUsers([...users, { email, password }]);
    alert("Signup successful! You can now log in.");
    setIsSignedUp(false); // Switch to login view after successful signup
  };

  return (
    <div 
    style={{
      maxWidth: "350px", margin: "auto", padding: "2em", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#bbb"
    }}>
        
      <h2 style={{ textAlign: "center", marginBottom: "1em" }}>{isSignedUp ? "Sign Up" : "Login"}</h2>
      <form onSubmit={isSignedUp ? handleSignup : handleLogin}>
        <div style={{ marginBottom: "1em" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%", padding: "0.8em", marginTop: "0.5em", borderRadius: "4px", border: "1px solid #ddd"
            }}
          />
        </div>
        <div style={{ marginBottom: "1em" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%", padding: "0.8em", marginTop: "0.5em", borderRadius: "4px", border: "1px solid #ddd"
            }}
          />
        </div>
        {isSignedUp && (
          <div style={{ marginBottom: "1em" }}>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{
                width: "100%", padding: "0.8em", marginTop: "0.5em", borderRadius: "4px", border: "1px solid #ddd"
              }}
            />
          </div>
        )}
        <div style={{ marginBottom: "1.5em" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "#457b9d", color: "white", padding: "0.8em", border: "none", borderRadius: "4px", cursor: "pointer", width: "100%",
            }}
          >
            {isSignedUp ? "Sign Up" : "Login"}
          </button>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            onClick={() => setIsSignedUp(!isSignedUp)}
            style={{
              backgroundColor: "#f4a261", color: "white", padding: "0.8em", border: "none", borderRadius: "4px", cursor: "pointer", width: "100%",
            }}
          >
            {isSignedUp ? "Switch to Login" : "Switch to Signup"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;

// src/OrderForm.js
import React, { useState } from 'react';

const OrderForm = ({ cake, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        quantity: 1
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        alert(`Order submitted for ${formData.quantity} ${cake.name}(s) by ${formData.name} (${formData.email})`);
        onClose(); // Close the form after submission
    };

    return (
        <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            width: '90%',
            maxWidth: '500px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            position: 'relative'
        }}>
            <h2>Order {cake.name}</h2>
            <form onSubmit={handleSubmit}>
                <label style={{ display: 'block', margin: '10px 0' }}>
                    Name:
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }} 
                        required 
                    />
                </label>
                <label style={{ display: 'block', margin: '10px 0' }}>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }} 
                        required 
                    />
                </label>
                <label style={{ display: 'block', margin: '10px 0' }}>
                    Quantity:
                    <input 
                        type="number" 
                        name="quantity" 
                        value={formData.quantity} 
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }} 
                        min="1" 
                        required 
                    />
                </label>
                <button type="submit" style={{
                    backgroundColor: '#333',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '10px'
                }}>
                    Submit
                </button>
                <button type="button" onClick={onClose} style={{
                    backgroundColor: '#ccc',
                    color: '#333',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '10px',
                    marginLeft: '10px'
                }}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default OrderForm;

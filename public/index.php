<?php
if (isset($_GET['medicine'])) {
    $medicine = htmlspecialchars($_GET['medicine']);
} else {
    $medicine = 'Unknown Medicine';
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Medicine - Swati Medical Store</title>
    <style>
        
        body {
            font-family: 'Arial', sans-serif;
            background: #f0f4f8;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        /* Gradient Background and Container */
        .background {
            background: linear-gradient(135deg, #89d4cf, #6e45e2);
            position: fixed;
            width: 100%;
            height: 100%;
            z-index: -1;
            top: 0;
            left: 0;
            overflow: hidden;
        }

        .container {
            width: 420px;
            max-width: 90%;
            background: white;
            padding: 2em;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            animation: fadeIn 0.6s ease-in-out;
            position: relative;
            text-align: center;
        }

        /* Header Styles */
        .header {
            text-align: center;
            color: #34495e;
        }

        .header h1 {
            font-size: 2.2em;
            margin-bottom: 0.3em;
        }

        .header p {
            font-size: 1em;
            color: #7f8c8d;
            margin-top: 0;
        }

        /* Form Styles */
        form {
            margin-top: 1.5em;
        }

        form label {
            display: block;
            font-weight: bold;
            margin-bottom: 0.5em;
            color: #2c3e50;
        }

        form input[type="text"],
        form input[type="number"] {
            width: 100%;
            padding: 0.9em;
            margin-bottom: 1.2em;
            border: 1px solid #ccc;
            border-radius: 8px;
            transition: all 0.3s;
        }

        form input[type="text"]:focus,
        form input[type="number"]:focus {
            border-color: #6e45e2;
            box-shadow: 0 0 5px rgba(110, 69, 226, 0.2);
            outline: none;
        }

        /* Button */
        button {
            width: 100%;
            padding: 1em;
            background: #6e45e2;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1em;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-top: 1em;
        }

        button:hover {
            background: #9b59b6;
        }

        /* Contact Info */
        .contact-info {
            margin-top: 2em;
            color: #2c3e50;
            font-size: 0.9em;
        }

        .contact-info h3 {
            font-size: 1.2em;
            margin-bottom: 0.5em;
        }

        .contact-info p {
            margin: 0.3em 0;
        }

        /* Keyframes for Animations */
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
    </style>
</head>
<body>
    <!-- Background Gradient Overlay -->
    <div class="background"></div>

    <!-- Main Container -->
    <div class="container">
        <div class="header">
            <h1>Swati Medical Store</h1>
            <p>Address: Nabarangpur, Odisha 764059 | Phone: 8917361453 | Email: priyanshu111@gmail.com</p>
        </div>

        <form action="submit.php" method="POST">
            <label for="name">Your Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="address">Delivery Address:</label>
            <input type="text" id="address" name="address" required>

            
           

            <button type="submit">Place Order</button>
        </form>

        <div class="contact-info">
            <h3>Contact Us</h3>
            <p>Phone: 8917361453</p>
            <p>Email: priyanshu111@gmail.com</p>
            <p>Address: Nabarangpur, Odisha 764059</p>
        </div>
    </div>
</body>
</html>
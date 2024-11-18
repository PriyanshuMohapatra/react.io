<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $address = htmlspecialchars($_POST['address']);
    
    

    echo "
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Order Confirmation</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }

            .confirmation-container {
                width: 400px;
                max-width: 90%;
                background: white;
                padding: 2em;
                border-radius: 15px;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
                text-align: center;
            }

            .confirmation-container h1 {
                font-size: 2em;
                color: #27ae60;
                margin-bottom: 1em;
            }

            .confirmation-container p {
                font-size: 1.2em;
                color: #2c3e50;
                margin-bottom: 1.5em;
            }

            .confirmation-container a {
                display: inline-block;
                padding: 0.8em 1.5em;
                font-size: 1em;
                color: white;
                background-color: #2980b9;
                border-radius: 8px;
                text-decoration: none;
                transition: background-color 0.3s;
            }

            .confirmation-container a:hover {
                background-color: #3498db;
            }
        </style>
    </head>
    <body>
        <div class='confirmation-container'>
            <h1>Order Confirmation</h1>
            <p>Thank you, $name! Your order has been received and will be delivered to:</p>
            <p>$address</p>
            <a href='http://localhost:3000/'>Order More</a>
        </div>
    </body>
    </html>
    ";
}
?>

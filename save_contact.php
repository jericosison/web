<?php
// Retrieve the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Create a connection to the MySQL database
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "contacts"; // Replace with the name of your database

$conn = new mysqli($servername, $username, $password, $dbname);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute the SQL statement to insert the contact data into the table
$sql = "INSERT INTO contact_table (name, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "MESSAGE SENT SUCCESSFULLY";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>

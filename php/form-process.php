<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Include PHPMailer classes
require 'PhpMailer/PHPMailer.php';
require 'PhpMailer/Exception.php';
require 'PhpMailer/SMTP.php';

// Create an instance of PHPMailer
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();                                           // Use SMTP
    $mail->Host       = 'smtp.example.com';                     // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                  // Enable SMTP authentication
    $mail->Username   = 'gdrajan.sharma@gmail.com';              // SMTP username
    $mail->Password   = 'aftq dprc jbbj eajt';                       // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;          // Enable TLS encryption
    $mail->Port       = 587;                                   // TCP port to connect to

    // Recipients
    $mail->setFrom('gdrajan.sharma@gmail.com', 'Your Name');     // Sender's email and name
    $mail->addAddress('gdrajan.sharma@gmail.com');               // Add a recipient

    // Content
    $mail->isHTML(true);                                      // Set email format to HTML
    $mail->Subject = 'Contact Form Submission';
    $mail->Body    = 'Name: ' . htmlspecialchars($_POST['name']) . '<br>' .
                     'Email: ' . htmlspecialchars($_POST['email']) . '<br>' .
                     'Message: ' . nl2br(htmlspecialchars($_POST['message']));

    // Send email
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
?>

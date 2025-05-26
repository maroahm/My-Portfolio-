<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $to = "omarsms25@gmail.com";

    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    echo "Message sent!";
}
?>
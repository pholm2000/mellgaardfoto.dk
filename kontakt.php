<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Modtagerens email
    $to = "your_email@example.com";

    // Sæt emailens emne
    $email_subject = "Ny indsendelse af email: $subject";

    // Byg email indholdet
    $email_body = "Navn: $name\n";
    $email_body .= "Email: $email\n\n";
    $email_body .= "Besked:\n$message";

    // Yderligere headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send emailen
    if (mail($to, $email_subject, $email_body, $headers)) {
        header("Location: tak.html");
        exit;
    } else {
        header("Location: error.html");
        exit;
    }
}
?>

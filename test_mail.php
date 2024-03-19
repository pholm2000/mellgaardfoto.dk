<?php
var_dump($_POST);
$to = 'test@test.test';
$subject = 'Test Email';
$message = 'Tester mail system.';
$headers = 'From: test@test.test' . "\r\n" .
    'Reply-To: test@test.test' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo 'Mail sendt!';
} else {
    echo 'Mail ikke sendt!';
}
?>

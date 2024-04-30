<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['Name']);
    $email = htmlspecialchars($_POST['Email']);
    $subject = htmlspecialchars($_POST['Subject']);
    $message = htmlspecialchars($_POST['Message']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
    } else {
        $to = 'zezozahrawi@gmail.com';
        $subject = "New Message from Website: $subject";
        $body = "You have received a new message from your website form:\n\nName: $name\nEmail: $email\nMessage:\n$message";
        $headers = "From: noreply@yourdomain.com\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        if (mail($to, $subject, $body, $headers)) {
            echo "Thank you for your message.";
        } else {
            echo "Mail sending failed.";
        }
    }
} else {
    echo "No data submitted.";
}
?>

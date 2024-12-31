<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = htmlspecialchars($_POST['firstName']);
    $last_name = htmlspecialchars($_POST['lastName']);
    $company = htmlspecialchars($_POST['company']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $recaptcha_secret = 'your-secret-key'; // Replace with your Google Secret Key
    $recaptcha_response = $_POST['g-recaptcha-response'];
    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
 
    $recaptcha_data = [
        'secret' => $recaptcha_secret,
        'response' => $recaptcha_response
    ];

    $recaptcha_verify = file_get_contents($recaptcha_url . '?' . http_build_query($recaptcha_data));
    $recaptcha_result = json_decode($recaptcha_verify);

    if ($recaptcha_result->success) {
        $client_email = "sonti8747@gmail.com"; // Admin email
        $client_subject = "New Contact Form Submission";
        $client_message = "New contact form submission:\n\nName: $first_name $last_name\nCompany: $company\nPhone: $phone\nEmail: $email\nMessage: $message";

        $client_headers = "From: no-reply@yourdomain.com";

        if (mail($client_email, $client_subject, $client_message, $client_headers)) {
            echo "<h2>Your message has been sent successfully!</h2>";
        } else {
            echo "<h2>There was an issue sending your message. Please try again later.</h2>";
        }
    } else {
        echo "<h2>reCAPTCHA verification failed. Please try again.</h2>";
    }
} else {
    header("Location: contact-form.html");
    exit();
}
?>

<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

ini_set('display_errors', 0);

require 'vendor/autoload.php';


function input_clean($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Pobierz adres e-mail przesłany w żądaniu POST

$request_headers = getallheaders();

if ($request_headers['referer'] != 'https://marketingv8.co/') die('Go away!');

$email  = input_clean($_POST['email']);
$name   = input_clean($_POST['Company_Name']);
$phone  = input_clean($_POST['Contact_Number']);

// Sprawdź, czy przesłano adres e-mail
if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = false;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.iq.pl';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'noreply@marketingv8.co';                     //SMTP username
        $mail->Password   = 'sDuFlpOotoor0hcKtDfi';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('noreply@marketingv8.co', 'Marketing V8 Forms');
        $mail->addAddress('dev@scharmach.pl', 'Marketing V8 Office');     //Add a recipient
        $mail->addReplyTo($email, 'Information');

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Message from webpage';
        $mail->Body    = '<strong>Company Name:</strong> ' . $name . '<br/><strong>Phone:</strong> ' . $phone . '<br/><strong>E-mail:</strong> ' . $email;

        $mail->send();

        // Zwróć odpowiedź sukcesu
        echo json_encode([
            'error'   => false,
            'message' => "Wiadomość wysłana poprawnie."
        ]);
    } catch (Exception $e) {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode([
            'error'   => true,
            'message' => "Nieprawidłowe żądanie. Błąd serwera."
        ]);
    }
} else {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode([
        'error'   => true,
        'message' => "Nieprawidłowe żądanie. Brak adresu e-mail."
    ]);
}

<?php

// ini_set('display_errors', 0);

define('DB_HOST', 'localhost');
define('DB_NAME', 'admin_v8mails');
define('DB_USER', 'admin_v8mails');
define('DB_PASS', 'pUXw1FEe35hXi%#@');

// Pobierz adres e-mail przesłany w żądaniu POST

// var_dump($_POST);

header('Content-Type: application/json; charset=utf-8');
$email = $_POST['email'];

// Sprawdź, czy przesłano adres e-mail
if (!empty($email)) {
    // Zapisz adres e-mail do pliku

    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        echo json_encode([
            'error'   => true,
            'message' => "Błąd połączenia"
        ]);
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = 'INSERT INTO subscribers (mail, date_add, active) VALUES ("' . $email . '", FROM_UNIXTIME(' . time() . '), "1")';

    if ($conn->query($sql) === TRUE) {
        // Zwróć odpowiedź sukcesu
        echo json_encode([
            'error'   => false,
            'message' => "Adres e-mail $email został dodany do listy subskrybentów."
        ]);
    } else {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode([
            'error'   => true,
            'message' => "Błąd zapisu"
        ]);;
    }

    $conn->close();

    // echo "Adres e-mail $email został dodany do listy subskrybentów.";
} else {
    // Zwróć błąd, jeśli nie przesłano adresu e-mail

    header('HTTP/1.1 400 Bad Request');
    echo json_encode([
        'error'   => true,
        'message' => "Nieprawidłowe żądanie. Brak adresu e-mail."
    ]);
}

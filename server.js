const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

// Umożliwienie żądań z innych domen
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://v8.scharmach.pl:80');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Endpoint obsługujący wysyłkę formularza
app.post('/api/send-email', (req, res) => {
  const { companyName, contactNumber, email } = req.body;

  // Tworzenie transporteru poczty
  const transporter = nodemailer.createTransport({
    host: 'smtp.iq.pl',
    port: 465,
    secure: true,
    auth: {
      user: 'michal@scharmach.pl',
      pass: 'e6Mp5Z1zyVDmi45r2iOD',
    },
  });

  // Konfiguracja wiadomości e-mail
  const mailOptions = {
    from: 'SENDER_EMAIL',
    to: 'michal@scharmach.pl',
    subject: 'Formularz kontaktowy',
    text: `
      Company Name: ${companyName}
      Contact Number: ${contactNumber}
      Email: ${email}
    `,
  };

  // Wysyłanie wiadomości e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Błąd podczas wysyłania e-maila:', error);
      res.status(500).json({ error: 'Wystąpił błąd podczas wysyłania e-maila' });
    } else {
      console.log('E-mail został wysłany:', info.response);
      res.status(200).json({ message: 'E-mail został wysłany' });
    }
  });
});

app.listen(3001, () => {
  console.log('Serwer jest uruchomiony na porcie 3001');
});

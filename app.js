import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { google } from 'googleapis';

dotenv.config();

const app = express();

// CORS configuration to allow both localhost and production
app.use(cors({
  origin: ['https://newweb-alpha.vercel.app'],
  methods: 'GET,POST',
  credentials: true
}));

app.use(bodyParser.json());

// Google OAuth2 client setup for Gmail API
const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_OAUTH_CLIENT_ID,
  process.env.GOOGLE_OAUTH_CLIENT_SECRET,
  process.env.GOOGLE_OAUTH_REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.GOOGLE_OAUTH_REFRESH_TOKEN });

// Mail sending function using Nodemailer with OAuth2
async function sendMail(name, email, message) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'gdrajan.sharma@gmail.com', // Replace with your Gmail account
        clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
        clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_OAUTH_REFRESH_TOKEN,
        accessToken: accessToken.token
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: 'gdrajan.sharma@gmail.com',
      subject: `Message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error('Error sending mail:', error);
    throw error;
  }
}

// POST route to handle form submissions from the frontend
app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const result = await sendMail(name, email, message);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

// Verify backend is running
app.get('/', (req, res) => {
  res.send('Backend is running. You should be submitting a form from the frontend.');
});

// Set the port number (defaults to 5000 if not set in environment)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

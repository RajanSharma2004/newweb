import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config(); // Ensure to load the .env variables if you are using .env

// These should come from the .env file or use directly as below
const CLIENT_ID = process.env.CLIENT_ID || '816390909755-ugg8id38rfv6uldh5kssra4fuu44oovn.apps.googleusercontent.com';
const CLIENT_SECRET = process.env.CLIENT_SECRET || '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';
const REDIRECT_URI = process.env.REDIRECT_URI || 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = process.env.REFRESH_TOKEN || '1//04clRf6cn-GiZCgYIARAAGAQSNwF-L9IrW4K4YT3hCz1eDHB1ZdC9v9UA8mOMbZd3mMCoLltFWHa6oyvKADqMXiVTIlB6GLHCTi8';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'gdrajan.sharma@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token, // Correctly retrieve the access token
      },
    });

    const mailOptions = {
      from: 'gdrajan.sharma@gmail.com>',
      to: 'gdrajan.sharma@gmail.com',
      subject: 'Hello from Gmail API',
      text: 'Hello from Gmail API',
      html: '<h1>Hello from Gmail API</h1>',
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

sendMail()
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log('Error:', error.message));

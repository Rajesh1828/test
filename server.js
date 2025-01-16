const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join('C:/Users/sonti/OneDrive/Desktop/Dad Main'))); // Serve static files

// Enable CORS (if needed for cross-origin requests)
const cors = require('cors');
app.use(cors());

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Save files to "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique file name
  },
});
const upload = multer({ storage });

// Route to handle form submission
app.post('/submit-application', upload.single('portfolioFile'), (req, res) => {
  const {
    fullName,
    email,
    phone,
    linkedin,
    portfolio,
    position,
    workType,
    skills,
    passion,
    experience,
    availability,
  } = req.body;

  const uploadedFile = req.file ? req.file.path : 'No file uploaded';

  // Nodemailer setup using environment variables
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email from .env
      pass: process.env.EMAIL_PASS, // Your app password from .env
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender's email address
    to: process.env.EMAIL_USER, // Receiver's email address
    subject: `Job Application from ${fullName}`,
    text: `
      A new job application has been submitted!

      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      LinkedIn: ${linkedin || 'Not provided'}
      Portfolio Link: ${portfolio || 'Not provided'}
      Position: ${position}
      Work Type: ${workType}
      Skills & Expertise: ${skills}
      Passion: ${passion}
      Years of Experience: ${experience}
      Availability: ${availability}

      Uploaded File: ${uploadedFile}
    `,
    attachments: req.file
      ? [
          {
            filename: req.file.originalname,
            path: uploadedFile,
          },
        ]
      : [],
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'Failed to send application.' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ success: true, message: 'Application submitted successfully.' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-code', async (req, res) => {
  const { email } = req.body;
  const code = Math.floor(1000 + Math.random() * 9000); // 4-digit code

  // Save the code in your database or memory store (for demo, skip)
  console.log(`Sending code ${code} to ${email}`);

  // Configure email transport (use Gmail or other SMTP)
 const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for 587
  auth: {
    user: "shudufhadzo118@gmail.com",
    pass: "yfxr icat tsaj ekjm",
  },
});

  const mailOptions = {
    from: 'EmployeeVerification@gmail.com',
    to: email,
    subject: 'Your Verification Code',
    text: `Your verification code is: ${code}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, code });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
});


app.listen(5000, () => console.log('Server running on port 5000'));

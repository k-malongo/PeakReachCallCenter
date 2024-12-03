require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const nodemailer = require("nodemailer");
const cors = require("cors");


const app = express();

app.use(cors());

// Middleware to handle file uploads
app.use(fileUpload());

app.get("/", (req, res) => res.send("Express on Vercel"));


app.post("/send-email", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const cv = req.files ? req.files.cv : null;

    if (!cv) {
      return res.status(400).send("No file uploaded.");
    }

    // Validate file
    if (!cv.mimetype.startsWith("application/")) {
      return res.status(400).send("Invalid file type. Please upload a document.");
    }
    if (cv.size > 5 * 1024 * 1024) {
      return res.status(400).send("File size exceeds 5MB.");
    }


    // Email setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: "malongokelvin11@gmail.com",
      subject: `Job Application from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      attachments: [
        {
          filename: cv.name,
          content: cv.data,
        },
      ],
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Error sending email.");
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

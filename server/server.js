const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(express.json());

app.use(cors());

dotenv.config(); // Load environment variables from .env file

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Define your route
app.post("/send-mail", async (req, res) => {
  const { email, subject, text } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: Number(process.env.EMAIL_PORT),
      secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: [email, "shop@theboys.run"],
      subject: subject,
      text: text,
    });
    console.log("Email Sent Successfully");
    res.status(200).send("Email Sent Successfully");
  } catch (error) {
    console.log("Email not sent");
    console.log(error);
    res.status(500).send("Email not sent");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

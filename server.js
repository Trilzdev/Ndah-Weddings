require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.post("/api/send-email", (req, res) => {
  const {
    fullname,
    date,
    email,
    phone,
    adInfo,
    startTime,
    endTime,
    guests,
    selectedOption,
  } = req.body;
  console.log("Server connected");
  const messageTemplate = `
  Greetings, this is an new booking from a customer with the details below;
    Fullname: ${fullname}
    Customer Email: ${email}
    Customer phone number: ${phone}
    Session Type : ${selectedOption}
    Date: ${date}
    Start Time : ${startTime}
    End Time: ${endTime}
    Number of Guests: ${guests}
    Additional Information: ${adInfo}
  `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: "New client inquiry",
    text: messageTemplate,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Email sending failed" });
    } else {
      console.log("Email sent:", info.response);
      res.json({ message: "Email sent successfully" });
    }
  });
});

const PORT = process.env.PORT || 3001;
const IP = "192.168.245.144";
app.listen(PORT, IP, () => {
  console.log(`Server is running on port ${IP + ":" + PORT}`);
});

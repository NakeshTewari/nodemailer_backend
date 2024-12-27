const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();
const fs = require("fs");

const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });

router.post("/send", uploadMiddleware.single("file"), async (req, res) => {
  const { email, text , userEmail, appPassword} = req.body;
  console.log(req.body);
  console.log(req.file);

  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;

  fs.renameSync(path, newPath);

  // console.log(req);
  const transporter = nodemailer.createTransport({
    service: "gmail",

    port: 465,
    secure: true,
    auth: {
      user: userEmail,
      pass: appPassword,
    },
  });

  const mailOptions = {
    from: process.env.USER,
    to: [email],
    subject: "Node js mail testing!",
    text: `${text}`,
    attachments: [
      // {   // utf-8 string as an attachment
      //   filename: 'text1.txt',
      //   content: 'hello world!'
      // },
      {
        // binary buffer as an attachment
        filename: originalname,
        path: newPath,
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, emailResponse) => {
    if (error) throw error;
    res.status(200).json(`Email send successfully to ${email}!`);

    response.end();
  });

  // const sendMail = async (transporter, mailOptions) => {
  //   try {
  //     const response = await transporter.sendMail(mailOptions);
  //     if (response) res.json("email send successfully");
  //     else res.json("email not send");
  //   } catch (error) {
  //     res.json({ error });
  //   }
  // };

  // sendMail(transporter, mailOptions);
});

module.exports = router;

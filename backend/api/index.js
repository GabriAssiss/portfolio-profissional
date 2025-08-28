import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv/lib/main";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Nova mensagem de ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ success: true, message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erro ao enviar email." });
  }
});

app.listen(port, () => {
  console.log("Servidor rodando na porta 5000");
});

module.exports = app

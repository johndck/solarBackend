import express from "express";
import sgMail from "@sendgrid/mail";
import { config } from "dotenv";
config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
app.use(express.json());

const sendEmailRouter = express.Router();

sendEmailRouter.post("/", async (req, res) => {
  const { to, subject, text } = req.body;
  const msg = {
    to,
    from: "johnturnerdick@gmail.com",
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send("Email has been sent successfully JD");
  } catch (error) {
    console.error(error);
    if (error.response) {
      res.status(500).send("We could not send email");
    }
  }
});

export default sendEmailRouter;

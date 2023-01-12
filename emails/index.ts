import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import nodemailer from "nodemailer";
import { buildSendMail } from "mailing-core";

dotenv.config({ path: `${process.cwd()}/.env.local` })

const opt = {
  port: process.env.SMTP_PORT as string,
  host: process.env.SMTP_SERVER as string,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
  secure: false,
}
const transport = nodemailer.createTransport(opt)

const sendMail = buildSendMail({
  transport,
  defaultFrom: "dev@konst-teknik.se",
  configPath: "./mailing.config.json",
});

export default sendMail;

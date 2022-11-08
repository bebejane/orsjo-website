import nodemailer from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  try {

    const { subject, name, email, text } = req.body

    const transporter = nodemailer.createTransport({
      port: process.env.SMTP_PORT,
      host: process.env.SMTP_SERVER,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
      secure: false,
    })

    const mailData = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.SMTP_CONTACT_EMAIL,
      replyTo: email,
      subject,
      text: `${text}\n\n${name}\n<${email}>`
    }

    transporter.sendMail(mailData, (err, info) => {
      res.status(err ? 500 : 200)
      console.error(err)
      console.log(info)
    })

  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
}
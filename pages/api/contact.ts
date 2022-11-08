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
      from: `${name} <${email}>`,
      to: process.env.SMTP_FROM_EMAIL,
      subject,
      text
    }

    transporter.sendMail(mailData, (err, info) => {
      if (err)
        res.status(500)
      else
        res.status(200)

      console.error(err)
      console.log(info)
    })


  } catch (err) {

    res.status(500).json({ error: true, message: err.message });
  }
}
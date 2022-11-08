import nodemailer from 'nodemailer'
import * as EmailValidator from 'email-validator';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  try {

    const { subject, name, email, text } = req.body

    if (!subject || !name || !EmailValidator.validate(email) || !text) {
      const errors = []

      if (!subject)
        errors.push('Subject is empty')
      if (!name)
        errors.push('Name is empty')
      if (!email)
        errors.push('E-mail address is empty')
      else if (!EmailValidator.validate(email))
        errors.push('E-mail address is invalid')
      if (!text)
        errors.push('Message is empty')

      return res.status(500).json({ error: true, message: errors.join('. ') })
    }

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
      if (err)
        res.status(500).json({ error: true, message: err.message });
      else
        res.status(200).json({ success: true })
      console.error(err)
      console.log(info)
    })

  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
}
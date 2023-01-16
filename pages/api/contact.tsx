import nodemailer from 'nodemailer'
import * as EmailValidator from 'email-validator';
import type { NextApiRequest, NextApiResponse } from 'next'
import sendMail from '/emails';
import ContactAutoReply from '/emails/ContactAutoReply';

const envKeys = ['SMTP_SERVER', 'SMTP_PORT', 'SMTP_EMAIL', 'SMTP_FROM_EMAIL', 'SMTP_CONTACT_EMAIL']

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {

    if (envKeys.find(k => !process.env[k]))
      throw 'SMTP config missing in .env file'

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
      from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_CONTACT_EMAIL,
      replyTo: email,
      subject,
      text: `${text} \n\n${name}\n${email} `
    }

    console.log('sending email...');

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err, info) => err ? reject(err) : resolve(info))
    })
    await sendMail({ to: email, from: process.env.SMTP_CONTACT_EMAIL, subject: 'Contact (auto-reply)', component: <ContactAutoReply name={name} /> })
    console.log('sent email from', email);
    res.status(200).json({ success: true })

  } catch (err) {
    console.error(err)
    res.status(500).json({ error: true, message: err.message });
  }
}
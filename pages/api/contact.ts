import nodemailer from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req : NextApiRequest, res: NextApiResponse) {
  
  const { subject, name, email, text} = JSON.parse(req.body)

  const transporter = nodemailer.createTransport({
    port: process.env.SMTP_PORT,
    host: process.env.SMTP_SERVER,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    secure: true,
  })

  const mailData = {
    from: `${name} <${email}>`,
    to: process.env.SMTP_FROM_EMAIL,
    subject,
    text
  }
  

  setTimeout(()=> res.status(200).json({success:true}), 2000)
  
  /*
  transporter.sendMail(mailData,(err, info) => {
    if(err)
      res.status(500)
    else
      res.status(200)

    console.error(err)
    console.log(info)
  })
  */

}
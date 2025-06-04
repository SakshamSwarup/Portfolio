// app/api/contact/route.js
import nodemailer from 'nodemailer'

export async function POST(req) {
  const { name, email, phone, message } = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error('Email failed:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      },
    )
  }
}

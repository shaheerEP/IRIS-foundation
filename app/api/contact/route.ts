import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Send email using Resend
    const data = await resend.emails.send({
      from: "IRIS Foundation <onboarding@resend.dev>", // Uses the default free domain
      to: ["irisfoundation2023@gmail.com"], // Sending to the admin
      replyTo: email, // Allow replying directly to the user
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <div>
          <h1>New Message from ${name}</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    })

    console.log("Email sent successfully:", data)

    return NextResponse.json({ success: true, message: "Message received successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to process message" }, { status: 500 })
  }
}

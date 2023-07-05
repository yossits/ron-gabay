import { NextRequest, NextResponse } from "next/server";
import { mailOptions, transporter } from "@/config/nodemailer";

export const POST = async (request = NextRequest, response = NextResponse) => {
  try {
    const { fullName, email, phone, message } = await request.json();
    console.log(fullName, email, phone, message);

    await transporter.sendMail({
      ...mailOptions,
      subject: "You got a new request",
      text: "this is a text string",
      html: `
        <div style="text-align:right;">
          <h1>קיבלת פנייה חדשה מהאתר שלך:</h1>
          <p>שם מלא: ${fullName}</p>
          <p>דואר אלקטרוני: ${email}</p>
          <p>טלפון: ${phone}</p>
          <p>הודעה: ${message}</p>
        </div>
        `,
    });

    return NextResponse.json({ message: "Post created successfully" });
  } catch (error) {
    return NextResponse.error({
      message: "An error occurred while processing your request",
      error: error.toString(),
    });
  }
};

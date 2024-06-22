import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
    try {
        const { message, email, name } = await req.json();

        const resend = new Resend(process.env.RESEND_API_KEY || '');

        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'bennyrichaa17@gmail.com',
            subject: 'You have been contacted!',
            html: `
            <h3>Hello Richaa,</h3>
            <li> You have been contacted by ${name}</li>
            <li> email: ${email}</li>
            <li> message: ${message}</li> 
            `
        })

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}
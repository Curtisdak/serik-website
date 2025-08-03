import { NextResponse } from "next/server";
import {Resend} from "resend"


const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req:Request){

    const body = await req.json()
    const {name, email, message, subject} = body

    try{
        const data = await resend.emails.send({
            from:`From SERIK.IO  <onboarding@resend.dev>`,
            to:`curtis.dakouri@gmail.com`,
            subject:subject || `${subject}`,
            html:`
             <p><strong>Nom:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong><br/>${message}</p>
            `,
        })

        return NextResponse.json({success:true, data})
    }catch(error){
        console.error(error, "errreur d'envoi d'email")
        return NextResponse.json({success:false, error})
    }
}

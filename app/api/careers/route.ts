import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName")?.toString() ?? "";
    const lastName = formData.get("lastName")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const countryCode = formData.get("countryCode")?.toString() ?? "";
    const phoneNumber = formData.get("phoneNumber")?.toString() ?? "";
    const currentLocation = formData.get("currentLocation")?.toString() ?? "";
    const countryState = formData.get("countryState")?.toString() ?? "";
    const areaOfExpertise = formData.get("areaOfExpertise")?.toString() ?? "";
    const preferredCompany = formData.get("preferredCompany")?.toString() ?? "";
    const yearsOfExperience = formData.get("yearsOfExperience")?.toString() ?? "";
    const linkedinProfile = formData.get("linkedinProfile")?.toString() ?? "";
    const professionalSummary = formData.get("professionalSummary")?.toString() ?? "";
    const resume = formData.get("resume") as File | null;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const attachments = [];
    if (resume && resume.size > 0) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      attachments.push({ filename: resume.name, content: buffer });
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL as string,
      to: process.env.CAREERS_TO_EMAIL as string,
      replyTo: email,
      subject: `New Career Application from ${firstName} ${lastName}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${countryCode} ${phoneNumber}</p>
        <p><strong>Current Location:</strong> ${currentLocation}</p>
        <p><strong>Country/State:</strong> ${countryState}</p>
        <p><strong>Area of Expertise:</strong> ${areaOfExpertise}</p>
        <p><strong>Preferred Company/Subsidiary:</strong> ${preferredCompany}</p>
        <p><strong>Years of Experience:</strong> ${yearsOfExperience}</p>
        <p><strong>LinkedIn:</strong> ${linkedinProfile}</p>
        <p><strong>Professional Summary:</strong></p>
        <p>${professionalSummary.replace(/\n/g, "<br/>")}</p>
      `,
      attachments,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to submit application." },
      { status: 500 }
    );
  }
}

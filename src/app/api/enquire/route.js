import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, domain, candidates, deliveryMode, location, message } = body;

    // Server-side validation
    if (!name || !email || !phone || !company || !domain || !candidates || !deliveryMode || !location) {
      return NextResponse.json(
        { error: "Missing required fields. All fields except message are mandatory." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Candidates validation
    const candidateSize = parseInt(candidates);
    if (isNaN(candidateSize) || candidateSize < 1) {
      return NextResponse.json(
        { error: "Number of candidates must be a valid positive integer." },
        { status: 400 }
      );
    }

    // Set up local file storage path to act as mock database
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "enquiries.json");

    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read current enquiries
    let enquiries = [];
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, "utf8");
        enquiries = JSON.parse(fileContent || "[]");
      } catch (err) {
        console.error("Error reading enquiries file, initializing empty array:", err);
      }
    }

    // Append new enquiry
    const newEnquiry = {
      id: `enq_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      email,
      phone,
      company,
      domain,
      candidates: candidateSize,
      deliveryMode,
      location,
      message: message || "",
      createdAt: new Date().toISOString()
    };

    enquiries.push(newEnquiry);

    // Save enquiries
    fs.writeFileSync(filePath, JSON.stringify(enquiries, null, 2), "utf8");

    // Log the received lead to the console
    console.log(`[LEAD RECEIVED] Lead ID: ${newEnquiry.id} | Name: ${name} | Company: ${company}`);

    return NextResponse.json(
      { success: true, message: "Enquiry stored successfully.", data: newEnquiry },
      { status: 201 }
    );
  } catch (error) {
    console.error("API enquiry submission failed:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

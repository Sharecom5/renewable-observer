"use server"

import fs from 'fs/promises';
import path from 'path';

export async function subscribeAction(formData: FormData) {
  const email = formData.get("email");
  
  if (!email || typeof email !== "string") {
    return { success: false, error: "Invalid email address." };
  }

  try {
    // Save to a local CSV file in the root of the project
    const filePath = path.join(process.cwd(), 'subscribers.csv');
    
    // Check if file exists, if not, create it with headers
    try {
      await fs.access(filePath);
    } catch {
      await fs.writeFile(filePath, 'Date,Email\n', 'utf8');
    }

    // Append the new subscriber
    const date = new Date().toISOString();
    await fs.appendFile(filePath, `"${date}","${email}"\n`, 'utf8');

    return { success: true, message: "Successfully subscribed!" };
  } catch (error) {
    console.error("Subscription error:", error);
    return { success: false, error: "Something went wrong. Please try again later." };
  }
}

// Google Sheets integration for quote form submissions
// This is a simple free solution using Google Apps Script

export interface QuoteFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  giftType: string;
  quantity: string;
  budget: string;
  occasion: string;
  message: string;
  submittedAt: string;
}

// Google Apps Script Web App URL (you'll get this after setup)
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

export async function submitQuoteToGoogleSheets(formData: any) {
  try {
    const submissionData = {
      ...formData,
      submittedAt: new Date().toLocaleString(),
    };

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbwX9jrcVYXyYtNW6OugraG9I4sggHQC9BbKbTgh1G8gK14RwMtxpBFfBuBbrvUxQYop6w/exec';

    const response = await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors', // Bypass CORS
      headers: {
        'Content-Type': 'text/plain', // Important: use text/plain with no-cors
      },
      body: JSON.stringify(submissionData),
    });
    
    // With no-cors mode, we can't read the response
    // But the data is still sent successfully
    return { success: true, message: 'Quote submitted successfully!' };
    
  } catch (error) {
    console.error('Error submitting quote:', error);
    return { success: false, message: 'Failed to submit quote. Please try again.' };
  }
}

// Alternative: Email notification (using Formspree - free tier)
export async function submitQuoteViaEmail(data: QuoteFormData): Promise<{ success: boolean; message: string }> {
  try {
    const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '';
    
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      return { success: true, message: 'Quote submitted successfully! We\'ll contact you soon.' };
    } else {
      throw new Error('Failed to submit quote');
    }
  } catch (error) {
    console.error('Error submitting quote:', error);
    return { success: false, message: 'Failed to submit quote. Please try again.' };
  }
}

# 📋 Quote Form Storage Setup Instructions

## 🎯 Choose Your Free Storage Option:

### Option 1: Google Sheets (Recommended - Completely Free)

#### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Quote Submissions"
4. Add these headers in row 1:
   ```
   A: Name | B: Email | C: Company | D: Phone | E: Gift Type | F: Quantity | G: Budget | H: Occasion | I: Message | J: Submitted At
   ```

#### Step 2: Create Google Apps Script
1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete all existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append new row with form data
    sheet.appendRow([
      data.name || '',
      data.email || '',
      data.company || '',
      data.phone || '',
      data.giftType || '',
      data.quantity || '',
      data.budget || '',
      data.occasion || '',
      data.message || '',
      data.submittedAt || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Quote submitted successfully!'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: 'Failed to submit quote'
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

#### Step 3: Deploy the Script
1. Click **Deploy > New Deployment**
2. Click gear icon ⚙️ and select **Web App**
3. Configuration:
   - Description: "Quote Form Web App"
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Click **Deploy**
5. Copy the **Web app URL** (it looks like: `https://script.google.com/macros/s/.../exec`)
6. Add this URL to your `.env.local` file:
   ```
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_web_app_url_here
   ```

---

### Option 2: Formspree (Easier - 50 submissions/month free)

#### Step 1: Create Formspree Account
1. Go to [Formspree](https://formspree.io)
2. Sign up for free account
3. Click **New Form**
4. Enter your email address
5. Copy the **Form Endpoint** (looks like: `https://formspree.io/f/yourformid`)

#### Step 2: Add to Environment
Create `.env.local` file and add:
```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/yourformid
```

---

## 🔧 Final Setup Steps:

1. **Create Environment File:**
   ```bash
   cp .env.example .env.local
   ```

2. **Add Your URLs:**
   - Add Google Script URL OR Formspree URL to `.env.local`

3. **Restart Development Server:**
   ```bash
   npm run dev
   ```

## ✅ Testing:

1. Fill out the quote form on your website
2. Check Google Sheet OR Formspree dashboard for submissions
3. Form should show success message and reset

## 🎉 Benefits:

- **Google Sheets**: Unlimited submissions, organized data, easy to export
- **Formspree**: Email notifications, spam protection, simpler setup
- **Both options**: Completely free, no backend required

## 📊 Data You'll Collect:

- Name, Email, Company, Phone
- Gift Category, Quantity, Budget
- Occasion, Additional Message
- Submission Timestamp

Choose the option that works best for your needs!

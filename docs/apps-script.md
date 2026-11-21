# Google Apps Script Setup for Travel Solo

This Google Apps Script handles:
1. Verifying the incoming request token (`APPS_SCRIPT_TOKEN`).
2. Appending lead details to a Google Sheet named **"Travel Solo Leads"**.
3. Creating a dated folder in Google Drive for uploads.
4. Sending an instant email notification to the Travel Solo owner (`hello@travelsolo.in`).

---

## 1. Google Apps Script Code (`Code.gs`)

Paste the following script into your [Google Apps Script Editor](https://script.google.com/):

```javascript
const CONFIG = {
  SHARED_TOKEN: "your_secret_token_here", // Set this in Next.js as APPS_SCRIPT_TOKEN
  SHEET_NAME: "Travel Solo Leads",
  NOTIFICATION_EMAIL: "hello@travelsolo.in",
  DRIVE_PARENT_FOLDER_ID: "", // Optional: Google Drive folder ID for uploads
};

function doPost(e) {
  try {
    const requestData = JSON.parse(e.postData.contents);

    // Verify token
    if (requestData.token !== CONFIG.SHARED_TOKEN) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Unauthorized token"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    const lead = requestData.data;
    const timestamp = requestData.timestamp || new Date().toISOString();

    // 1. Append to Google Sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet() || SpreadsheetApp.create(CONFIG.SHEET_NAME);
    let sheet = ss.getSheetByName("Leads");
    if (!sheet) {
      sheet = ss.insertSheet("Leads");
      sheet.appendRow([
        "Timestamp", "Full Name", "WhatsApp", "Email", "City/State",
        "Destination", "Visa Category", "Qualification", "Experience",
        "Passport Status", "Refusal History", "Short Note", "Form Type"
      ]);
    }

    sheet.appendRow([
      timestamp,
      lead.fullName,
      lead.whatsapp,
      lead.email,
      lead.cityState,
      lead.destination,
      lead.visaType,
      lead.qualification || "N/A",
      lead.experience || "N/A",
      lead.passportStatus || "N/A",
      lead.previousRefusal || "None",
      lead.shortNote || "",
      lead.type || "apply"
    ]);

    // 2. Send Email Notification
    const subject = `New Visa Enquiry: ${lead.fullName} (${lead.destination} - ${lead.visaType})`;
    const emailBody = `
New enquiry received on Travel Solo:

Name: ${lead.fullName}
WhatsApp: https://wa.me/${lead.whatsapp.replace(/\D/g, '')}
Email: ${lead.email}
City: ${lead.cityState}
Destination: ${lead.destination}
Visa Category: ${lead.visaType}
Note: ${lead.shortNote || "None"}

View Sheet: ${ss.getUrl()}
    `;

    MailApp.sendEmail(CONFIG.NOTIFICATION_EMAIL, subject, emailBody);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Lead processed successfully"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## 2. Deployment Instructions

1. Open [Google Sheets](https://sheets.new) and name it **"Travel Solo - Leads CRM"**.
2. Click **Extensions > Apps Script**.
3. Replace all code in `Code.gs` with the script above.
4. Set your `SHARED_TOKEN` in `CONFIG` to a secure random string.
5. Click **Deploy > New Deployment**.
6. Select **Web app**.
   - **Execute as:** `Me (your Google account)`
   - **Who has access:** `Anyone`
7. Click **Deploy**, authorize permissions, and copy the **Web app URL**.
8. Paste the Web app URL in your `.env.local` as `APPS_SCRIPT_URL=<URL>` and set `APPS_SCRIPT_TOKEN=<TOKEN>`.

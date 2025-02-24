// import { google } from "googleapis";

// export default async function FormDB(req, res) {
//   const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID } = process.env;

//   if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
//     return res.status(500).json({ message: "Missing Google API credentials" });
//   }

//   const auth = new google.auth.GoogleAuth({
//     credentials: {
//       client_email: GOOGLE_CLIENT_EMAIL,
//       private_key: (GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
//       // private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
//     },
//     scopes: [
//       "https://www.googleapis.com/auth/drive",
//       "https://www.googleapis.com/auth/drive.file",
//       "https://www.googleapis.com/auth/spreadsheets",
//     ],
//   });

//   const sheets = google.sheets({ version: "v4", auth });

//   if (req.method === "GET") {
//     try {
//       const response = await sheets.spreadsheets.values.get({
//         spreadsheetId: GOOGLE_SHEET_ID,
//         range: "Sheet1!K:K", // Assuming couponUses is in column K
//       });
//       const values = response.data.values || [];
//       const couponUses = values.length > 1 ? parseInt(values[values.length - 1][0] || "0", 10) : 0;
//       return res.status(200).json({ couponUses });
//     } catch (error) {
//       console.log("Google Sheets GET Error:", error);
//       return res.status(500).json({ message: "Failed to fetch coupon count", error: error.message });
//     }
//   }

//   if (req.method === "POST") {
//     const body = req.body;

//     try {
//       let currentCouponUses = body.couponUses;
//       if (body.discountApplied) {
//         currentCouponUses += 1;
//       }

//       const response = await sheets.spreadsheets.values.append({
//         spreadsheetId: GOOGLE_SHEET_ID,
//         range: "Sheet1!A:K", // Expanded to include all fields
//         valueInputOption: "USER_ENTERED",
//         requestBody: {
//           values: [[
//             body.fullName,
//             body.email,
//             body.services,
//             body.type,
//             body.message,
//             body.couponCode || "",
//             body.discountApplied ? "Yes" : "No",
//             body.originalPrice || "",
//             body.finalPrice || "",
//             currentCouponUses,
//           ]],
//         },
//       });

//       return res.status(200).json({ message: "Success", data: response.data, couponUses: currentCouponUses });
//     } catch (error) {
//       console.log("Google Sheets POST Error:", error);
//       const errorMessage = error.message;
//       return res.status(500).json({ message: "Internal Server Error At Form-DB Route", error: errorMessage });
//     }
//   }

//   return res.status(405).json({ message: "Method not allowed" });
// }



import { google } from "googleapis";

export default async function FormDB(req, res) {
  const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID } = process.env;

  if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
    return res.status(500).json({ message: "Missing Google API credentials" });
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: GOOGLE_CLIENT_EMAIL,
      private_key: (GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n"), // Fix private key formatting
    },
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/spreadsheets",
    ],
  });

  const sheets = google.sheets({ version: "v4", auth });

  if (req.method === "GET") {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: GOOGLE_SHEET_ID,
        range: "Sheet1!K:K",
      });
      const values = response.data.values || [];
      const couponUses = values.length > 1 ? parseInt(values[values.length - 1][0] || "0", 10) : 0;
      return res.status(200).json({ couponUses });
    } catch (error) {
      console.error("Google Sheets GET Error:", error);
      return res.status(500).json({ message: "Failed to fetch coupon count", error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const body = req.body;
      let currentCouponUses = body.couponUses;
      if (body.discountApplied) {
        currentCouponUses += 1;
      }

      await sheets.spreadsheets.values.append({
        spreadsheetId: GOOGLE_SHEET_ID,
        range: "Sheet1!A:K",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[
            body.fullName,
            body.email,
            body.services,
            body.type,
            body.message,
            body.couponCode || "",
            body.discountApplied ? "Yes" : "No",
            body.originalPrice || "",
            body.finalPrice || "",
            currentCouponUses,
          ]],
        },
      });

      return res.status(200).json({ message: "Success", couponUses: currentCouponUses });
    } catch (error) {
      console.error("Google Sheets POST Error:", error);
      return res.status(500).json({ message: "Internal Server Error At Form-DB Route", error: error.message });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}

import { NextApiRequest, NextApiResponse } from "next";
import { google, sheets_v4 } from "googleapis";

type SheetBody = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export default async function FormDB(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const body = req.body as SheetBody;

  const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID } = process.env;

  if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
    return res.status(500).json({ message: "Missing Google API credentials" });
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_CLIENT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.firstName, body.lastName, body.email, body.subject, body.message]],
      },
    } as sheets_v4.Params$Resource$Spreadsheets$Values$Append);

    return res.status(200).json({ message: "Success", data: response.data });
  } catch (error: any) {
    console.log("Google Sheets API Error:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error At Form-DB Route", error: error.message });
  }
}
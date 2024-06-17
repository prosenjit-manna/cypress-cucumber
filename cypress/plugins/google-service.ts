import { google } from 'googleapis';
import path from 'path';

const CREDENTIALS_PATH = path.join(process.cwd(), 'google-service-account.json');

async function googleAuthClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const authClient = await auth.getClient();
  return authClient;
}

export async function updateGoogleSheetCell({ rows, sheetId, tabName, range }: { rows: string[][]; sheetId: string; tabName: string; range: string }) {

  
  const auth: any = await googleAuthClient();
  const sheets = google.sheets({ version: 'v4', auth });

  const resource = {
    values: rows,
  };


  const res = await sheets.spreadsheets.values.update({
    spreadsheetId: sheetId,
    range: `${tabName}!${range}`,
    valueInputOption: 'USER_ENTERED',
    resource,
  } as any);
  console.log(res.data);
}

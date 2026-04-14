const SPREADSHEET_ID = '1FGc7vB41fhzZFDxVcEll44JCFZgEAVBohEa0jrOGknc';
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    const data = parseIncomingData_(e);
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

    sheet.appendRow([
      new Date(),
      data.name || '',
      data.telegram || '',
      data.email || '',
      data.city_country || '',
      data.why_now || '',
      data.main_problem || '',
      data.preferred_mode || '',
      data.tracker || '',
      data.commitment_interest || '',
      data.source || '',
      data.user_agent || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function parseIncomingData_(e) {
  const event = e || {};
  const params = event.parameter || {};

  if (Object.keys(params).length > 0) {
    return params;
  }

  const rawBody = event.postData && event.postData.contents ? event.postData.contents : '';
  if (!rawBody) {
    return {};
  }

  try {
    const parsed = JSON.parse(rawBody);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (error) {
    return {};
  }
}

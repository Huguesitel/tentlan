/*
 * BEFORE RUNNING:
 * ---------------
 * 1. If not already done, enable the Google Sheets API
 *    and check the quota for your project at
 *    https://console.developers.google.com/apis/api/sheets
 * 2. Install the Java client library on Maven or Gradle. Check installation
 *    instructions at https://github.com/google/google-api-java-client.
 *    On other build systems, you can add the jar files to your project from
 *    https://developers.google.com/resources/api-libraries/download/sheets/v4/java
 */
import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.model.ValueRange;
import java.io.IOException;
import java.security.GeneralSecurityException;

public class SheetsExample {
  public static void main(String args[]) throws IOException, GeneralSecurityException {
    // The ID of the spreadsheet to retrieve data from.
    String spreadsheetId = "1AfaFpkI4aE7gdwseQi5X84v6c0zmgV5ffOxG55XKlqQ"; // TODO: Update placeholder value.

    // The A1 notation of the values to retrieve.
    String range = "A2:C2"; // TODO: Update placeholder value.

    // How values should be represented in the output.
    // The default render option is ValueRenderOption.FORMATTED_VALUE.
    String valueRenderOption = "FORMATTED_VALUE"; // TODO: Update placeholder value.

    // How dates, times, and durations should be represented in the output.
    // This is ignored if value_render_option is
    // FORMATTED_VALUE.
    // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
    String dateTimeRenderOption = "SERIAL_NUMBER"; // TODO: Update placeholder value.

    Sheets sheetsService = createSheetsService();
    Sheets.Spreadsheets.Values.Get request =
        sheetsService.spreadsheets().values().get(spreadsheetId, range);
    request.setValueRenderOption(valueRenderOption);
    request.setDateTimeRenderOption(dateTimeRenderOption);

    ValueRange response = request.execute();

    // TODO: Change code below to process the `response` object:
    alert(response);
  }

  public static Sheets createSheetsService() throws IOException, GeneralSecurityException {
    HttpTransport httpTransport = GoogleNetHttpTransport.newTrustedTransport();
    JsonFactory jsonFactory = JacksonFactory.getDefaultInstance();

    // TODO: Change placeholder below to generate authentication credentials. See
    // https://developers.google.com/sheets/quickstart/java#step_3_set_up_the_sample
    //
    // Authorize using one of the following scopes:
    //   "https://www.googleapis.com/auth/drive"
    //   "https://www.googleapis.com/auth/drive.file"
    //   "https://www.googleapis.com/auth/drive.readonly"
    //   "https://www.googleapis.com/auth/spreadsheets"
    //   "https://www.googleapis.com/auth/spreadsheets.readonly"
    GoogleCredential credential = "https://www.googleapis.com/auth/spreadsheets.readonly";

    return new Sheets.Builder(httpTransport, jsonFactory, credential)
        .setApplicationName("Google-SheetsSample/0.1")
        .build();
  }
}

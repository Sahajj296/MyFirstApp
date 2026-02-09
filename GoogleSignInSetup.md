# Google Sign-In Setup Guide

## 1. Create OAuth credentials
1. Visit the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Select your project or create a new one for **InstaHire**.
3. Enable the **Google Sign-In API** (a subset of Google Identity Services) via **APIs & Services ➝ Library**.
4. Navigate to **APIs & Services ➝ Credentials ➝ Create Credentials ➝ OAuth client ID**.
5. Choose **Web application** and name it (e.g., `InstaHire Web Client`).
6. Leave the Authorized redirect URIs empty for mobile apps.
7. Copy the generated **Web client ID** and replace the placeholder in `App.tsx` (`YOUR_WEB_CLIENT_ID.apps.googleusercontent.com`).

## 2. Collect SHA fingerprints
1. Open a terminal in the project root.
2. Run the signing report:
   ```powershell
   cd android
   .\gradlew signingReport
   ```
3. Locate the `Variant: debug` and `Variant: release` sections.
4. Copy the **SHA-1** (and optional SHA-256) fingerprints.

## 3. Register app details
1. Back in the Google Cloud Console, open your OAuth client.
2. Under **Authorized Android applications**, click **Add package name and fingerprint**.
3. Enter:
   - **Package name**: `com.myfirstapp`
   - **SHA-1 fingerprint**: paste the value from the signing report.
4. (Optional) Repeat for the release SHA-1.
5. Save the changes.

## 4. Sync with the React Native app
1. Update `App.tsx` with the copied web client ID.
2. Rebuild the Android app to ensure Gradle picks up dependency updates:
   ```powershell
   cd android
   .\gradlew clean
   .\gradlew assembleDebug
   ```
3. Launch the app and tap **Sign in with Google** to verify authentication works.

## 5. Troubleshooting tips
- **Play Services outdated**: Ensure the emulator/device has updated Google Play services.
- **Signature mismatch**: Confirm the package name and SHA-1 fields exactly match your app.
- **API disabled**: Verify the Google Sign-In API is enabled in the Cloud Console.
- **Network errors**: Check that `android.permission.INTERNET` is declared and the device has connectivity.

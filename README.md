# Klever Environment Setup Guide

This project relies on environment variables for authentication and security. To test both development and production variants, you need to create separate configuration files.

---

## 📁 Required Environment Files

Create two files in the **root directory** of the project:

1. `.env.dev` (For development testing)
2. `.env.prod` (For production testing)

Inside both files, paste the following keys and fill in the values using the instructions below:

```env
WEB_CLIENT_ID=YOUR-WEB-CLIENT-ID-HERE
KEYCHAIN_KEY='your-secret-here'
```

---

## 🔍 Where to find these variables

### 1. `WEB_CLIENT_ID`
Even though this is labeled \"Web\", Google Sign-In requires this specific backend client ID to authenticate your mobile applications.

* **Option A (From local files):** Open your project's `google-services.json` (Android configuration file). Look inside the `\"oauth_client\"` array for the block that contains `\"client_type\": 3`. Copy its `\"client_id\"`.
* **Option B (From Firebase Console):** 
  1. Go to **Firebase Console** > **Authentication** > **Sign-in method**.
  2. Click on **Google** to expand its settings.
  3. Open the **Web SDK configuration** dropdown.
  4. Copy the **Web client ID**.

### 2. `KEYCHAIN_KEY`
This is a custom, secure encryption key used by the application to safeguard tokens stored locally on the device's secure enclave (Keychain/SecureStore).

* **For Development (`.env.dev`):** You can use any random, secure 32-character string. 
* **For Production (`.env.prod`):** You must locate the original project secret. *Warning:* Altering this string in production may cause existing users to be logged out or lose encrypted local data when they update the app.

---

## 🚀 How to Run and Test

Always clear the bundler cache when switching between environments to ensure Metro reads the correct `.env` variables.

### Development Mode
Uses settings from `.env.dev` and runs the debug/development configuration:
```bash
# Clear cache and boot the packager
npm run start -- --clear-cache

# Run the dev variant
npm run android:dev
```

### Production Mode
Uses settings from `.env.prod` and runs the production-ready configuration:
```bash
# Clear cache and boot the packager
npm run start -- --clear-cache

# Run the prod variant
npm run android:prod
```
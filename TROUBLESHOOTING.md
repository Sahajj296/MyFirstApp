# Troubleshooting Guide - React Native Build Issues

This guide provides comprehensive steps to resolve common React Native build issues, including white/blank screens, Metro bundler problems, and build failures.

## Quick Start

If you're experiencing a white screen or the app is not updating after a build, run:

```bash
# Windows
npm run clean:full

# macOS/Linux
npm run clean:full:unix
```

Then follow the [Standard Build Process](#standard-build-process).

---

## Deep Clean and Recovery Process

Use this process when experiencing persistent issues like:
- White/blank screen on app launch
- App not reflecting latest code changes
- Metro bundler cache issues
- Gradle build failures
- JavaScript bundle not loading

### Step 1: Complete Cache Reset

#### Windows

```bash
# Kill all Node processes
taskkill /F /IM node.exe /T

# Run the full clean script
npm run clean:full
```

#### macOS/Linux

```bash
# Kill all Node processes
pkill -9 node

# Run the full clean script
npm run clean:full:unix
```

**Manual Cleanup (if scripts fail):**

Remove the following directories and files:

**Node and Metro Cache:**
- `node_modules/`
- `package-lock.json` (will be regenerated)
- `$TMPDIR/react-*` or `$TMPDIR/metro-*`
- `$TMPDIR/haste-map-*`

**Android Build Artifacts:**
- `android/app/build/`
- `android/build/`
- `android/.gradle/`
- `~/.gradle/caches/` (user's Gradle cache)

**Metro Cache:**
- `.metro-health-check*`
- Windows: `%LOCALAPPDATA%\Temp\react-native-*`
- Windows: `%LOCALAPPDATA%\Temp\metro-cache`

### Step 2: Full Dependency Reinstall

```bash
npm install
```

This will:
- Reinstall all dependencies from `package.json`
- Generate a fresh `package-lock.json`
- Rebuild native modules if needed

### Step 3: Run Static Analysis

Check for TypeScript and ESLint errors before building:

```bash
# TypeScript type checking (no emit)
npm run typecheck

# ESLint code quality check
npm run lint
```

**Fix any errors before proceeding.** Common issues:
- TypeScript type mismatches
- Unused imports
- ESLint rule violations

### Step 4: Start Metro Bundler with Cache Reset

In your main terminal:

```bash
npm run start:clean
```

This starts Metro with `--reset-cache` flag, ensuring a fresh JavaScript bundle.

**Keep this terminal running** - you'll see bundle progress and any JavaScript errors here.

### Step 5: Build and Deploy Android App

Open a **new terminal** and run:

#### Option A: Using React Native CLI (Recommended)

```bash
# Set up ADB port forwarding (required for dev server connection)
adb reverse tcp:8081 tcp:8081

# Build and install the app
npm run android:clean
```

#### Option B: Using Gradle Directly (for verbose output)

```bash
cd android
./gradlew assembleDebug --stacktrace --info
cd ..

# Install the APK
adb install -r android/app/build/outputs/apk/debug/app-debug.apk
```

### Step 6: Reload App in Emulator

Once the app is installed:

1. Open the app in the emulator
2. Press `Ctrl + M` (Windows/Linux) or `Cmd + M` (macOS) to open Dev Menu
3. Tap **"Reload"** to load the fresh JavaScript bundle

### Step 7: Debug with Logcat (if issues persist)

If you still see a white/blank screen or errors:

```bash
# View JavaScript and native errors
npm run android:logcat

# OR use adb directly
adb logcat *:E ReactNativeJS:V
```

**Look for:**
- `ReactNativeJS` logs showing JavaScript errors
- Native crash stack traces (`:E` error level)
- Module resolution failures
- Bundle loading errors

**Common Error Patterns:**
- `Unable to load script` - Metro bundler issue
- `Module not found` - Dependency or import error
- `Native module cannot be null` - Native linking issue
- `java.lang.RuntimeException` - Native crash (check full stack)

---

## Standard Build Process

Use this for regular development after initial setup:

### Terminal 1: Metro Bundler

```bash
npm start
```

### Terminal 2: Android Development

```bash
# First time or after native dependency changes
adb reverse tcp:8081 tcp:8081

# Run the app
npm run android
```

### Fast Refresh

Make code changes and save - the app will automatically reload via Fast Refresh.

To manually reload:
- **Android**: Press `R` twice OR `Ctrl + M` → Reload
- **iOS**: Press `R` in simulator

---

## Acceptance Criteria

After completing the recovery process, verify:

- ✅ App starts from Splash screen (not blank/white screen)
- ✅ All screens are accessible via navigation
- ✅ Latest code changes are visible in the app
- ✅ Metro shows "100% Bundled successfully" or similar
- ✅ Gradle shows "BUILD SUCCESSFUL"
- ✅ No uncaught exceptions in `adb logcat ReactNativeJS:V`

---

## Common Issues and Solutions

### Issue: "Unable to load script from assets"

**Solution:**
1. Ensure Metro is running (`npm start`)
2. Check ADB port forwarding: `adb reverse tcp:8081 tcp:8081`
3. Reload the app from Dev Menu

### Issue: "Module not found" or "Cannot find module"

**Solution:**
1. Verify the import path is correct
2. Run `npm install` to ensure dependency is installed
3. Clear Metro cache: `npm run start:clean`
4. For native modules, rebuild: `npm run android:clean`

### Issue: Build fails with "Could not resolve..."

**Solution:**
1. Check internet connection
2. Clear Gradle cache: `rm -rf ~/.gradle/caches/`
3. Retry: `cd android && ./gradlew clean && ./gradlew assembleDebug`

### Issue: Changes not reflected in app

**Solution:**
1. Hard reload: `Ctrl + M` → Reload
2. If still not working, restart Metro with cache reset: `npm run start:clean`
3. Rebuild app: `npm run android:clean`

### Issue: "Gradle sync failed" or Gradle errors

**Solution:**
1. Ensure correct JDK version (check `android/gradle.properties`)
2. Clear Gradle cache: Windows `%USERPROFILE%\.gradle\caches\`, Unix `~/.gradle/caches/`
3. Run `cd android && ./gradlew clean`
4. Sync again or rebuild

---

## Environment Requirements

- **Node.js**: >= 20 (check: `node --version`)
- **npm**: >= 9 (check: `npm --version`)
- **JDK**: 17 or 11 (check: `java -version`)
- **Android SDK**: Installed via Android Studio
- **ADB**: Available in PATH (check: `adb version`)

---

## Additional Resources

- [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting)
- [Metro Bundler Configuration](https://facebook.github.io/metro/)
- [Android Debugging](https://reactnative.dev/docs/debugging#accessing-console-logs)

---

## Quick Reference Commands

```bash
# Full clean (Windows)
npm run clean:full

# Full clean (macOS/Linux)
npm run clean:full:unix

# Type check
npm run typecheck

# Lint check
npm run lint

# Start Metro with cache reset
npm run start:clean

# Clean Android build
npm run android:clean

# View error logs
npm run android:logcat
```

---

*For additional help, attach the output from `npm run android:logcat` when reporting issues.*

# React Native Development - Quick Reference

## 🚀 Standard Development Workflow

### Terminal 1: Start Metro
```bash
npm start
```

### Terminal 2: Run App
```bash
# First time setup
adb reverse tcp:8081 tcp:8081

# Run the app
npm run android
```

### Fast Refresh
Save your file → Changes reload automatically
Manual reload: Press `R` twice OR `Ctrl + M` → Reload

---

## 🔧 Troubleshooting Commands

### Full Clean & Rebuild (White Screen / Not Updating)
```bash
# Windows
npm run clean:full && npm install && npm run start:clean

# macOS/Linux
npm run clean:full:unix && npm install && npm run start:clean

# In new terminal after Metro starts
npm run android:clean
```

### Quick Metro Cache Reset
```bash
npm run start:clean
```

### Check for Code Issues
```bash
npm run typecheck    # TypeScript errors
npm run lint         # Code quality issues
```

### View Error Logs
```bash
npm run android:logcat
```

### Clean Android Build Only
```bash
cd android
./gradlew clean
cd ..
npm run android:clean
```

---

## 📱 Device/Emulator Commands

### Port Forwarding (Required for dev server)
```bash
adb reverse tcp:8081 tcp:8081
```

### Check Connected Devices
```bash
adb devices
```

### Restart ADB
```bash
adb kill-server
adb start-server
```

### Uninstall App
```bash
adb uninstall com.myfirstapp
```

### Open Dev Menu
- **Android Emulator**: `Ctrl + M` (Windows/Linux) or `Cmd + M` (macOS)
- **Android Device**: Shake device

### Dev Menu Options
- **Reload**: Reload JavaScript
- **Enable Fast Refresh**: Auto-reload on save
- **Debug**: Open Chrome DevTools
- **Show Inspector**: Inspect UI elements

---

## 🐛 Common Issues

### "Unable to load script from assets"
```bash
# Check Metro is running in Terminal 1
adb reverse tcp:8081 tcp:8081
# Reload from Dev Menu (Ctrl + M)
```

### "Module not found"
```bash
npm install
npm run start:clean
```

### Changes not showing
```bash
# 1. Hard reload
Ctrl + M → Reload

# 2. If still not working
npm run start:clean
# Then rebuild: npm run android:clean
```

### Gradle build errors
```bash
cd android
./gradlew clean
cd ..
npm run android:clean
```

---

## 📚 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Metro bundler |
| `npm run start:clean` | Start Metro with cache reset |
| `npm run android` | Build and run Android app |
| `npm run android:clean` | Clean build with verbose logging |
| `npm run android:logcat` | View error logs |
| `npm run typecheck` | TypeScript type checking |
| `npm run lint` | ESLint code quality check |
| `npm run test` | Run Jest tests |
| `npm run clean:full` | Full clean (Windows) |
| `npm run clean:full:unix` | Full clean (macOS/Linux) |

---

## 📖 Detailed Troubleshooting

For comprehensive troubleshooting steps, see **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)**

---

## ✅ Health Check

Before reporting issues, verify:
- [ ] Metro is running and shows "100% Bundled"
- [ ] ADB port forwarding is active: `adb reverse tcp:8081 tcp:8081`
- [ ] No TypeScript errors: `npm run typecheck`
- [ ] No ESLint errors: `npm run lint`
- [ ] Device is connected: `adb devices`
- [ ] App is installed: Check emulator

---

## 🆘 Get Help

1. Check [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
2. Run `npm run android:logcat` and capture errors
3. Share Metro bundler output
4. Share Gradle build output (if build fails)

---

*Quick Reference Card v1.0 - React Native 0.83*

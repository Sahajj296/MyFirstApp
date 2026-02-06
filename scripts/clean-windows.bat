@echo off
REM Deep Clean Script for React Native (Windows)
REM This script performs a complete cleanup of Metro, Node, and Gradle caches

echo ========================================
echo React Native Deep Clean - Windows
echo ========================================
echo.

REM Kill all Node processes
echo [1/7] Killing all Node processes...
taskkill /F /IM node.exe /T 2>nul
if %ERRORLEVEL% EQU 0 (
    echo   ✓ Node processes terminated
) else (
    echo   ℹ No Node processes running
)
echo.

REM Remove node_modules
echo [2/7] Removing node_modules...
if exist node_modules (
    rmdir /s /q node_modules
    echo   ✓ node_modules removed
) else (
    echo   ℹ node_modules not found
)
echo.

REM Remove package-lock.json
echo [3/7] Removing package-lock.json...
if exist package-lock.json (
    del /f /q package-lock.json
    echo   ✓ package-lock.json removed
) else (
    echo   ℹ package-lock.json not found
)
echo.

REM Remove Android build artifacts
echo [4/7] Removing Android build artifacts...
if exist android\app\build (
    rmdir /s /q android\app\build
    echo   ✓ android/app/build removed
) else (
    echo   ℹ android/app/build not found
)
if exist android\build (
    rmdir /s /q android\build
    echo   ✓ android/build removed
) else (
    echo   ℹ android/build not found
)
if exist android\.gradle (
    rmdir /s /q android\.gradle
    echo   ✓ android/.gradle removed
) else (
    echo   ℹ android/.gradle not found
)
echo.

REM Remove Metro cache files
echo [5/7] Removing Metro cache files...
if exist .metro-health-check* (
    del /f /q .metro-health-check*
    echo   ✓ Metro health check files removed
) else (
    echo   ℹ No Metro health check files found
)
echo.

REM Remove temp caches (Windows specific)
echo [6/7] Removing Windows temp caches...
if exist "%LOCALAPPDATA%\Temp" (
    for /d %%i in ("%LOCALAPPDATA%\Temp\react-native-*") do (
        rmdir /s /q "%%i" 2>nul
    )
    for /d %%i in ("%LOCALAPPDATA%\Temp\metro-*") do (
        rmdir /s /q "%%i" 2>nul
    )
    for /d %%i in ("%LOCALAPPDATA%\Temp\haste-map-*") do (
        rmdir /s /q "%%i" 2>nul
    )
    echo   ✓ Windows temp caches cleared
) else (
    echo   ℹ Temp directory not found
)
echo.

REM Remove Gradle user cache (optional - commented out by default)
echo [7/7] Gradle user cache...
echo   ℹ Skipping %USERPROFILE%\.gradle\caches (manual cleanup if needed)
REM Uncomment below to clean Gradle cache (WARNING: Affects all projects)
REM if exist "%USERPROFILE%\.gradle\caches" (
REM     rmdir /s /q "%USERPROFILE%\.gradle\caches"
REM     echo   ✓ Gradle cache removed
REM )
echo.

echo ========================================
echo Cleanup Complete!
echo ========================================
echo.
echo Next steps:
echo   1. Run: npm install
echo   2. Run: npm run typecheck
echo   3. Run: npm run lint
echo   4. Run: npm run start:clean
echo   5. In new terminal: npm run android:clean
echo.
echo See TROUBLESHOOTING.md for detailed instructions.
echo ========================================

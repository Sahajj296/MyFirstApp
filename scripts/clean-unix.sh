#!/bin/bash
# Deep Clean Script for React Native (macOS/Linux)
# This script performs a complete cleanup of Metro, Node, and Gradle caches

echo "========================================"
echo "React Native Deep Clean - Unix/Mac"
echo "========================================"
echo

# Kill all Node processes
echo "[1/7] Killing all Node processes..."
if pkill -9 node 2>/dev/null; then
    echo "  ✓ Node processes terminated"
else
    echo "  ℹ No Node processes running"
fi
echo

# Remove node_modules
echo "[2/7] Removing node_modules..."
if [ -d "node_modules" ]; then
    rm -rf node_modules
    echo "  ✓ node_modules removed"
else
    echo "  ℹ node_modules not found"
fi
echo

# Remove package-lock.json
echo "[3/7] Removing package-lock.json..."
if [ -f "package-lock.json" ]; then
    rm -f package-lock.json
    echo "  ✓ package-lock.json removed"
else
    echo "  ℹ package-lock.json not found"
fi
echo

# Remove Android build artifacts
echo "[4/7] Removing Android build artifacts..."
if [ -d "android/app/build" ]; then
    rm -rf android/app/build
    echo "  ✓ android/app/build removed"
else
    echo "  ℹ android/app/build not found"
fi
if [ -d "android/build" ]; then
    rm -rf android/build
    echo "  ✓ android/build removed"
else
    echo "  ℹ android/build not found"
fi
if [ -d "android/.gradle" ]; then
    rm -rf android/.gradle
    echo "  ✓ android/.gradle removed"
else
    echo "  ℹ android/.gradle not found"
fi
echo

# Remove Metro cache files
echo "[5/7] Removing Metro cache files..."
if ls .metro-health-check* 1> /dev/null 2>&1; then
    rm -f .metro-health-check*
    echo "  ✓ Metro health check files removed"
else
    echo "  ℹ No Metro health check files found"
fi
echo

# Remove temp caches (Unix/Mac specific)
echo "[6/7] Removing temp caches..."
if [ -n "$TMPDIR" ]; then
    rm -rf "$TMPDIR/react-"* 2>/dev/null
    rm -rf "$TMPDIR/metro-"* 2>/dev/null
    rm -rf "$TMPDIR/haste-map-"* 2>/dev/null
    echo "  ✓ Temp caches cleared from $TMPDIR"
else
    # Fallback to /tmp if TMPDIR is not set
    rm -rf /tmp/react-* 2>/dev/null
    rm -rf /tmp/metro-* 2>/dev/null
    rm -rf /tmp/haste-map-* 2>/dev/null
    echo "  ✓ Temp caches cleared from /tmp"
fi
echo

# Remove Gradle user cache (optional - commented out by default)
echo "[7/7] Gradle user cache..."
echo "  ℹ Skipping ~/.gradle/caches (manual cleanup if needed)"
# Uncomment below to clean Gradle cache (WARNING: Affects all projects)
# if [ -d "$HOME/.gradle/caches" ]; then
#     rm -rf "$HOME/.gradle/caches"
#     echo "  ✓ Gradle cache removed"
# fi
echo

echo "========================================"
echo "Cleanup Complete!"
echo "========================================"
echo
echo "Next steps:"
echo "  1. Run: npm install"
echo "  2. Run: npm run typecheck"
echo "  3. Run: npm run lint"
echo "  4. Run: npm run start:clean"
echo "  5. In new terminal: npm run android:clean"
echo
echo "See TROUBLESHOOTING.md for detailed instructions."
echo "========================================"

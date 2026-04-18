# Scanner - Native Android QR Code Scanner

This is a native Android application built with Kotlin, targeting Android 16 (API 36).

## Features
- **CameraX**: High-performance camera preview and analysis.
- **ML Kit**: Google's machine learning SDK for fast and reliable QR code scanning.
- **Modern UI**: Material 3 design and adaptive icons.
- **GitHub Actions**: Automated CI/CD for debug builds.

## Project Structure
- `app/`: Main application module.
  - `src/main/java/com/xiaomi/scanner/`: Kotlin source code.
  - `src/main/res/`: Reusable resources (layouts, drawables, strings).
  - `AndroidManifest.xml`: Application manifest.
- `build.gradle`: Project configuration.
- `.github/workflows/`: CI/CD workflow definitions.

## How to Build
1. Open this project in **Android Studio**.
2. Sync the project with Gradle files.
3. Build and run on an Android 16 (API 36) emulator or device.

Alternatively, use the command line:
```bash
chmod +x gradlew
./gradlew assembleDebug
```

## GitHub Actions
The project includes a workflow that automatically builds a debug APK on every push to the `main` branch.

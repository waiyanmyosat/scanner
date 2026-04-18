/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-white p-8 font-sans">
      <div className="max-w-2xl w-full space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Android QR Scanner Project</h1>
        <p className="text-neutral-400">
          This project contains the source code for a native Kotlin Android application.
          The native code is organized in the <code>/app</code> directory.
        </p>
        <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700 text-left">
          <h2 className="text-xl font-semibold mb-4 text-green-400">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>Native Kotlin Implementation</li>
            <li>CameraX integration for high-performance preview</li>
            <li>ML Kit Barcode Scanning API</li>
            <li>Targeting Android 16 (API 36)</li>
            <li>Package: <code>com.xiaomi.scanner</code></li>
            <li>GitHub Actions CI/CD ready</li>
          </ul>
        </div>
        <p className="text-sm text-neutral-500 italic">
          Note: The web preview cannot run Android APKs. Please check the file explorer for the source code.
        </p>
      </div>
    </div>
  );
}


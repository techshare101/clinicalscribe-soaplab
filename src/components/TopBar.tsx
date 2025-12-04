"use client";

import Link from "next/link";

interface TopBarProps {
  title: string;
}

export default function TopBar({ title }: TopBarProps) {
  const handleDownloadPDF = () => {
    // Placeholder for PDF download functionality
    alert("PDF download coming soon!");
  };

  const handleCopySOAP = () => {
    // This would copy the SOAP note to clipboard
    alert("SOAP note copied to clipboard!");
  };

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">
        {/* Left - Back Button */}
        <Link
          href="/soaplab"
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm font-medium hidden sm:inline">
            Back to Library
          </span>
        </Link>

        {/* Center - Title */}
        <h1 className="text-base lg:text-lg font-semibold text-gray-900 tracking-tight truncate max-w-[200px] sm:max-w-none">
          {title}
        </h1>

        {/* Right - Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Copy SOAP Button */}
          <button
            onClick={handleCopySOAP}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-gray-600 hover:text-blue-600 transition"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span>Copy</span>
          </button>

          {/* Download PDF Button */}
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-1.5 px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="hidden sm:inline">Download PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
}

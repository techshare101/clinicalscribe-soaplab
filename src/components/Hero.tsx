import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 via-purple-50 to-white py-20 mb-10 rounded-3xl border border-gray-200 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
        {/* Hero Title */}
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          SoapLab — The Clinical Documentation Library
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-700 mt-4 leading-relaxed max-w-3xl mx-auto">
          Explore real SOAP notes, clinical templates, and documentation guides designed to help
          nurses, students, and clinicians learn and chart with confidence.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center space-x-4 flex-wrap gap-y-3">
          <Link
            href="/soaplab"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Browse SOAP Notes
          </Link>

          <Link
            href="/soaplab/templates"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Start with Templates
          </Link>
        </div>

        {/* Brand Accent */}
        <div className="mt-6">
          <a
            href="https://clinicalscribe.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition"
          >
            Powered by ClinicalScribe
          </a>
        </div>
      </div>
    </section>
  );
}

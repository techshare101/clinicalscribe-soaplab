import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Link href="/soaplab" className="text-gray-500 hover:text-blue-600 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-900">About SoapLab</h1>
              <p className="text-sm text-gray-500">Our Mission & Purpose</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6">
        {/* Hero */}
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-white rounded-2xl border border-gray-200 p-8 mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            SoapLab
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            The Clinical Documentation Library for Healthcare Professionals
          </p>
          <div className="mt-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Powered by ClinicalScribe
            </span>
          </div>
        </div>

        {/* Mission, Vision, Purpose */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Mission */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              To empower healthcare professionals with the knowledge and tools to document clinical encounters 
              with clarity, accuracy, and confidence — improving patient care one note at a time.
            </p>
          </section>

          {/* Vision */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🔭</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Our Vision</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              A world where every nurse and clinician feels confident in their documentation skills, 
              where clear communication enhances patient safety and care quality across all healthcare settings.
            </p>
          </section>

          {/* Purpose */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Our Purpose</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              To bridge the gap between classroom learning and clinical practice by providing real-world 
              documentation examples that prepare students and support professionals throughout their careers.
            </p>
          </section>
        </div>

        {/* Why Documentation Matters */}
        <section className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Why Clinical Documentation Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Clinical documentation is more than paperwork — it's the backbone of patient care. Every SOAP note you write 
            becomes part of a patient's permanent medical record, guiding treatment decisions, ensuring continuity of care, 
            and protecting both patients and providers.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start gap-3">
              <span className="text-green-500 mt-0.5">✓</span>
              <p className="text-sm text-gray-600"><strong>Patient Safety</strong> — Clear notes prevent errors and miscommunication</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 mt-0.5">✓</span>
              <p className="text-sm text-gray-600"><strong>Care Continuity</strong> — Other providers understand what happened</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 mt-0.5">✓</span>
              <p className="text-sm text-gray-600"><strong>Legal Protection</strong> — Proper documentation protects you</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 mt-0.5">✓</span>
              <p className="text-sm text-gray-600"><strong>Quality Care</strong> — Good notes support better outcomes</p>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">What SoapLab Offers</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <span className="text-2xl">📋</span>
              <div>
                <h3 className="font-semibold text-gray-900">20+ Clinical Scenarios</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Real-world examples across Primary Care, Pediatrics, Mental Health, Emergency, and Multilingual encounters.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">🧾</span>
              <div>
                <h3 className="font-semibold text-gray-900">SOAP Templates</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Copy-ready templates for Subjective, Objective, Assessment, and Plan sections.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">🎓</span>
              <div>
                <h3 className="font-semibold text-gray-900">Learning Resources</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Guides, tips, and best practices for clinical documentation excellence.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">🚨</span>
              <div>
                <h3 className="font-semibold text-gray-900">Red Flag Guides</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Critical warning signs to recognize and document across specialties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Who SoapLab Is For</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <div>
                <h3 className="font-semibold text-gray-900">Nursing Students</h3>
                <p className="text-sm text-gray-600">Learn documentation fundamentals before clinical rotations.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <div>
                <h3 className="font-semibold text-gray-900">New Graduate Nurses</h3>
                <p className="text-sm text-gray-600">Build confidence with real-world examples and templates.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <div>
                <h3 className="font-semibold text-gray-900">Experienced Clinicians</h3>
                <p className="text-sm text-gray-600">Reference library for teaching and mentoring.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <div>
                <h3 className="font-semibold text-gray-900">Nurse Educators</h3>
                <p className="text-sm text-gray-600">Teaching resources for documentation training.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ClinicalScribe */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-gray-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">⚡</span>
            <h2 className="text-xl font-semibold text-gray-900">Powered by ClinicalScribe</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            SoapLab is brought to you by ClinicalScribe — an AI-powered clinical documentation platform 
            designed to help healthcare professionals document faster and more accurately.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            While SoapLab provides educational examples and templates, ClinicalScribe takes it further 
            with real-time AI assistance for clinical documentation.
          </p>
          <a
            href="https://clinicalscribe.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Learn About ClinicalScribe →
          </a>
        </section>

        {/* CTA */}
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Start Learning Today</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/soaplab/library"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Browse SOAP Notes
            </Link>
            <Link
              href="/soaplab/templates"
              className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition"
            >
              View Templates
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-400 text-center mt-8">
          SoapLab content is for educational purposes only. Always follow your institution's documentation policies and guidelines.
        </p>
      </main>
    </div>
  );
}

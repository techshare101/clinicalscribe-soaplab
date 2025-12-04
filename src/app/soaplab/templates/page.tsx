import Link from "next/link";

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Link href="/soaplab" className="text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-900">SOAP Templates</h1>
              <p className="text-sm text-gray-500">Education Hub</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6">
        {/* Intro */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Master SOAP Documentation</h2>
          <p className="text-gray-600">
            Learn how to write professional, clear, and clinically accurate SOAP notes. 
            These templates are used by nurses, students, and healthcare professionals worldwide.
          </p>
        </div>

        {/* Quick Nav */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <a href="#subjective" className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center hover:bg-blue-100 transition-colors">
            <span className="text-2xl">S</span>
            <p className="text-sm font-medium text-blue-700">Subjective</p>
          </a>
          <a href="#objective" className="bg-green-50 border border-green-200 rounded-lg p-3 text-center hover:bg-green-100 transition-colors">
            <span className="text-2xl">O</span>
            <p className="text-sm font-medium text-green-700">Objective</p>
          </a>
          <a href="#assessment" className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center hover:bg-amber-100 transition-colors">
            <span className="text-2xl">A</span>
            <p className="text-sm font-medium text-amber-700">Assessment</p>
          </a>
          <a href="#plan" className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center hover:bg-purple-100 transition-colors">
            <span className="text-2xl">P</span>
            <p className="text-sm font-medium text-purple-700">Plan</p>
          </a>
        </div>

        {/* Subjective Section */}
        <section id="subjective" className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-blue-700">S</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Subjective</h2>
              <p className="text-sm text-gray-500">What the patient tells you</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">What to Include:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li><strong>Chief Complaint (CC)</strong> — Primary concern in 1 sentence</li>
                <li><strong>History of Present Illness (HPI)</strong> — Onset, location, duration, characteristics, aggravating/relieving factors, timing, severity</li>
                <li><strong>Associated Symptoms</strong> — Positive and negative findings ("denies...")</li>
                <li><strong>Past Medical History</strong> — Relevant PMH/PSH, family history</li>
                <li><strong>Medications & Allergies</strong> — Current meds, known allergies</li>
                <li><strong>Social/Context</strong> — Relevant habits, exposures, recent events</li>
                <li><strong>Patient's Own Words</strong> — Direct quotes when helpful</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
              <p className="text-gray-500 mb-2">// Template</p>
              <pre className="text-gray-800 whitespace-pre-wrap">{`CC: [Patient's primary concern in 1 sentence]

HPI:
[Onset, location, duration, characteristics, aggravating/relieving factors, timing, severity]

Associated Symptoms:
- [Positive symptoms]
- Denies: [Negative symptoms]

PMH: [Relevant past medical/surgical history]
Medications: [Current medications]
Allergies: [Known allergies or NKDA]

Social: [Relevant habits, exposures]`}</pre>
            </div>
          </div>
        </section>

        {/* Objective Section */}
        <section id="objective" className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-green-700">O</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Objective</h2>
              <p className="text-sm text-gray-500">What you observe and measure</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">What to Include:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li><strong>Vital Signs</strong> — BP, HR, RR, Temp, SpO2, Weight</li>
                <li><strong>General Appearance</strong> — Distress level, orientation</li>
                <li><strong>Physical Exam Findings</strong> — Relevant systems examined</li>
                <li><strong>Nursing Observations</strong> — Behavior, mobility, skin</li>
                <li><strong>Labs/Imaging</strong> — Results if available</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
              <p className="text-gray-500 mb-2">// Template</p>
              <pre className="text-gray-800 whitespace-pre-wrap">{`Vitals:
BP: ___ HR: ___ RR: ___ Temp: ___ SpO2: ___

General: [Appearance, distress, orientation]

HEENT: [Findings relevant to complaint]

Chest/Lungs: [Respiratory effort, breath sounds]

Cardiovascular: [Rate, rhythm, murmurs]

Abdomen: [Bowel sounds, tenderness, guarding]

Extremities: [ROM, edema, pulses]

Neuro: [Alert/oriented, strength, sensation]

Skin: [Color, lesions, wounds]

Labs/Imaging: [Results if available]`}</pre>
            </div>
          </div>
        </section>

        {/* Assessment Section */}
        <section id="assessment" className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-amber-700">A</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Assessment</h2>
              <p className="text-sm text-gray-500">Your clinical reasoning</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">What to Include:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li><strong>Summary</strong> — Brief summary of key findings</li>
                <li><strong>Differential Diagnoses</strong> — Prioritized list of possibilities</li>
                <li><strong>Clinical Impression</strong> — Why you think this is the cause</li>
                <li><strong>Red Flags</strong> — Concerning symptoms or absence of symptoms</li>
                <li><strong>Patient Stability</strong> — Stable, improved, worsening, urgent</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
              <p className="text-gray-500 mb-2">// Template</p>
              <pre className="text-gray-800 whitespace-pre-wrap">{`Assessment:
[Brief summary of most important findings]

Differential:
1. [Most likely condition]
2. [Second likely]
3. [Rule-out conditions]

Clinical Impression:
[Why you think this is the cause]

Red Flags:
[Any concerning symptoms or absence of symptoms]

Patient Stability:
[Stable / Improved / Worsening / Urgent]`}</pre>
            </div>
          </div>
        </section>

        {/* Plan Section */}
        <section id="plan" className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-purple-700">P</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Plan</h2>
              <p className="text-sm text-gray-500">What happens next</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">What to Include:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li><strong>Diagnostics</strong> — Tests ordered or recommended</li>
                <li><strong>Treatment</strong> — Interventions performed, meds given</li>
                <li><strong>Medications</strong> — New prescriptions, changes, refills</li>
                <li><strong>Patient Education</strong> — Instructions, home care advice</li>
                <li><strong>Follow-Up</strong> — When to return, what to monitor</li>
                <li><strong>Safety Netting</strong> — Symptoms requiring urgent care</li>
                <li><strong>Provider Notified</strong> — If nurse escalated care</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
              <p className="text-gray-500 mb-2">// Template</p>
              <pre className="text-gray-800 whitespace-pre-wrap">{`Diagnostics:
[Tests ordered or recommended]

Treatment:
[Interventions performed, meds given]

Medications:
[New prescriptions, changes, refills]

Patient Education:
[Instructions, home care advice]

Follow-Up:
[When to return, what to monitor]

Return Precautions:
[Symptoms requiring urgent care]

Provider Notified: [Yes/No - if escalated]`}</pre>
            </div>
          </div>
        </section>

        {/* Red Flags Section */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">🚨 Red Flag Guides</h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="font-medium text-red-800 mb-2">Chest Pain Red Flags</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Radiation to jaw/arm</li>
                <li>• Shortness of breath</li>
                <li>• Diaphoresis</li>
                <li>• Syncope</li>
                <li>• "Worst pain of life"</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="font-medium text-red-800 mb-2">Abdominal Pain Red Flags</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Rebound tenderness</li>
                <li>• Vomiting blood</li>
                <li>• Rigid abdomen</li>
                <li>• Persistent fever</li>
                <li>• Signs of shock</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="font-medium text-red-800 mb-2">Pediatric Red Flags</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Lethargy / unresponsive</li>
                <li>• Signs of dehydration</li>
                <li>• Breathing difficulty</li>
                <li>• Rash + fever</li>
                <li>• Bulging fontanelle</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="font-medium text-red-800 mb-2">Mental Health Red Flags</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Suicidal ideation with plan</li>
                <li>• Self-harm</li>
                <li>• No sleep for days</li>
                <li>• Severe agitation</li>
                <li>• Command hallucinations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What Providers Want */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">📋 What Providers Want</h2>
          <p className="text-gray-600 mb-4">
            Providers reviewing your notes want documentation that is:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Concise</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Objective</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Organized</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Relevant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Free of emotional language</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Easy to review quickly</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Safety-conscious</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Legally defensible</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100 p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Practice with Real Examples</h2>
          <p className="text-gray-600 mb-4">
            See these templates in action with our library of clinical scenarios.
          </p>
          <Link
            href="/soaplab"
            className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Scenarios →
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 text-center mt-8">
          These templates are for educational purposes only. Always follow your institution's documentation guidelines.
        </p>
      </main>
    </div>
  );
}

import Link from "next/link";
import { getAllArticles, articleCategories } from "@/data/articles";

export default function LearningPage() {
  const articles = getAllArticles();

  const specialtyGuides = [
    { name: "Primary Care", icon: "📘", scenarios: 8 },
    { name: "Pediatrics", icon: "👶", scenarios: 4 },
    { name: "Mental Health", icon: "🧠", scenarios: 3 },
    { name: "Emergency", icon: "🚑", scenarios: 3 },
    { name: "Multilingual", icon: "🌍", scenarios: 2 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Link href="/soaplab" className="text-gray-500 hover:text-blue-600 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Learning Hub</h1>
              <p className="text-sm text-gray-500">Documentation Guides & Education</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 sm:px-6">
        {/* Hero */}
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-white rounded-2xl border border-gray-200 p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Master Clinical Documentation
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl">
            Whether you're a nursing student, new grad, or experienced clinician looking to sharpen your skills, 
            our learning resources will help you document with confidence and clarity.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <Link
              href="/soaplab/templates"
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              View Templates
            </Link>
            <Link
              href="/soaplab/library"
              className="px-5 py-2.5 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              Browse Examples
            </Link>
          </div>
        </div>

        {/* Article Categories */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Browse by Category</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {articleCategories.map((cat) => (
              <div
                key={cat.id}
                className="border rounded-xl p-4 bg-white shadow-sm"
              >
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="mt-2 font-semibold text-gray-900 text-sm">{cat.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{cat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* All Articles */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Documentation Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/soaplab/learning/${article.slug}`}
                className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition group"
              >
                <div className="flex items-start justify-between">
                  <span className="text-2xl">{article.icon}</span>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </div>
                <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {article.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed line-clamp-2">
                  {article.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Specialty Scenarios */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Learn by Specialty</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {specialtyGuides.map((specialty) => (
              <Link
                key={specialty.name}
                href={`/soaplab/library?cat=${specialty.name.toLowerCase().replace(" ", "-")}`}
                className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition text-center group"
              >
                <span className="text-3xl">{specialty.icon}</span>
                <h3 className="mt-2 font-semibold text-gray-900 group-hover:text-blue-600 transition text-sm">
                  {specialty.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {specialty.scenarios} scenarios
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Tips */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Documentation Tips</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-green-500">✓</span> Do This
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Be concise and objective</li>
                  <li>• Use clinical terminology appropriately</li>
                  <li>• Document in real-time when possible</li>
                  <li>• Include pertinent negatives</li>
                  <li>• Quote patient when relevant</li>
                  <li>• Document safety concerns clearly</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-red-500">✗</span> Avoid This
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Emotional or judgmental language</li>
                  <li>• Vague descriptions ("patient seems fine")</li>
                  <li>• Copy-paste without review</li>
                  <li>• Documenting what you didn't observe</li>
                  <li>• Abbreviations that aren't standard</li>
                  <li>• Leaving gaps in timeline</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-gray-200 p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Ready to Practice?</h2>
          <p className="text-gray-600 mb-6">
            Apply what you've learned with our library of real-world clinical scenarios.
          </p>
          <Link
            href="/soaplab/library"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Browse All Scenarios →
          </Link>
        </div>
      </main>
    </div>
  );
}

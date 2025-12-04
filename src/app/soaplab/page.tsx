import Link from "next/link";
import { getAllScenarios, categories, getCategoryById, CategoryId } from "@/data/scenarios";
import Hero from "@/components/Hero";

export default function SoapLabHomePage() {
  const scenarios = getAllScenarios();
  const popularScenarios = scenarios.slice(0, 6); // Show first 6 as popular

  const getCategoryColor = (category: CategoryId) => {
    const colors: Record<CategoryId, string> = {
      "primary-care": "bg-blue-100 text-blue-700",
      "pediatrics": "bg-green-100 text-green-700",
      "mental-health": "bg-purple-100 text-purple-700",
      "emergency": "bg-red-100 text-red-700",
      "multilingual": "bg-amber-100 text-amber-700",
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  const getCategoryName = (categoryId: CategoryId) => {
    const cat = getCategoryById(categoryId);
    return cat?.name || categoryId;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:px-6 flex items-center justify-between">
          <Link href="/soaplab" className="text-xl font-semibold text-gray-900">
            SoapLab
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/soaplab/library" className="text-sm text-gray-600 hover:text-blue-600 transition hidden sm:block">
              Library
            </Link>
            <Link href="/soaplab/templates" className="text-sm text-gray-600 hover:text-blue-600 transition hidden sm:block">
              Templates
            </Link>
            <Link href="/soaplab/learning" className="text-sm text-gray-600 hover:text-blue-600 transition hidden sm:block">
              Learning
            </Link>
            <Link href="/soaplab/about" className="text-sm text-gray-600 hover:text-blue-600 transition hidden sm:block">
              About
            </Link>
            <a
              href="https://clinicalscribe.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Try ClinicalScribe
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 sm:px-6">
        {/* Hero Section */}
        <Hero />

        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/soaplab/library?cat=${category.id}`}
                className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition text-center group"
              >
                <span className="text-3xl">{category.icon}</span>
                <h3 className="mt-2 font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{category.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Scenarios */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Popular SOAP Notes</h2>
            <Link href="/soaplab/library" className="text-sm text-blue-600 font-medium hover:text-blue-700 transition">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularScenarios.map((scenario) => (
              <Link
                key={scenario.id}
                href={`/soaplab/${scenario.id}`}
                className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition cursor-pointer group"
              >
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(scenario.category)}`}
                >
                  {getCategoryName(scenario.category)}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {scenario.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2 leading-relaxed">
                  {scenario.description}
                </p>
                <span className="text-blue-600 font-medium text-sm mt-3 inline-block">
                  View Example →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-12">
          <div className="grid sm:grid-cols-3 gap-6">
            <Link
              href="/soaplab/templates"
              className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition group"
            >
              <span className="text-2xl">🧾</span>
              <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-blue-600 transition">
                SOAP Templates
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Copy-ready templates for S/O/A/P sections and specialty documentation.
              </p>
            </Link>
            <Link
              href="/soaplab/learning"
              className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition group"
            >
              <span className="text-2xl">🎓</span>
              <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-blue-600 transition">
                Learning Hub
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Guides, tips, and best practices for clinical documentation.
              </p>
            </Link>
            <Link
              href="/soaplab/about"
              className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition group"
            >
              <span className="text-2xl">ℹ️</span>
              <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-blue-600 transition">
                About SoapLab
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Our mission to improve clinical documentation education.
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-gray-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Document with Confidence?</h2>
          <p className="text-gray-700 max-w-xl mx-auto mb-6">
            Explore our complete library of clinical scenarios and start mastering SOAP documentation today.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/soaplab/library"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Browse All Scenarios
            </Link>
            <Link
              href="/soaplab/templates"
              className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition"
            >
              View Templates
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="font-semibold text-gray-900">SoapLab</p>
              <p className="text-sm text-gray-500">The Clinical Documentation Library</p>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <Link href="/soaplab/library" className="hover:text-blue-600 transition">Library</Link>
              <Link href="/soaplab/templates" className="hover:text-blue-600 transition">Templates</Link>
              <Link href="/soaplab/learning" className="hover:text-blue-600 transition">Learning</Link>
              <Link href="/soaplab/about" className="hover:text-blue-600 transition">About</Link>
            </div>
            <a
              href="https://clinicalscribe.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 font-medium hover:text-blue-700 transition"
            >
              Powered by ClinicalScribe →
            </a>
          </div>
          <p className="text-xs text-gray-400 text-center mt-6">
            For educational purposes only. Always follow your institution's documentation guidelines.
          </p>
        </div>
      </footer>
    </div>
  );
}

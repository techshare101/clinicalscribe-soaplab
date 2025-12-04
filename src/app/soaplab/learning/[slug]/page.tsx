"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getArticleBySlug, type ArticleSection } from "@/data/articles";

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link
            href="/soaplab/learning"
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Back to Learning Hub
          </Link>
        </div>
      </div>
    );
  }

  const categoryColors: Record<string, string> = {
    fundamentals: "bg-blue-100 text-blue-700",
    specialty: "bg-purple-100 text-purple-700",
    skills: "bg-green-100 text-green-700",
    reference: "bg-orange-100 text-orange-700",
  };

  const categoryNames: Record<string, string> = {
    fundamentals: "Fundamentals",
    specialty: "Specialty Guide",
    skills: "Clinical Skills",
    reference: "Quick Reference",
  };

  const renderSection = (section: ArticleSection, index: number) => {
    switch (section.type) {
      case "tip":
        return (
          <div key={index} className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
            <div className="flex items-start gap-3">
              <span className="text-xl">💡</span>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">{section.heading}</h3>
                <p className="text-blue-800 text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            </div>
          </div>
        );

      case "warning":
        return (
          <div key={index} className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
            <div className="flex items-start gap-3">
              <span className="text-xl">⚠️</span>
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">{section.heading}</h3>
                <p className="text-amber-800 text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            </div>
          </div>
        );

      case "example":
        return (
          <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span>📋</span> {section.heading}
            </h3>
            <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono bg-white p-4 rounded-lg border border-gray-100">
              {section.content}
            </pre>
          </div>
        );

      case "list":
        return (
          <div key={index} className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">{section.heading}</h3>
            {section.content && (
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            )}
            {section.items && (
              <ul className="space-y-2 ml-1">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1.5">•</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );

      default:
        return (
          <div key={index} className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">{section.heading}</h3>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-[15px]">
              {section.content}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Link href="/soaplab/learning" className="text-gray-500 hover:text-blue-600 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${categoryColors[article.category]}`}>
                  {categoryNames[article.category]}
                </span>
                <span className="text-sm text-gray-500">{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6">
        {/* Article Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{article.icon}</span>
            <h1 className="text-3xl font-bold text-gray-900">{article.title}</h1>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">{article.description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-10">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            In This Article
          </h2>
          <nav className="space-y-2">
            {article.content.map((section, index) => (
              <a
                key={index}
                href={`#section-${index}`}
                className="block text-gray-700 hover:text-blue-600 transition text-sm"
              >
                {section.heading}
              </a>
            ))}
          </nav>
        </div>

        {/* Article Content */}
        <article className="bg-white rounded-xl border border-gray-200 p-8">
          <div className="space-y-8">
            {article.content.map((section, index) => (
              <div key={index} id={`section-${index}`} className="scroll-mt-20">
                {renderSection(section, index)}
              </div>
            ))}
          </div>
        </article>

        {/* Bottom Navigation */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between">
          <Link
            href="/soaplab/learning"
            className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition text-center"
          >
            ← Back to Learning Hub
          </Link>
          <Link
            href="/soaplab/library"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition text-center"
          >
            Browse SOAP Examples →
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-10 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-gray-200 p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Ready to Practice?</h2>
          <p className="text-gray-600 mb-6">
            Apply what you've learned with real clinical scenarios and SOAP note examples.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/soaplab/library"
              className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              View Scenarios
            </Link>
            <Link
              href="/soaplab/templates"
              className="px-5 py-2.5 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition"
            >
              Get Templates
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16 py-8">
        <p className="text-center text-xs text-gray-400">
          SoapLab content is for educational purposes only. Always follow your institution's documentation policies.
        </p>
      </footer>
    </div>
  );
}

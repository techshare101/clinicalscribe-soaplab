"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getAllScenarios, getScenariosByCategory, categories, getCategoryById, CategoryId } from "@/data/scenarios";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

function LibraryGrid() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("cat") as CategoryId | null;
  
  const scenarios = categoryParam 
    ? getScenariosByCategory(categoryParam)
    : getAllScenarios();
  
  const currentCategory = categoryParam ? getCategoryById(categoryParam) : null;

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
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <Sidebar currentCategory={categoryParam} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Nav */}
        <MobileNav currentCategory={categoryParam} />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Link href="/soaplab" className="hover:text-blue-600 transition">SoapLab</Link>
                <span>/</span>
                <span>Library</span>
                {currentCategory && (
                  <>
                    <span>/</span>
                    <span>{currentCategory.name}</span>
                  </>
                )}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                {currentCategory ? currentCategory.name : "SOAP Note Library"}
              </h1>
              <p className="mt-2 text-gray-700 leading-relaxed max-w-2xl">
                {currentCategory 
                  ? currentCategory.description 
                  : "Browse all clinical scenarios with transcripts and SOAP notes. Perfect for learning, teaching, and reference."}
              </p>
              <p className="mt-3 text-sm text-gray-500">
                {scenarios.length} scenario{scenarios.length !== 1 ? "s" : ""} available
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
              <Link
                href="/soaplab/library"
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition ${
                  !categoryParam 
                    ? "bg-blue-600 text-white" 
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300"
                }`}
              >
                All Scenarios
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/soaplab/library?cat=${cat.id}`}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition ${
                    categoryParam === cat.id 
                      ? "bg-blue-600 text-white" 
                      : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300"
                  }`}
                >
                  {cat.icon} {cat.name}
                </Link>
              ))}
            </div>

            {/* Scenario Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {scenarios.map((scenario) => (
                <Link
                  key={scenario.id}
                  href={`/soaplab/${scenario.id}`}
                  className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition cursor-pointer group"
                >
                  {/* Category Badge */}
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(scenario.category)}`}
                  >
                    {getCategoryName(scenario.category)}
                  </span>

                  {/* Title */}
                  <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    {scenario.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2 leading-relaxed">
                    {scenario.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {scenario.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Link */}
                  <span className="text-blue-600 font-medium text-sm mt-4 inline-block">
                    View Example →
                  </span>
                </Link>
              ))}
            </div>

            {scenarios.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No scenarios found in this category.</p>
                <Link href="/soaplab/library" className="text-blue-600 mt-2 inline-block">
                  View all scenarios →
                </Link>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function LibraryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <LibraryGrid />
    </Suspense>
  );
}

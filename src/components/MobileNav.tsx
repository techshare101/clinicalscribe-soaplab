"use client";

import { useState } from "react";
import Link from "next/link";
import { categories, CategoryId } from "@/data/scenarios";

interface MobileNavProps {
  currentCategory?: CategoryId | null;
}

export default function MobileNav({ currentCategory }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Mobile Header */}
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/soaplab" className="font-bold text-lg text-gray-900">
            SoapLab
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 left-0 bottom-0 w-72 bg-white z-40 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-xl font-bold text-gray-900">SoapLab</h1>
                  <p className="text-xs text-gray-500">Clinical Documentation Training</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="space-y-1">
                <Link
                  href="/soaplab/library"
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
                    !currentCategory ? "bg-blue-50 text-blue-700" : "text-gray-700"
                  }`}
                >
                  <span>📋</span>
                  <span>All Scenarios</span>
                </Link>

                <div className="pt-4 pb-2">
                  <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Categories
                  </p>
                </div>

                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/soaplab/library?cat=${category.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
                      currentCategory === category.id ? "bg-blue-50 text-blue-700" : "text-gray-700"
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                  </Link>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <nav className="space-y-1">
                  <Link
                    href="/soaplab/templates"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700"
                  >
                    <span>🧾</span>
                    <span>SOAP Templates</span>
                  </Link>
                  <Link
                    href="/soaplab/learning"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700"
                  >
                    <span>🎓</span>
                    <span>Learning Hub</span>
                  </Link>
                  <Link
                    href="/soaplab/about"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700"
                  >
                    <span>ℹ️</span>
                    <span>About</span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

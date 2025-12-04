"use client";

import Link from "next/link";
import { categories, CategoryId } from "@/data/scenarios";

interface SidebarProps {
  currentCategory?: CategoryId | null;
}

export default function Sidebar({ currentCategory }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full flex-shrink-0 hidden lg:block">
      <div className="p-5">
        {/* Logo */}
        <Link href="/soaplab" className="block mb-6">
          <h2 className="text-xl font-semibold text-gray-900">SoapLab</h2>
        </Link>

        {/* Categories */}
        <nav className="space-y-4">
          <Link
            href="/soaplab/library"
            className={`flex items-center gap-3 transition ${
              !currentCategory
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            <span>📋</span>
            <span>All Scenarios</span>
          </Link>

          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/soaplab/library?cat=${category.id}`}
              className={`flex items-center gap-3 transition ${
                currentCategory === category.id
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </Link>
          ))}
        </nav>

        {/* Additional Links */}
        <div className="mt-6 border-t border-gray-200 pt-4 space-y-4">
          <Link
            href="/soaplab/templates"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
          >
            <span>🧾</span>
            <span>SOAP Templates</span>
          </Link>
          <Link
            href="/soaplab/learning"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
          >
            <span>🎓</span>
            <span>Learning Hub</span>
          </Link>
          <Link
            href="/soaplab/about"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
          >
            <span>ℹ️</span>
            <span>About</span>
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-gray-200">
          <p className="text-sm font-semibold text-gray-900">Try ClinicalScribe</p>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            AI-powered clinical documentation for healthcare professionals.
          </p>
          <a
            href="https://clinicalscribe.io"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium text-blue-600 hover:text-blue-700 transition"
          >
            Learn More →
          </a>
        </div>
      </div>
    </aside>
  );
}

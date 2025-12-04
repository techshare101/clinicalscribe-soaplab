"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import TopBar from "@/components/TopBar";
import TranscriptPanel from "@/components/TranscriptPanel";
import SOAPNotePanel from "@/components/SOAPNotePanel";
import { scenarios } from "@/data/scenarios";

export default function SOAPViewerPage() {
  const params = useParams();
  const scenarioSlug = params.scenario as string;
  const scenario = scenarios[scenarioSlug];

  // Mobile view toggle: 'transcript' | 'soap'
  const [activePanel, setActivePanel] = useState<"transcript" | "soap">("soap");

  if (!scenario) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Scenario Not Found
          </h1>
          <p className="text-gray-600">
            The requested scenario could not be found.
          </p>
          <a
            href="/soaplab"
            className="mt-4 inline-block text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Library
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Bar */}
      <TopBar title={scenario.title} />

      {/* Mobile Toggle */}
      <div className="lg:hidden border-b border-gray-200 bg-gray-50">
        <div className="flex">
          <button
            onClick={() => setActivePanel("transcript")}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              activePanel === "transcript"
                ? "bg-white text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Transcript
          </button>
          <button
            onClick={() => setActivePanel("soap")}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              activePanel === "soap"
                ? "bg-white text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            SOAP Note
          </button>
        </div>
      </div>

      {/* Main Content - Split View */}
      <div className="flex-1 overflow-hidden bg-slate-100">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-5 p-0 lg:p-5">
          {/* Left Panel - Transcript */}
          <div
            className={`h-full ${
              activePanel === "transcript" ? "block" : "hidden"
            } lg:block`}
          >
            <TranscriptPanel entries={scenario.transcript} />
          </div>

          {/* Right Panel - SOAP Note */}
          <div
            className={`h-full ${
              activePanel === "soap" ? "block" : "hidden"
            } lg:block`}
          >
            <SOAPNotePanel soap={scenario.soap} />
          </div>
        </div>
      </div>
    </div>
  );
}

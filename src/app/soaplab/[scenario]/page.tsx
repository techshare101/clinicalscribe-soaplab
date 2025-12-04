import { scenarios } from "@/data/scenarios";
import ScenarioClient from "./ScenarioClient";

export function generateStaticParams() {
  return Object.keys(scenarios).map((key) => ({
    scenario: key,
  }));
}

interface PageProps {
  params: Promise<{ scenario: string }>;
}

export default async function SOAPViewerPage({ params }: PageProps) {
  const { scenario: scenarioSlug } = await params;
  const scenario = scenarios[scenarioSlug];

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

  return <ScenarioClient scenario={scenario} />;
}

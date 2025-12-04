interface SOAPNote {
  subjective: string;
  objective: string;
  assessment: string;
  plan: string;
}

interface SOAPNotePanelProps {
  soap: SOAPNote;
}

export default function SOAPNotePanel({ soap }: SOAPNotePanelProps) {
  const sections = [
    {
      key: "subjective",
      label: "Subjective (S)",
      content: soap.subjective,
      color: "border-l-blue-500",
    },
    {
      key: "objective",
      label: "Objective (O)",
      content: soap.objective,
      color: "border-l-green-500",
    },
    {
      key: "assessment",
      label: "Assessment (A)",
      content: soap.assessment,
      color: "border-l-amber-500",
    },
    {
      key: "plan",
      label: "Plan (P)",
      content: soap.plan,
      color: "border-l-purple-500",
    },
  ];

  return (
    <div className="h-full flex flex-col border rounded-xl p-5 bg-white overflow-hidden">
      {/* Panel Header */}
      <div className="mb-4">
        <h2 className="font-bold text-gray-900 text-lg">SOAP Note</h2>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-6">
          {sections.map((section) => (
            <section
              key={section.key}
              className={`border-l-4 ${section.color} pl-4`}
            >
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {section.label}
              </h3>
              <p className="text-gray-800 whitespace-pre-line leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

interface TranscriptEntry {
  timestamp: string;
  speaker: string;
  text: string;
  role: "nurse" | "patient" | "provider" | "parent";
}

interface TranscriptPanelProps {
  entries: TranscriptEntry[];
}

export default function TranscriptPanel({ entries }: TranscriptPanelProps) {
  const getSpeakerColor = (role: TranscriptEntry["role"]) => {
    switch (role) {
      case "nurse":
        return "text-blue-700 font-semibold";
      case "patient":
        return "text-purple-700 font-semibold";
      case "provider":
        return "text-green-700 font-semibold";
      case "parent":
        return "text-orange-700 font-semibold";
      default:
        return "text-gray-700 font-semibold";
    }
  };

  return (
    <div className="h-full flex flex-col border rounded-xl p-5 bg-gray-50 overflow-hidden">
      {/* Panel Header */}
      <div className="mb-4">
        <h2 className="font-bold text-gray-900 text-lg">Transcript</h2>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-4">
          {entries.map((entry, index) => (
            <div key={index} className="group">
              {/* Timestamp */}
              <p className="text-xs text-gray-400 mb-0.5">{entry.timestamp}</p>

              {/* Speaker */}
              <p className={`text-sm ${getSpeakerColor(entry.role)}`}>
                {entry.speaker}
              </p>

              {/* Text */}
              <p className="text-gray-800 text-sm leading-relaxed mt-1">
                {entry.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

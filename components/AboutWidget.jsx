import { useState } from "react";

const tabs = [
  { id: "about", label: "About Me" },
  { id: "tech", label: "Technologies" },
  { id: "stats", label: "Experience & Projects" },
];

const sampleContent = {
  about: `I am a Full Stack Developer specializing in building responsive, user-friendly web applications with modern front-end and back-end technologies.`,

  tech: `Here are a few technologies I've been working with recently:
- JavaScript
- React
- Node.js
- MongoDB
- Express.js
- Next.js
- Java`,

  stats: `Experience: 1+ Years Working
Clients: 5+ Clients
Projects: 10+ Projects`,
};

export default function AboutWidget() {
  const [active, setActive] = useState("about");

  return (
    <div className="card-neu p-6 rounded-2xl w-full max-w-3xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-3">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`tab-pill text-sm ${
                active === t.id ? "bg-white/60 text-white" : "text-gray-300"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#1b1c1f] p-4 rounded-xl min-h-[160px] max-h-48 overflow-auto scrollbar-thin">
        <pre className="whitespace-pre-wrap text-sm leading-6 text-gray-300">
          {sampleContent[active]}
        </pre>
      </div>
    </div>
  );
}

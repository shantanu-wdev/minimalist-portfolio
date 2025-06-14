import React from 'react';

export default function Skillset() {
  const skills = {
    "Frontend": [
      "HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap 5"
    ],
    "Backend & Scripting": [
      "PHP", "REST APIs", "CI/CD", "GCP"
    ],
    "Tools & Version Control": [
      "Git", "GitHub", "Vercel", "Netlify", "Postman"
    ]
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4" id="skillset">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skillset</h2>
        <p className="text-gray-600 mb-12 text-sm sm:text-base">
          A balanced mix of frontend, backend, and deployment tools powering modern web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {Object.entries(skills).map(([category, techList], idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{category}</h3>
              <ul className="flex flex-wrap gap-3">
                {techList.map((tech, i) => (
                  <li key={i} className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full hover:bg-gray-300 transition">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
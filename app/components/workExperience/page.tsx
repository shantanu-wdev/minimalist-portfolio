import React from 'react';

export default function workExperience() {
  const jobs = [
    {
      company: 'Softway Tech',
      role: 'Frontend Developer',
      duration: 'Jan 2023 – Present',
      location: 'Indore, India',
      responsibilities: [
        'Built responsive UIs with React and Tailwind CSS',
        'Implemented reusable components and optimized bundle size',
        'Collaborated with backend team on REST APIs and deployment'
      ],
      stack: ['React', 'Next.js', 'Tailwind CSS', 'CI/CD', 'GCP']
    },
    {
      company: 'Techzen Logic',
      role: 'Junior Frontend Developer',
      duration: 'Feb 2022 – Dec 2022',
      location: 'Indore, India',
      responsibilities: [
        'Developed modular UI using Bootstrap 5 and JavaScript',
        'Contributed to PHP-based CMS customization',
        'Wrote clean, accessible HTML and CSS code'
      ],
      stack: ['HTML', 'CSS', 'Bootstrap 5', 'JavaScript', 'PHP']
    }
  ];

  return (
    <section className="w-full bg-white flex justify-center" id="experience">
      <div className="w-11/12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Work Experience</h2>
        <div className="relative border-l-4 border-gray-200 pl-6 space-y-12">
          {jobs.map((job, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-3 top-1.5 w-5 h-5 bg-white border-4 border-gray-800 rounded-full group-hover:bg-gray-800 transition" />
              
              <div className="bg-gray-50 p-6 rounded-md shadow-sm hover:shadow-md transition">
                <div className="flex justify-between flex-col sm:flex-row sm:items-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {job.role} @ <span className="text-gray-600">{job.company}</span>
                  </h3>
                  <span className="text-sm text-gray-500 mt-2 sm:mt-0">{job.duration} • {job.location}</span>
                </div>
                <ul className="mt-4 list-disc pl-5 space-y-1 text-sm text-gray-700">
                  {job.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  {job.stack.map((tech, i) => (
                    <span key={i} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
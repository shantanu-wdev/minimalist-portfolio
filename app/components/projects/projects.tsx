import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'HireBridge – Job Portal App',
      description:
        'A privacy-first job portal for candidates, companies, and admins with real-time updates, role-based dashboards, and transparent hiring workflows.',
      tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'React Hook Form'],
      image: '/images/hirebridge-preview.png',
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'My Dev Blog',
      description:
        'A minimal blogging platform built with Next.js and Firebase, focused on speed, readability, and easy content publishing through markdown.',
      tech: ['Next.js', 'Bootstrap 5', 'Firebase', 'Markdown'],
      image: '/images/devblog-preview.png',
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'UI Snippets Library',
      description:
        'A curated library of ready-to-use responsive UI components and layouts for developers, built with Tailwind and deployed on Vercel.',
      tech: ['Tailwind CSS', 'Vercel', 'HTML5', 'Netlify'],
      image: '/images/uisnippets-preview.png',
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section className="w-full bg-white flex justify-center px-0 py-8" id="projects">
      <div className="w-11/12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">Projects</h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } items-center gap-8`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <div className="aspect-w-16 aspect-h-10 overflow-hidden rounded-xl shadow-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="px-5 py-2 rounded-lg bg-gray-900 text-white text-sm hover:bg-gray-800 transition"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="px-5 py-2 rounded-lg border border-gray-400 text-sm text-gray-800 hover:bg-gray-100 transition"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';

export default function BlogSection() {
  const blogs = [
    {
      title: "Understanding CI/CD for Frontend Developers",
      summary: "Learn how to integrate continuous integration and deployment workflows in frontend projects using GitHub Actions and Vercel.",
      date: "June 8, 2025",
      tags: ["CI/CD", "GitHub", "Frontend"],
      link: "#"
    },
    {
      title: "CSS vs Tailwind: When to Use What?",
      summary: "TailwindCSS offers utility-first styling, but traditional CSS still shines in some places. Here's how to make the right choice.",
      date: "May 24, 2025",
      tags: ["CSS", "Tailwind", "Design"],
      link: "#"
    },
    {
      title: "React Patterns You Should Know",
      summary: "Cleaner components, better state management, and scalable architecture. These React patterns make life easier.",
      date: "May 11, 2025",
      tags: ["React", "Hooks", "Best Practices"],
      link: "#"
    }
  ];

  return (
    <section className="w-full bg-gray-50 flex justify-center px-0 py-8" id="blogs">
      <div className="w-11/12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">Blog</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition group"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition">{post.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                <p className="text-gray-600 text-sm mt-4 line-clamp-4">{post.summary}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                {post.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>

              <div className="mt-4">
                <a
                  href={post.link}
                  target="_blank"
                  className="text-sm text-blue-600 font-medium hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
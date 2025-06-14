// For app router, use `app/blogs/page.tsx`
// For pages router, use `pages/blogs.tsx`

import React from "react";
import Header from "../components/header/page";
import Footer from "../components/footer/footer";

type Blog = {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Optimizing React Apps with Code Splitting",
    summary:
      "Improve load times and performance by understanding dynamic imports and lazy loading in React and Next.js.",
    date: "June 12, 2025",
    tags: ["React", "Performance", "Next.js"],
    slug: "react-code-splitting",
  },
  {
    title: "Why Tailwind is a Game Changer for Frontend Devs",
    summary:
      "Tailwind speeds up your workflow, keeps code DRY, and scales beautifully. Here's how to get the most out of it.",
    date: "May 28, 2025",
    tags: ["Tailwind", "CSS", "Design"],
    slug: "tailwind-benefits",
  },
  {
    title: "Mastering Git in Real-World Projects",
    summary:
      "Level up your version control with advanced Git workflows, rebase, cherry-pick, and stash — explained simply.",
    date: "May 15, 2025",
    tags: ["Git", "Workflows", "DevOps"],
    slug: "git-real-world",
  },
];

export default function BlogsPage() {
  return (<>
    <Header />
    <main className="min-h-screen bg-white/80 backdrop-blur-md px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 text-center">
          My Blog Posts
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
              <p className="text-gray-700 text-sm mb-4 line-clamp-4">
                {blog.summary}
              </p>
              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <a
                href={`/blogs/${blog.slug}`}
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>);
}
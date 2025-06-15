import React from "react";
import Header from "../components/header/page";
import Footer from "../components/footer/footer";
import _interface from "../interface";

export default function BlogsPage() {
  return (<>
    <Header />
    <main className="w-full min-h-screen flex justify-center bg-white/80 backdrop-blur-md px-0 py-20">
      <div className="w-11/12">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 text-center">
          My Blog Posts
        </h1>

        <div className="w-full flex flex-wrap gap-8">
          {_interface.blogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white w-full md:w-1/4 rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
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
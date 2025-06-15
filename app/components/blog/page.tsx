import _interface from '../../interface';

export default function BlogSection() {

  return (
    <section className="w-full bg-gray-50 flex justify-center px-0 py-8" id="blogs">
      <div className="w-11/12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">Blog</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {_interface.blogs.map((post, index) => (
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
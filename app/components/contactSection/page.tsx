import { FaLinkedin, FaGithub } from 'react-icons/fa';
import CustomLeetCodeIcon from '../../utils/customLeetCodeIcon';
import ButtonPrimary from '@/app/utils/buttonPrimary';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-white flex justify-center px-0 py-8">
      <div className="w-11/12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Let's Connect</h2>

        <div className="flex flex-col md:flex-row gap-10 justify-between items-start">
          {/* Contact Info */}
          <div className="w-full md:w-1/2 text-left bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Reach me directly</h3>
            <p className="text-gray-600 mb-5 text-sm sm:text-base">
            Whether you’re looking to collaborate, have a question about my work, or just want to say hello — I’d love to connect. Feel free to reach out to discuss ideas, request a quote, or start a conversation. I’m always open to freelance opportunities and meaningful tech collaborations.
            </p>
            <div className="contact-cta flex justify-start items-center gap-5">
              <ButtonPrimary url="mailto:shantanu@example.com" title="Email"></ButtonPrimary>
              <div className="flex gap-4 text-xl">
                <a href="https://github.com/yourusername" target="_blank" className="hover:text-gray-900 transition">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-gray-900 transition">
                  <FaLinkedin />
                </a>
                <a href="https://leetcode.com/yourprofile" target="_blank" className="hover:text-gray-900 transition">
                  <CustomLeetCodeIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="w-full md:w-1/2 bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl p-6 shadow-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" name="name" required placeholder="Your name" className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" name="email" required placeholder="you@example.com" className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input type="text" name="subject" required placeholder="Your subject" className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea name="message" required placeholder="What would you like to say?" className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800" />
            </div>
            <button type="submit" className="w-full bg-gray-900 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition" >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
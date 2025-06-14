import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-white/70 backdrop-blur-md border-t border-gray-200 flex justify-center">
      <div className="w-11/12 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-700">
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-gray-800">shantanu.wdev</h4>
          <p className="text-sm text-gray-500">Frontend Developer · Indore, India</p>
        </div>

        {/* Middle: Navigation */}
        <div className="flex gap-6 text-sm">
          <a href="#work" className="hover:text-gray-900 transition">Work</a>
          <a href="#skills" className="hover:text-gray-900 transition">Skills</a>
          <a href="#projects" className="hover:text-gray-900 transition">Projects</a>
          <a href="#blogs" className="hover:text-gray-900 transition">Blogs</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-4 text-xl">
          <a href="https://github.com/yourusername" target="_blank" className="hover:text-gray-900 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-gray-900 transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" className="hover:text-gray-900 transition">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="text-center text-xs text-gray-500 pb-4">
        © {new Date().getFullYear()} Shantanu WDev. All rights reserved.
      </div>
    </footer>
  );
}
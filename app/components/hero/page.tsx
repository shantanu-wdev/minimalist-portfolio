import React from 'react';

export default function Hero() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="hero-container w-11/12 flex flex-col md:flex-row gap-10 md:gap-16 items-center px-0 py-15">
        
        {/* Heading Section */}
        <div className="hero-heading w-full md:w-[65%]">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio saepe provident cupiditate sit temporibus
          </h1>
        </div>

        {/* Text & Actions Section */}
        <div className="hero-text w-full md:w-[35%] space-y-6 text-center md:text-left">
          <p className="text-lg sm:text-xl text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio saepe provident cupiditate sit temporibus nihil iste ratione aliquid aspernatur nostrum iure minima, laboriosam molestiae autem nisi totam necessitatibus quaerat. Ex!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
              Hire Me
            </button>
            <button className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
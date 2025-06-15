export default function Hero() {
  return (
    <section className="w-full h-full flex justify-center bg-white">
      <div className="hero-container w-11/12 flex flex-col gap-5 md:gap-16 items-center px-0 pt-24 md:pt-32 pb-8">

        <div className="hero-heading w-full">
          <label className='text-xl md:text-3xl font-semibold leading-tight text-gray-900' htmlFor="name">Lorem ipsum dolor sit amet</label>
          <h1 className="text-4xl lg:text-7xl font-bold leading-tight text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio saepe provident cupiditate sit temporibus
          </h1>
        </div>

        <div className="hero-text w-full flex flex-col md:flex-row  gap-5 md:gap-0 text-center md:text-left">
          <div className="w-full md:w-5/12 flex gap-4 justify-start items-start md:items-center">
            <button className="px-3 md:px-7 py-2 md:py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
              Hire Me
            </button>
            <button className="px-3 md:px-7 py-2 md:py-4 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              View Projects
            </button>
          </div>

          <p className="w-full md:w-7/12 text-lg sm:text-xl text-left text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio saepe provident cupiditate sit temporibus nihil iste ratione aliquid aspernatur nostrum iure minima, laboriosam molestiae autem nisi totam necessitatibus quaerat. Ex!
          </p>
        </div>
      </div>
    </section>
  );
}
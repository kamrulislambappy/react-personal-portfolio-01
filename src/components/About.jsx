export default function About() {
  return (
    <>
      <div
        className="px-8 py-16 max-w-xl mx-auto md:max-w-2xl lg:max-w-5xl scroll-mt-16"
        id="about"
      >
        <div className="text-4xl text-center font-plaster underline decoration-2 underline-offset-2 decoration-green-900 text-green-900">
          About Me
        </div>
        <div className="pt-12 md:pt-16 lg:grid lg:grid-cols-6">
          <div className="m-auto lg:col-span-2 lg:w-full">
            <img
              src="./photo-about.jpg"
              alt="about-photo"
              className="m-auto w-48 rounded-3xl md:w-52 hover:scale-103 duration-300 shadow-lg shadow-gray-200"
            />
          </div>
          <div className="lg:col-span-4 font-open-sans text- first-letter:text-7xl first-letter:font-oooh-baby text-gray-600 md:text-lg md:first-letter:text-[5rem]">
            Hello! I&apos;m Bappy Al Hasan, a full-stack web application
            developer from Bangladesh. A part of my effort, patience, and
            feeling in programming.
            <br />
            <br />I have a solid foundation in the MERN stack, enabling me to
            efficiently build dynamic, scalable applications. I enjoy solving
            complex problems and turning ideas into high-performing web
            solutions.
          </div>
        </div>
        <div className="mt-10 py-10 text-center space-x-6 space-y-4 md:space-x-8 xl:space-x-20 bg-magic-mint rounded-2xl">
          <div className="inline-block">
            <div className="text-6xl font-plaster text-sky-800 hover:scale-105 duration-200 lg:text-7xl">
              10+
            </div>
            <div className="font-open-sans text-green-800 pt-1">
              Years of experience
            </div>
          </div>
          <div className="inline-block">
            <div className="text-6xl font-plaster text-green-800 hover:scale-105 duration-200 lg:text-7xl">
              50+
            </div>
            <div className="font-open-sans text-green-800 pt-1">
              Completed projects
            </div>
          </div>
          <div className="inline-block">
            <div className="text-6xl font-plaster text-yellow-800 hover:scale-105 duration-200 lg:text-7xl">
              30+
            </div>
            <div className="font-open-sans text-green-800 pt-1">
              Satisfied clients
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

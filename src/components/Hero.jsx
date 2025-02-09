import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      <div className="bg-magic-mint w-full md:pb-8 lg:pb-12">
        {/* <!-- Navbar --> */}
        <Navbar />
        {/* <!-- Hero section content --> */}
        <div
          className=" pt-10 pb-14 px-6 max-w-xl mx-auto md:max-w-3xl lg:py-28 xl:grid xl:grid-cols-2 xl:max-w-7xl xl:py-36"
          id="home"
        >
          <div className="xl:flex xl:justify-end xl:me-12">
            <img
              src="./photo.jpg"
              alt="hero-section-photo"
              className="m-auto rounded-[1.5rem] w-[300px] shadow-lg shadow-green-200 sm:w-[320px] xl:w-[440px] xl:m-0"
            />
          </div>
          <div className="xl:place-content-center">
            <div className="text-[35px] text-green-900 font-rufina font-bold leading-10 pt-8 sm:text-[42px] xl:text-[56px] xl:leading-[3.7rem]">
              <span className="text-[43px] sm:text-[50px] xl:text-[67px]">
                Crafting Seamless{" "}
              </span>
              Web Experiences with{" "}
              <span className="underline decoration-1 underline-offset-4 decoration-green-800">
                MERN Stack.
              </span>
            </div>
            <div className="text-green-700 font-poppins text-justify pt-3 md:text-lg md:pt-5">
              Hello! I am a MERN Stack Developer passionate about creating
              seamless and robust web applications. My focus is on delivering
              user-friendly solutions that elevate digital experiences.
            </div>
            <div className="w-full text-center pt-7 md:text-left">
              <button className="px-10 py-4 text-sm font-poppins uppercase rounded-md tracking-wider bg-green-900 text-gray-100 hover:bg-green-800 duration-300">
                <a href="#about">Explore Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

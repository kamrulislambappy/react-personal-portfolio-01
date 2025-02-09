export default function Feedback() {
  // overflow section slider script
  function testimonialsLeftBtn() {
    const slider = document.getElementById("slider");

    // Scroll Left
    slider.scrollBy({
      left: -385, // Adjust this value for how much to scroll
      behavior: "smooth",
    });
  }
  function testimonialsRightBtn() {
    const slider = document.getElementById("slider");

    // Scroll Eight
    slider.scrollBy({
      left: 385, // Adjust this value for how much to scroll
      behavior: "smooth",
    });
  }

  return (
    <>
      <div
        className="px-8 py-16 max-w-md mx-auto md:max-w-xl lg:max-w-[58rem] 2xl:max-w-[85rem] scroll-mt-16"
        id="feedback"
      >
        <div className="text-4xl text-center font-plaster underline decoration-2 underline-offset-2 decoration-green-900 text-green-900">
          Feedback
        </div>
        <div className="pt-4 text-sm text-center font-inter text-gray-600">
          Feedback on My Work Experience:
        </div>
        <div
          id="slider"
          className="relative flex overflow-x-hidden scroll-smooth snap-x mt-8 rounded-md md:rounded-none md:space-x-6"
        >
          <div className="p-6 bg-gray-50 min-w-[24rem] rounded-md shadow-md shadow-gray-200 hover:shadow-lg duration-200 snap-center md:min-w-[26rem]">
            <div className="text-8xl font-oooh-baby text-green-900 leading-none mb-[-50px] md:text-[7rem] md:mb-[-55px]">
              🙶
            </div>
            <div className="text-lg font-sofia capitalize text-green-900 md:text-xl">
              James Rich
            </div>
            <div className="text-[12px] font-inter italic text-green-900 md:text-sm">
              Digital Marketing Manager
            </div>
            <div className="text-sm font-gabriela text-gray-600 pt-2 md:text-base">
              Your leadership is truly inspiring. You seamlessly blend strategic
              vision with empathy, fostering a collaborative and motivated team
              environment.
            </div>
          </div>
          <div className="p-6 bg-magic-mint min-w-[24rem] rounded-md shadow-md shadow-gray-200 hover:shadow-lg duration-200 snap-center md:min-w-[26rem]">
            <div className="text-8xl font-oooh-baby leading-none mb-[-50px] text-green-900 md:text-[7rem] md:mb-[-55px]">
              🙶
            </div>
            <div className="text-lg font-sofia capitalize text-green-900 md:text-xl">
              AYM Selim
            </div>
            <div className="text-[12px] font-inter italic text-green-900 md:text-sm">
              UNDP Country Director
            </div>
            <div className="text-sm font-gabriela text-gray-600 pt-2 md:text-base">
              Your mastery of both front-end and back-end development creates
              exceptional digital experiences. You are a true innovator in web
              development!
            </div>
          </div>
          <div className="p-6 bg-gray-50 min-w-[24rem] rounded-md shadow-md shadow-gray-200 hover:shadow-lg duration-200 snap-center md:min-w-[26rem]">
            <div className="text-8xl font-oooh-baby text-green-900 leading-none mb-[-50px] md:text-[7rem] md:mb-[-55px]">
              🙶
            </div>
            <div className="text-lg font-sofia capitalize text-green-900 md:text-xl">
              Balaraj
            </div>
            <div className="text-[12px] font-inter italic text-green-900 md:text-sm">
              Newspaper Editors
            </div>
            <div className="text-sm font-gabriela text-gray-600 pt-2 md:text-base">
              Your frontend designs are a testament to your creativity and
              technical prowess, turning complex ideas into visually stunning
              and user-friendly web experiences.
            </div>
          </div>
          <div className="p-6 bg-magic-mint min-w-[24rem] rounded-md shadow-md shadow-gray-200 hover:shadow-lg duration-200 snap-center md:min-w-[26rem]">
            <div className="text-8xl font-oooh-baby text-green-900 leading-none mb-[-50px] md:text-[7rem] md:mb-[-55px]">
              🙶
            </div>
            <div className="text-lg font-sofia capitalize text-green-900 md:text-xl">
              Aaliyah Khan
            </div>
            <div className="text-[12px] font-inter italic text-green-900 md:text-sm">
              IT Manager
            </div>
            <div className="text-sm font-gabriela text-gray-600 pt-2 md:text-base">
              Your expertise in both front-end and back-end development crafts
              outstanding digital experiences. You truly are a pioneer in web
              development!
            </div>
          </div>
          <div className="p-6 bg-gray-50 min-w-[24rem] rounded-md shadow-md shadow-gray-200 hover:shadow-lg duration-200 snap-center md:min-w-[26rem]">
            <div className="text-8xl font-oooh-baby text-green-900 leading-none mb-[-50px] md:text-[7rem] md:mb-[-55px]">
              🙶
            </div>
            <div className="text-lg font-sofia capitalize text-green-900 md:text-xl">
              Mst. Rahina Ali
            </div>
            <div className="text-[12px] font-inter italic text-green-900 md:text-sm">
              IT Manager
            </div>
            <div className="text-sm font-gabriela text-gray-600 pt-2 md:text-base">
              Your prowess in full-stack development consistently delivers
              remarkable digital experiences. You truly stand out as a pioneer
              in the world of web development!
            </div>
          </div>
        </div>
        <div className="text-center mt-10 flex justify-center space-x-8">
          <button
            onClick={testimonialsLeftBtn}
            className="w-10 h-8 flex items-center justify-center rounded bg-white"
          >
            <span className="material-icons text-[18px]">arrow_back_ios</span>
          </button>
          <button
            onClick={testimonialsRightBtn}
            className="w-10 h-8 flex items-center justify-center rounded bg-magic-mint"
          >
            <span className="material-icons text-[18px]">
              arrow_forward_ios
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

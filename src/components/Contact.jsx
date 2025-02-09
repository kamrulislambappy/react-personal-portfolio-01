export default function Contact() {
  return (
    <>
      <div
        className="mt-16 px-8 pt-16 pb-2 mx-auto sm:px-12 md:px-16 lg:px-6 bg-[#E3FFE5] lg:pt-20 circle-vector-img scroll-mt-16"
        id="contact"
      >
        <div className="text-4xl text-center font-plaster underline decoration-2 underline-offset-2 decoration-green-900 text-green-900">
          Contact Us
        </div>
        <div className="pt-4 text-sm text-center font-inter text-gray-600">
          Message me to contact us:
        </div>
        <div className="lg:grid lg:grid-cols-12 lg:justify-self-center lg:gap-x-16 xl:gap-x-20">
          <div className="order-2 lg:col-span-8 lg:max-w-xl xl:max-w-2xl">
            <form>
              <div className="relative pt-10 grid grid-cols-2 gap-6 place-items-center md:gap-y-7 md:gap-x-8 lg:pt-16">
                <div className="w-full">
                  <label
                    htmlFor="first-name"
                    className="block text-[12px] font-inter text-green-800 pb-1 sm:text-sm"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="last-name"
                    className="w-full bg-transparent border-b-[1.5px] py-1 text-sm text-gray-700 border-b-green-500 outline-none focus:border-b-green-900 focus:transition-all focus:duration-300 md:text-base"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="last-name"
                    className="block text-[12px] font-inter text-green-800 pb-1 sm:text-sm"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="w-full bg-transparent border-b-[1.5px] py-1 text-sm text-gray-700 border-b-green-500 outline-none focus:border-b-green-900 focus:transition-all focus:duration-300 md:text-base"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-[12px] font-inter text-green-800 pb-1 sm:text-sm"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="demo@email.com"
                    className="w-full bg-transparent border-b-[1.5px] py-1 text-sm text-gray-700 border-b-green-500 outline-none focus:border-b-green-900 focus:transition-all focus:duration-300 md:text-base"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="block text-[12px] font-inter text-green-800 pb-1 sm:text-sm"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="+123-456-7890"
                    className="w-full bg-transparent border-b-[1.5px] py-1 text-sm text-gray-700 border-b-green-500 outline-none focus:border-b-green-900 focus:transition-all focus:duration-300 md:text-base"
                  />
                </div>
              </div>
              <div className="pt-7 w-full">
                <label
                  htmlFor="msg"
                  className="block text-[12px] font-inter text-green-800 pb-1 sm:text-sm"
                >
                  Message *
                </label>
                <textarea
                  name="msg"
                  rows="4"
                  id="msg"
                  placeholder="Write your message.."
                  className="w-full bg-transparent py-1 text-sm border-b-[1.5px] text-gray-700 border-b-green-500 outline-none focus:border-b-green-900 focus:transition-all focus:duration-300 md:text-base lg:h-40 xl:h-52"
                  required
                ></textarea>
              </div>
              <div className="w-full text-center pt-7 lg:text-right">
                <button className="px-8 py-3 text-sm font-inter capitalize rounded-md text-gray-200 bg-green-900 hover:bg-green-800 duration-200">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* contact info section */}
          <div className="order-1 lg:col-span-4 px-8 mt-12 mx-auto lg:px-0">
            <div className="text-2xl font-open-sans font-semibold text-center text-green-900 lg:text-left">
              Contact Information
            </div>
            <div className="pt-2 text-sm text-center font-inter text-green-800 lg:text-left">
              Say something to start a live chat!
            </div>
            <div className="font-inter mt-4">
              <div className="flex justify-center space-x-4 pt-2 lg:justify-start">
                <span className="material-icons text-[20px] text-green-900">
                  phone_in_talk
                </span>
                <div className="text-sm text-gray-500">+123-456-7890</div>
              </div>
              <div className="flex justify-center space-x-4 pt-2 lg:justify-start">
                <span className="material-icons text-[20px] text-green-900">
                  mail
                </span>
                <div className="text-sm text-gray-500">
                  m.bappyalhasan@gmail.com
                </div>
              </div>
              <div className="flex justify-center space-x-4 pt-2 lg:justify-start">
                <span className="material-icons text-[20px] text-green-900">
                  location_on
                </span>
                <div className="text-sm text-gray-500">
                  Gulshan, Dhaka-1212, Bangladesh
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center space-x-4 text-gray-300 lg:justify-start">
              <button className="w-8 h-8 flex justify-center items-center rounded-full bg-green-900  hover:bg-green-600 duration-200">
                <a href="https://github.com/kamrulislambappy" target="_blank">
                  <img
                    src="./icon-github.svg"
                    alt="github-icon"
                    className="w-5"
                  />
                </a>
              </button>
              <button className="w-8 h-8 flex justify-center items-center rounded-full bg-green-900 transition-all hover:bg-green-600 duration-200">
                <a href="#" target="_blank">
                  <img
                    src="./icon-twitter.svg"
                    alt="twitter-icon"
                    className="w-5"
                  />
                </a>
              </button>
              <button className="w-8 h-8 flex justify-center items-center rounded-full bg-green-900 hover:bg-green-600 duration-200">
                <a href="#" target="_blank">
                  <img
                    src="./icon-instagram.svg"
                    alt="instagram-icon"
                    className="w-5"
                  />
                </a>
              </button>
              <button className="w-8 h-8 flex justify-center items-center rounded-full bg-green-900 hover:bg-green-600 duration-200">
                <a href="#" target="_blank">
                  <img
                    src="./icon-discord.svg"
                    alt="discord-icon"
                    className="w-5"
                  />
                </a>
              </button>
            </div>
          </div>
          <div className="order-3 lg:col-span-full mt-8 pb-4 text-sm font-open-sans text-center text-gray-500 lg:mt-14">
            © 2025 CodifyZen. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}

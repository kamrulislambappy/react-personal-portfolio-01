export default function Navbar() {
  // add mobile menu
  function addMobileMenu() {
    const menuIcon = document.getElementById("menu-icon").classList;
    const AddmobileMenu = document.getElementById("mobile-menu").classList;

    AddmobileMenu.add("block");
    AddmobileMenu.remove("hidden");
    menuIcon.add("hidden");
  }

  // mobile menu click to close menu
  function mobileMenuLink() {
    const menuIcon = document.getElementById("menu-icon").classList;
    const ClosemobileMenu = document.getElementById("mobile-menu").classList;

    ClosemobileMenu.add("hidden");
    ClosemobileMenu.remove("block");
    menuIcon.remove("hidden");
  }

  // close mobile menu
  function closeMobileMenu() {
    const menuIcon = document.getElementById("menu-icon").classList;
    const ClosemobileMenu = document.getElementById("mobile-menu").classList;

    ClosemobileMenu.add("hidden");
    ClosemobileMenu.remove("block");
    menuIcon.remove("hidden");
  }

  return (
    <>
      <header>
        <div className="flex justify-between items-center w-full m-0 h-24 px-8 bg-magic-mint lg:fixed lg:justify-between lg:px-10 xl:px-16">
          <img
            src="./codifyzen-logo.png"
            alt="header-logo"
            className="w-40 m-0 p-0 xl:w-48"
          />
          {/* <!-- desktop menu --> */}
          <div className="hidden lg:block">
            <ul className="font-poppins uppercase text-green-800 tracking-wide space-x-5 xl:space-x-10">
              <li className="inline-block hover:text-green-950 duration-300">
                <a href="#home" onClick={mobileMenuLink}>
                  Home
                </a>
              </li>
              <li className="inline-block hover:text-green-950 duration-300">
                <a href="#about" onClick={mobileMenuLink}>
                  About
                </a>
              </li>
              <li className="inline-block hover:text-green-950 duration-300">
                <a href="#skills" onClick={mobileMenuLink}>
                  Skills
                </a>
              </li>
              <li className="inline-block hover:text-green-950 duration-300">
                <a href="#projects" onClick={mobileMenuLink}>
                  Projects
                </a>
              </li>
              <li className="inline-block hover:text-green-950 duration-300">
                <a href="#experience" onClick={mobileMenuLink}>
                  Experience
                </a>
              </li>
              <li className="inline-block hover:text-green-950 duration-300">
                <a href="#feedback" onClick={mobileMenuLink}>
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            {/* <!-- animate circle --> */}
            <span className="absolute flex h-3 w-3 top-5 right-[34px] xl:right-[58px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-700 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-800"></span>
            </span>
            <button
              className="px-6 py-3 text-sm font-poppins uppercase rounded-sm ring-1 text-green-800 ring-green-800 hover:bg-green-900 hover:text-gray-100 duration-200"
              onClick={mobileMenuLink}
            >
              <a href="#contact">Contact Us</a>
            </button>
          </div>
          <div className="lg:hidden">
            <button onClick={addMobileMenu}>
              <span
                className="material-icons text-3xl font-semibold text-green-800"
                id="menu-icon"
              >
                menu
              </span>
            </button>
          </div>
        </div>
        {/* <!-- mobile menu --> */}
        <div
          id="mobile-menu"
          className="hidden z-10 w-full h-[105vh] absolute top-0 m-0 bg-green-950 animate__animated animate__fadeInRight"
        >
          <div className="w-full text-right p-10">
            <button
              onClick={closeMobileMenu}
              className="material-icons text-4xl text-gray-100 hover:text-green-400 duration-200 outline-none"
            >
              close
            </button>
          </div>
          <div>
            <ul className="text-3xl font-sofia text-center capitalize italic tracking-wider leading-[4rem] text-gray-200">
              <li>
                <a
                  href="#about"
                  className="hover:text-green-400 duration-200"
                  onClick={mobileMenuLink}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-green-400 duration-200"
                  onClick={mobileMenuLink}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-green-400 duration-200"
                  onClick={mobileMenuLink}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-green-400 duration-200"
                  onClick={mobileMenuLink}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#feedback"
                  className="hover:text-green-400 duration-200"
                  onClick={mobileMenuLink}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-green-400 duration-200"
                  onClick={mobileMenuLink}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

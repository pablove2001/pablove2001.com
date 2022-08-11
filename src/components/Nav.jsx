import { useState } from "react";
import menu from "../img/menu.png";
import close from "../img/close.png";

const Nav = () => {
  let [open, setOpen] = useState(false);

  let Links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <>
      <nav className="fixed top-0 bg-black sm:backdrop-filter sm:backdrop-blur-lg sm:bg-opacity-80 bg-opacity-90 w-full z-10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="sm:hover:text-gray-500 duration-300">
              <span className="text-2xl text-white font-semibold">PabloVE</span>
            </a>

            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer sm:hidden"
            >
              <img
                src={open ? close : menu}
                alt={open ? "close" : "menu"}
                className="w-8 h-8 sm:hidden"
              />
            </div>
            <div
              className={`sm:flex sm:static absolute md:z-auto sm:space-x-7 sm:w-auto text-center w-screen sm:top-auto top-16 text-white sm:text-xl text-2xl sm:p-0 p-6 transition-all duration-300 ease-in ${
                open ? "left-0 bg-black" : "left-[100vw]"
              } bg-opacity-90`}
            >
              {Links.map((link) => (
                <div className="sm:my-0 my-5">
                  <a
                    onClick={() => setOpen(false)}
                    href={link.link}
                    className="sm:hover:text-blue-500 duration-300"
                  >
                    {link.name}
                  </a>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

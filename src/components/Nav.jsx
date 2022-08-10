import { useState } from "react";

const Nav = () => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 z-10 bg-black backdrop-filter backdrop-blur-lg bg-opacity-80 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-white font-semibold">PabloVE</span>
            <div className="flex space-x-7 text-white text-xl">
              <a href="#home" className="sm:hover:text-blue-500 duration-300">
                Home
              </a>
              <a href="#about" className="sm:hover:text-blue-500  duration-300">
                About
              </a>
              <a
                href="#portfolio"
                className="sm:hover:text-blue-500 duration-300"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="sm:hover:text-blue-500  duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

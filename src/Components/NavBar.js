import React from "react";
import {NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <nav
        class="flex justify-around py-4 bg-white/80
            backdrop-blur-md shadow-md w-full
            top-0 left-0 right-0 z-10"
      >
        <div class="flex items-center space-x-5">
          <a
            class="flex text-gray-600 hover:text-cyan-500
                    cursor-pointer transition-colors duration-300"
            href="/Signs"
          >
            Signs Detected
          </a>

          <a
            class="flex text-gray-600 hover:text-cyan-500
            cursor-pointer transition-colors duration-300"
            href="/"
          >
            Home
          </a>

          <a
            class="flex text-gray-600 hover:text-cyan-500
                    cursor-pointer transition-colors duration-300"
            href="/AboutUs"
          >
            About Us
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

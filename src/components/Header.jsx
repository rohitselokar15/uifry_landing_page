import React, { useState } from "react";
import logo from "../assets/Group.png";
import star_1 from "../assets/star-1.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menu bar for small screen
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="mx-2 container xl:mx-auto max-w-7xl bg-white h-[72px] flex justify-between lg:justify-around px-3 xl:px-0 items-center sticky top-0 z-50">
      <div className="xl:pr-20">
        <p className="cursor-pointer">
          <img src={logo} />
        </p>
      </div>

      <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
        <i className="fa-solid fa-bars text-black fa-xl" />
      </div>

      <div
        className={`lg:flex absolute top-16 left-0 right-0 bg-orange-500 text-[17px] font-semibold text-white py-6 lg:text-black ${
          menuOpen ? "block " : "hidden"
        } lg:static lg:bg-transparent lg:p-0`}
      >
        <ul className="flex flex-col items-center lg:flex-row lg:items-center lg:text-[16px] xl:text-[17px]">
          <li className="cursor-pointer my-2 lg:my-0 lg:ml-10 hover:text-orange-500">
            Home
          </li>

          <li className="cursor-pointer my-2 lg:my-0 lg:ml-10 hover:text-orange-500">
            About Us
          </li>

          <li className="cursor-pointer my-2 lg:my-0 lg:ml-10 hover:text-orange-500">
            Pricing
          </li>

          <li className="cursor-pointer my-2 lg:my-0 lg:ml-10 hover:text-orange-500">
            Features
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex">
        <button className="bg-black text-white rounded-md p-3 px-10 text-[17px]">
          Download
        </button>
      </div>
      
    </nav>
  );
};

export default Header;

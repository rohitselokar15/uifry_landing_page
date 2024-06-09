import React from "react";
import logo from "../assets/Group.png";

const Footer = () => {
  return (
    <div className="mx-2 container xl:mx-auto max-w-7xl md:my-10 font-semibold text-gray-800 mt-20 xl:mt-28">
      <div className="text-center md:text-start tracking-wide text-[14px] grid gap-3 justify-center md:grid-cols-5">
        <div className="mt-3 ">
          <ul>
            <li>
              <img src={logo} alt="img" className="w-20 xl:w-28 xl:my-4" />
            </li>
            <li>
              <i className="fa-solid fa-envelope my-5 text-orange-500 mr-2 fa-xl"></i>
              Hel@Frybix.com
            </li>
            <li>
              <i className="fa-solid fa-phone my-5 text-orange-500 fa-xl"></i>{" "}
              +1234 456 678 89
            </li>
          </ul>
        </div>
        <div className=" mt-3">
          <ul>
            <li className="text-[20px] text-black xl:text-[25px]">Link</li>
            <li className="mt-2">Home</li>
            <li className="mt-2">About Us</li>
            <li className="mt-2">Bookings</li>
            <li className="mt-2">Blog</li>
          </ul>
        </div>
        <div className=" mt-3">
          <ul>
            <li className="text-[20px] text-black xl:text-[25px]">Legal</li>
            <li className="mt-2">Terms of Use</li>
            <li className="mt-2">Privacy Policy</li>
            <li className="mt-2">Cookie Policy</li>
          </ul>
        </div>
        <div className=" my-3">
          <ul>
            <li className="text-[20px] text-black xl:text-[25px]">Product</li>
            <li className="mt-2">Take Tour</li>
            <li className="mt-2">Live Chat</li>
            <li className="mt-2">Reviews</li>
          </ul>
        </div>
        <div className=" my-3">
          <ul>
            <li className="text-[20px] text-black xl:text-[25px]">
              Newsletter
            </li>
            <li className="my-2">Stay Up To Date</li>
            <li className="hidden xl:inline">
              <input
                className="border p-2 w-[130px]"
                type="email"
                placeholder="Enter mail"
              />
              <button className="bg-black p-2 px-4 text-white">
                Subscribed
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:mt-14">
        <hr className="my-8"></hr>
        <p className="text-center">
          Copyright 2022 uifry.com All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

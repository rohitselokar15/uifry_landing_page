import React from "react";
import premium from "../assets/Group 35933.png";
import star from "../assets/star-05.png";
import img from "../assets/Group 35924.png";
import play from "../assets/play_icon.png";
import arrow from "../assets/Vector 1.png";
import testimonial from "../assets/Group 1000002332.png";
import testimonial1 from "../assets/Group 35917.png";
import frame from "../assets/Frame.png";

const Home = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="mt-4 grid grid-cols-2">
        <div className="border">
          <div>
            <p className="text-[45px] my-3 font-bold ">
              Make The Best Financial Decisions
            </p>
            <p className="text-[18px] my-6 font-semibold text-gray-700">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className="flex">
              <button className="flex  items-center bg-black p-4 px-6 text-[18px] rounded-md text-white">
                Get Started
                <img src={arrow} className="ml-4" />
              </button>
              <div className="flex ml-8 items-center">
                <img src={play} alt="img" className="w-7 h-7" />
                <p className="mx-2 font-semibold text-[17px]">Watch Video</p>
              </div>
            </div>
          </div>
          <div>
            <img src={img} alt="err" />
          </div>
        </div>
        <div className="border">
          <img src={premium} />
        </div>
      </div>

      {/* New section */}
      <div className="md:flex justify-center items-center">
        <div className="border">
          <img
            src={premium}
            alt="img"
            className="w-[400px] md:w-[1000px] lg:w-[1100px]"
          />
        </div>
        <div className="border mx-2">
          <p className="text-orange-500 text-[19px] tracking-widest font-semibold">
            FEATURES
          </p>
          <p className="text-[35px] font-bold">Uifry Premium</p>
          <div>
            <div className="mt-8">
              <div className="flex my-3">
                <img src={star} alt="img" className="" />
                <p className="mx-2 text-[18px] font-bold">
                  Budgeting Intervals
                </p>
              </div>
              <p className="text-[17px] font-semibold text-gray-500">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex my-3">
                <img src={star} alt="img" className="" />
                <p className="mx-2 text-[18px] font-bold">
                  Budgeting Intervals
                </p>
              </div>
              <p className="text-[17px] font-semibold text-gray-500">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex my-3">
                <img src={star} alt="img" className="" />
                <p className="mx-2 text-[18px] font-bold">
                  Budgeting Intervals
                </p>
              </div>
              <p className="text-[17px] font-semibold text-gray-500">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* next part */}
      <div className="md:flex justify-center items-center">
        <div className="border mx-2">
          <p className="text-orange-500 text-[19px] tracking-widest font-semibold">
            FEATURES
          </p>
          <p className="text-[35px] font-bold">Uifry Premium</p>
          <div>
            <div className="mt-8">
              <div className="flex my-3">
                <img src={star} alt="img" className="" />
                <p className="mx-2 text-[18px] font-bold">
                  Budgeting Intervals
                </p>
              </div>
              <p className="text-[17px] font-semibold text-gray-500">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex my-3">
                <img src={star} alt="img" className="" />
                <p className="mx-2 text-[18px] font-bold">
                  Budgeting Intervals
                </p>
              </div>
              <p className="text-[17px] font-semibold text-gray-500">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex my-3">
                <img src={star} alt="img" className="" />
                <p className="mx-2 text-[18px] font-bold">
                  Budgeting Intervals
                </p>
              </div>
              <p className="text-[17px] font-semibold text-gray-500">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
          </div>
        </div>

        <div className="border">
          <img
            src={premium}
            alt="img"
            className="w-[400px] md:w-[1000px] lg:w-[1100px]"
          />
        </div>
      </div>

      {/* next part */}
      <div className="md:flex justify-center items-center">
        <div className="border">
          <img
            src={premium}
            alt="img"
            className="w-[400px] md:w-[1000px] lg:w-[1100px]"
          />
        </div>
        <div className="border mx-2">
          <p className="text-orange-500 text-[19px] tracking-widest font-semibold">
            FEATURES
          </p>
          <p className="text-[35px] font-bold">Uifry Premium</p>
          <div>
            <div className="mt-8">
              <div className="flex my-3">
                <img src={star} alt="img" className="" />
                <p className="mx-2 text-[18px] font-bold">
                  Budgeting Intervals
                </p>
              </div>
              <p className="text-[17px] font-semibold text-gray-500">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex my-3">
                <img src={star} alt="img" className="" />
                <p className="mx-2 text-[18px] font-bold">
                  Budgeting Intervals
                </p>
              </div>
              <p className="text-[17px] font-semibold text-gray-500">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex my-3">
                <img src={star} alt="img" className="" />
                <p className="mx-2 text-[18px] font-bold">
                  Budgeting Intervals
                </p>
              </div>
              <p className="text-[17px] font-semibold text-gray-500">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TestimonIal */}
      <div className="mt-10">
        <p className="text-[18px] tracking-wide text-center">TESTIMONNIAL</p>
        <p className="font-bold text-[35px] text-center">
          What Our Users Say About Us?
        </p>
        <div className="grid md:grid-cols-2">
          <div className="border">
            <img src={testimonial} alt="img" className="w-[2000px]" />
          </div>
          <div className="border px-8 xl:px-20 md:mt-10">
            <p className="font-bold text-[30px] xl:text-[33px] my-4">
              The Best Financial Accounting App Ever
            </p>
            <p className="text-[17px] text-gray-500 my-6">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.“Arcu at dictum
              sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices
              malesuada elit mauris.“Arcu at dictum sapien, mollis. Vulputate
              sit id accumsan, ultricies. In ultrices malesuada elit mauris.
            </p>
            <img src={testimonial1} alt="img" />
            <p className="text-[18px] font-semibold mt-6">Nick jonas</p>
          </div>
        </div>
      </div>

      {/* FAQ part */}
      <div className="mx-2 mt-8">
        <p className="text-orange-500 font-semibold tracking-wider text-[20px]">
          FAQ
        </p>
        <p className="font-bold text-[35px] xl:text-[45px] xl:my-4">
          Frequently Asked Questions
        </p>
        <div className="text-white p-8 grid xl:grid-cols-2 gap-4 md:p-4 xl:gap-10 xl:px-0">
          <div className="bg-[#FF5555] p-4 py-8 rounded-2xl">
            <p className="font-bold text-[30px]">
              The Best Financial Accounting App Ever!
            </p>
            <p className="text-[20px] my-4">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>

          <div className="text-black p-4 py-8 rounded-2xl">
            <p className="font-bold text-[30px]">
              The Best Financial Accounting App Ever!
            </p>
            <p className="text-[20px] my-4">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>

          <div className="bg-[#FF5555] xl:bg-white xl:text-black p-4 py-8 rounded-2xl">
            <p className="font-bold text-[30px]">
              The Best Financial Accounting App Ever!
            </p>
            <p className="text-[20px] my-4">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>

          <div className="text-black p-4 xl:bg-[#FF5555] xl:text-white py-8 rounded-2xl">
            <p className="font-bold text-[30px]">
              The Best Financial Accounting App Ever!
            </p>
            <p className="text-[20px] my-4">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>

          <div className="bg-[#FF5555] p-4 py-8 rounded-2xl">
            <p className="font-bold text-[30px]">
              The Best Financial Accounting App Ever!
            </p>
            <p className="text-[20px] my-4">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>

          <div className="text-black p-4 py-8 rounded-2xl">
            <p className="font-bold text-[30px]">
              The Best Financial Accounting App Ever!
            </p>
            <p className="text-[20px] my-4">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>
      </div>

      {/* Frame */}
      <div className="mt-20">
        <img src={frame} alt="img" />
      </div>
    </div>
  );
};

export default Home;

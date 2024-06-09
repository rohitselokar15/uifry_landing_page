import React from "react";
import home_img from "../assets/home_img.png";
import star_1 from "../assets/star-1.png";
import premium from "../assets/Group 35933.png";
import premium1 from "../assets/Group 35935.png";
import star from "../assets/star-05.png";
import img from "../assets/Group 35924.png";
import play from "../assets/play_icon.png";
import cube_02 from "../assets/cube-02.png";
import cube_04 from "../assets/cube-04.png";
import arrow from "../assets/Vector 1.png";
import testimonial from "../assets/Group 1000002332.png";
import testimonial1 from "../assets/Group 35917.png";
import frame from "../assets/Frame.png";
import notification from "../assets/Group 35899.png";
import star1 from "../assets/Group 3589.png";
import bg from "../assets/Group 35930.png";
import "../components/home.css";

const Home = () => {
  return (
    <div className="mx-2 container xl:mx-auto max-w-7xl">
      <div className=" grid md:grid-cols-2">
        <div className="">
          <div className="xl:pt-6">
            <p className="text-[35px] lg:text-[45px] font-bold ">
              Make The Best Financial Decisions
            </p>
            <p className="text-[16px] lg:text-[18px] my-6 font-semibold text-gray-700">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className="flex">
              <button className="flex  items-center bg-black p-3 lg:p-4 lg:px-6 lg:text-[18px] rounded-md text-white">
                Get Started
                <img src={arrow} className="ml-2 lg:ml-4" />
              </button>
              <div className="flex ml-8 items-center">
                <img src={play} alt="img" className="w-7 h-7" />
                <p className="mx-2 font-semibold text-[17px]">Watch Video</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={img}
              alt="err"
              className="hidden md:inline xl:w-[450px] xl:mt-8"
            />
          </div>
        </div>
        <div className="md:inline">
          <p className="hidden xl:flex justify-end">
            <img src={star_1} />
          </p>
          <img
            src={home_img}
            alt="img"
            className="w-[380px] my-4 md:my-0 md:w-full"
          />
        </div>
      </div>

      {/* New section */}
      <div className="md:flex justify-center items-center">
        <div className="hidden md:inline">
          <img
            src={premium}
            alt="img"
            className="w-[400px] md:w-[1000px] lg:w-[1100px]"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundSize: "620px",
            }}
          />
        </div>
        <div className="mt-8">
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
              <p className="lg:text-[17px] font-semibold text-gray-500">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex my-3 items-center">
                <img src={cube_02} alt="img" className="w-6 h-6" />
                <p className="mx-2 text-[18px] font-bold">
                  Budgeting Intervals
                </p>
              </div>
              <p className="lg:text-[17px] font-semibold text-gray-500">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex my-3 items-center">
                <img src={cube_04} alt="img" className="w-6 h-6" />
                <p className="mx-2 text-[18px] font-bold">
                  Budgeting Intervals
                </p>
              </div>
              <p className="lg:text-[17px] font-semibold text-gray-500">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* next part */}
      <div className="md:flex justify-center items-center mt-8">
        <div className="md:m-12">
          <p className="text-orange-500 text-[19px] tracking-widest font-semibold">
            ADVANTAGES
          </p>
          <p className="text-[35px] font-bold">Why Choose Uifry</p>
          <div className="">
            <div className="flex my-3 items-center">
              <img src={notification} alt="img" className="" />
              <p className="mx-2 text-[18px] font-bold">Clever Notifications</p>
            </div>
            <p className="lg:text-[17px] font-semibold text-gray-500">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>

        <div
          className=""
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundSize: "620px",
          }}
        >
          <img
            src={premium1}
            alt="img"
            className="w-[400px] md:w-[1000px] lg:w-[2200px]"
          />
        </div>
      </div>

      <p className="hidden xl:inline">
        <img src={star_1} />
      </p>

      {/* next part */}
      <div className="md:flex justify-center items-center">
        <div
          className="hidden md:inline"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundSize: "620px",
          }}
        >
          <img
            src={premium}
            alt="img"
            className="w-[400px] md:w-[1000px] lg:w-[1100px] xl:w-[2200px]"
          />
        </div>

        <div className="">
          <div className="md:m-12 mt-8 md:mt-0">
            <div className="flex items-center my-3">
              <img src={star1} alt="img" className="" />
              <p className="mx-2 text-[18px] font-bold">Fully Customizable</p>
            </div>
            <p className="lg:text-[17px] font-semibold text-gray-500">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse Aliquam.
            </p>
          </div>
        </div>
        <p className="hidden xl:inline">
          <img src={star_1} className="w-[200px]" />
        </p>
      </div>

      {/* TestimonIal */}
      <div className="mt-20 md:mt-10">
        <p className="text-[18px] tracking-wide text-center">TESTIMONNIAL</p>
        <p className="font-bold text-[35px] text-center">
          What Our Users Say About Us?
        </p>
        <div className="grid md:grid-cols-2">
          <div
            className=""
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundSize: "620px",
            }}
          >
            <img src={testimonial} alt="img" className="w-[2000px]" />
          </div>
          <div className="md:px-8 xl:px-20 mt-6 md:mt-10 xl:mt-20">
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
      <p className="hidden xl:inline">
        <img src={star_1} />
      </p>
      <div className="mt-10">
        <p className="text-orange-500 font-semibold tracking-wider text-[20px]">
          FAQ
        </p>
        <div className="xl:flex items-center">
          <p className="font-bold text-[30px] lg:text-[35px] xl:text-[45px] xl:my-4">
            Frequently Asked Questions
          </p>
          <p className="hidden xl:ml-[230px] xl:inline">
            <img src={star_1} />
          </p>
        </div>
        <div className="text-white p-2 grid xl:grid-cols-2 gap-4 md:p-4 xl:gap-10 xl:px-0">
          <div className="bg-[#FF5555] p-4 lg:py-8 rounded-2xl">
            <p className="font-bold text-[22px] lg:text-[30px]">
              The Best Financial Accounting App Ever!
            </p>
            <p className="text-[17px] lg:text-[20px] my-4">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>

          <div className="text-black p-4 lg:py-8 rounded-2xl">
            <p className="font-bold text-[22px] lg:text-[30px]">
              The Best Financial Accounting App Ever!
            </p>
            <p className="text-[17px] lg:text-[20px] my-4">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>

          <div className="bg-[#FF5555] xl:bg-white xl:text-black p-4 lg:py-8 rounded-2xl">
            <p className="font-bold text-[22px] lg:text-[30px]">
              The Best Financial Accounting App Ever!
            </p>
            <p className="text-[17px] lg:text-[20px] my-4">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>

          <div className="text-black p-4 xl:bg-[#FF5555] xl:text-white lg:py-8 rounded-2xl">
            <p className="font-bold text-[22px] lg:text-[30px]">
              The Best Financial Accounting App Ever!
            </p>
            <p className="text-[17px] lg:text-[20px] my-4">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>

          <div className="bg-[#FF5555] p-4 lg:py-8 rounded-2xl">
            <p className="font-bold text-[22px] lg:text-[30px]">
              The Best Financial Accounting App Ever!
            </p>
            <p className="text-[17px] lg:text-[20px] my-4">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>

          <div className="text-black p-4 lg:py-8 rounded-2xl">
            <p className="font-bold text-[22px] lg:text-[30px]">
              The Best Financial Accounting App Ever!
            </p>
            <p className="text-[17px] lg:text-[20px] my-4">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>
      </div>

      {/* Frame */}
      <div className="md:mt-20">
        <img
          src={frame}
          alt="img"
          className="w-full h-[220px] md:h-[500px] md:w-full"
        />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { BsPaypal, BsTelegram } from "react-icons/bs";
// import Phone from "../assets/images/phone.png";
import telegram from "../assets/images/telegram.png";
// import telejpg from "../assets/images/telejpg.jpg";

const LandingPage = () => {
  return (
    <div className="container m-auto lg:h-screen w-screen">
      <div className="flex h-full mx-8 lg:mx-0 pt-0 sm:pt-8 flex-col lg:flex-row">
        <div className="flex-1 mt-14 sm:mt-8">
          <div className="lg:ml-36 text-center lg:text-start mb-8">
            <h1 className=" ml-3 text-4xl text-white ">IPL DON</h1>
            <h1 className=" ml-2 text-6xl text-white ">Cricket Predictor!</h1>
          </div>
          <div className="flex flex-col lg:ml-36  text-white">
            <div className="flex justify-center lg:justify-start">
              <a
                href="https://telegram.me/+i6L4WUHS3Ro4Njk1"
                className="w-40 py-3 px-0 text-sm shadow-sm rounded-full  bg-[#0088cc] hover:bg-[#d39804] flex text-center justify-center"
              >
                <BsTelegram className="inline text-xl mx-2" />
                <h1>Join Now</h1>
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-lg text-white">
            <p className="lg:ml-36 lg:mx-0 md:mx-20">
              <p className="pb-2 text-center sm:text-start">
                🏏 Unleash the power of cricket predictions! Join our Telegram
                page for expert insights, accurate forecasts, and a thrilling
                cricketing experience. Let's elevate your passion for the sport
                with winning strategies. Hit that join button and become a part
                of our cricket prediction community today! 🏆
              </p>
              <p className="pb-1 text-center sm:text-start">
                Get access to real-time match updates and live commentary,
                enhancing your cricket-watching experience like never before!
              </p>
              {/* <p className="pb-1">animi, id est laborum et dolorum fuga.</p> */}
            </p>
          </div>
        </div>
        <div className="flex-1 ">
          <div className=" w-full h-full align-middle items-center flex justify-center ">
            <img
              src={telegram}
              alt="phoneImg"
              className="lg:w-[290px] w-80 mt-6 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

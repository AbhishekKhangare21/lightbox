import React, { useState } from "react";
import { FaRegCircle } from "react-icons/fa";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "visible" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-[#ffb33c] h-[89%] w-[320px] p-0 rounded-2xl relative top-5  shadow-lg z-10">
        <div className=" w-full h-full rounded-2xl p-4 relative bottom-12 flex gap-8 flex-col ">
          {/* one */}
          <div className="flex-1 flex justify-center ">
            <div className="bg-[#0452a0] h-44 w-44 rounded-full">
              <div className="bg-[#ffffff] flex  h-40 w-40 relative top-2 left-2 text-center align-middle rounded-full">
                <div className=" flex flex-col ">
                  <span className="flex-1 align-middle">
                    <img src="" alt="" />
                  </span>
                  <h1 className="flex-1 text-xl text-[#0452a0] relative bottom-2 font-semibold">
                    Quick Check Front Office
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* two */}
          <div className="flex-1 justify-center  text-center">
            <h2 className="font-medium text-xl">Hi Username</h2>
            <span className=" flex justify-center ">
              <img
                src="https://www.sukhothai.in/wp-content/uploads/2016/07/male-passport-size-2.jpg"
                alt=""
                className="w-20  h-20 l rounded-full object-cover my-4 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.4)]"
              />
            </span>
            <h3 className="text-sm ">
              This checkbox helps you to work flawlessly
            </h3>
            <h2 className="text-lg">Good Day!</h2>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <span className="flex justify-evenly">
              <button className="bg-[#ffffff] text-[#0452a0] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.4)] px-3 py-1 ">
                <FaRegCircle className="inline relative right-2 bottom-[1px] pr-[7px] text-gray-400" />
                Stationery
              </button>
              <button className="bg-[#ffffff] text-[#0452a0] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.4)] px-3 py-1 ">
                <FaRegCircle className="inline relative right-2 bottom-[1px] pr-[7px] text-gray-400" />
                Documents
              </button>
            </span>
            <span className="flex justify-center">
              <button className="bg-[#0452a0] rounded-full  text-[#fafafa] px-6 py-2 text-sm  shadow-[0px_2px_5px_0px_rgba(0,0,0,0.4)]">
                GO TO DASHBOARD
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

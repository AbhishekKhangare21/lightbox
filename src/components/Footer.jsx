import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#222222] mt-10 py-5 text-white text-[14px]">
      <div className="flex justify-center align-middle flex-col w-60 text-center m-auto">
        <div>
          <span className="text-[#e4d3bb]">©</span>{" "}
          <span className="text-[#ffe9c1]">ToChat.be</span>
        </div>
        <ul className="flex justify-center align-middle gap-3 text-[#655a4b] ">
          <li className="hover:text-[#fdcc3e] ">Privacy</li>
          <li className="hover:text-[#fdcc3e] ">Terms</li>
          <li className="hover:text-[#fdcc3e] ">FAQ</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

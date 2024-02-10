import React from "react";
import crown from "../../Assets/crown.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center mx-auto container">
      <div className="text-center mx-4 my-4">
        <FontAwesomeIcon className="text-yellow-900 text-6xl" icon={faCrown} />
        <p className="text-white">crown</p>
      </div>

      <div className="text-center mx-4 my-4">
        <div className="flex items-center">
          <FontAwesomeIcon className="text-white text-6xl" icon={faClipboardCheck} />
          <p className="border border-red-700 rounded-full p-0 text-white bg-red-700 h-[20px] w-[20px] right-6 bottom-4 flex items-center justify-center relative  text-xs ml-2">2</p>
        </div>
        <p className="text-white text-center pr-6">ab</p>
      </div>

      <div className="text-center mx-4 my-4">
        <FontAwesomeIcon className="text-yellow-900 text-6xl font-extrabold" icon={faCrown} />
        <p className="text-white">crown</p>
      </div>

      <div className="text-center mx-4 my-4">
        <div className="flex items-center">
          <FontAwesomeIcon className="text-white text-6xl" icon={faClipboardCheck} />
          <p className="border border-red-700 rounded-full p-0 text-white bg-red-700 h-[20px] w-[20px] right-6 bottom-4 flex items-center justify-center relative  text-xs ml-2">2</p>
        </div>
        <p className="text-white text-center pr-6">ab</p>
      </div>
    </div>
  );
};

export default Footer;

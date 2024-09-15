import React from "react";
import banner_img from "../../../../public/Images/banner.png";

const Banner = () => {
  return (
    <>
      <div className="flex bg-lightBlueCustom w-full h-auto justify-between py-0.5 items-center px-4 md:px-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left px-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-blue-700">Salesforce</span> <br />
              Online Training & <br /> Job Support Platform
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Go digital fast and empower your teams to work from anywhere
            </p>
            <button className="mt-6 px-8 py-3 bg-blue-950 text-white text-lg rounded-md shadow-lg hover:bg-blue-900 transition duration-300">
              Register Now
            </button>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <img className="h-auto w-96 md:w-full object-cover" src={banner_img} alt="banner image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

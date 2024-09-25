import React, { useState } from "react";
// import Image from 'next/image'; // Make sure to use this if using Next.js for optimized images
import workwithus from '../../../../public/Images/workwithus.jpeg'; // Your image path
import FAQ from "./Faq";

const WorkWithUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    experience: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log(formData);
  };

  return (
    <div className="">
    <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto bg-white p-8 shadow-md rounded-lg">
      {/* Form section */}
      <div className="w-full md:w-1/2 pr-4">
        <h2 className="text-2xl font-semibold mb-6">
          Fill the form to upload your Resume
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">
                Phone No. <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">
                Upload Resume
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">
                Experience in Year
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select Experience</option>
                <option value="0-2">0 to 2 Years</option>
                <option value="2-5">2 to 5 Years</option>
                <option value="5+">5+ Years</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Image section */}
      <div className="hidden md:block w-full md:w-1/2">
        {/* If using Next.js, Image optimization */}
        <img
          src={workwithus}
          alt="Work with us"
          className="rounded-lg object-cover h-full"
          layout="responsive"
        />
      </div>
    </div>
    <FAQ />
    </div>
  );
};

export default WorkWithUs;

import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submit logic here
    console.log(form);
  };

  return (
    <div className="container mx-auto my-16 px-4 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Contact Information Section */}
        <div className="">
          <img
            className="w-100 h-96 m-20"
            src="public/images/contactus.jpg"
            alt=""
          />
        </div>

        {/* Contact Form Section */}
        <div className="bg-indigo-900 p-3 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-5">
            Contact our support team to know what you want
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Name *"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Email *"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Phone No. *"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Message *"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          We’re here to help and answer any question you might have. We look
          forward to hearing from you.
        </h2>

        <div className="space-y-6">
          {/* Phone Section */}
          <div className="flex justify-between items-center space-x-4">
            <div className="flex items-center justify-center gap-2 mt-6 p-3">
                <FaPhone className="" />
              <p className="text-gray-600">(+91) 9394-117-119</p>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6 p-3">
              <MdOutlineMail />
              <p className="text-gray-600">svtechsoft@gmail.com</p>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6 p-3">
            <IoHomeOutline />
              <p className="text-gray-600">
                104, Sai Blue Petal, Srinivasa Nagar, Madhurawada,
                Visakhapatnam, Andhra Pradesh - 530048
              </p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <i className="fab fa-youtube text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
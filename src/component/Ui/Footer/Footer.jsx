import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";//<FaFacebook />
import { FaTwitter } from "react-icons/fa";//<FaTwitter />
import { RiInstagramFill } from "react-icons/ri";//<RiInstagramFill />
import { IoLogoWhatsapp } from "react-icons/io";//<IoLogoWhatsapp />
import { AiFillYoutube } from "react-icons/ai";//<AiFillYoutube />
import { FaPinterest } from "react-icons/fa6";//<FaPinterest />

const Footer = () => {
  return (
    <footer className="bg-blue-50 pt-10 w-screen">
      <div className="container mx-auto flex flex-wrap justify-between text-gray-800">
        {/* Company Info Section */}
        <div className="w-full md:w-1/4 mb-8">
          <img src="/logo.png" alt="SV Tech Soft Logo" className="w-40 mb-4" />
          <p className='w-64'>
            Founded in 2010 and based in India, SV Tech Soft provides training, consulting, IT remote support, and IT resourcing.
          </p>
          <p className='w-64'>
            In training, our sole motto is <span className="font-bold text-blue-600">“Customer Satisfaction”</span> through quality support, which shows in our client's testimonial about our support.
          </p>
        </div>
        
        {/* Policies Section */}
        <div className="w-full md:w-1/4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Policies</h3>
          <ul>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Payment & Refund Policy</a></li>
          </ul>
        </div>
        
        {/* Quick Links Section */}
        <div className="w-full md:w-1/4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Job Support</a></li>
            <li><a href="#" className="hover:underline">Work with Us</a></li>
          </ul>
        </div>
        
        {/* Contact Section */}
        <div className="w-full md:w-1/4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p><a href="mailto:svtechsoft@gmail.com" className="flex items-center gap-2 hover:underline"><span className="text-blue-400"><FaPhoneAlt /></span>svtechsoft@gmail.com</a></p>
          <p><a href="tel:+919394117119" className="flex items-center gap-2 hover:underline"><span className="text-blue-400"><MdEmail /></span>(+91) 9394117119</a></p>
          <div className="flex text-xl space-x-4 mt-4">
            <a href="#" className="text-gray-800 hover:text-blue-600"><i className="fab fa-facebook-f"><FaFacebook /></i></a>
            <a href="#" className="text-gray-800 hover:text-blue-600"><i className="fab fa-twitter"><FaTwitter /></i></a>
            <a href="#" className="text-gray-800 hover:text-blue-600"><i className="fab fa-instagram"><RiInstagramFill /></i></a>
            <a href="#" className="text-gray-800 hover:text-blue-600"><i className="fab fa-whatsapp"><IoLogoWhatsapp /></i></a>
            <a href="#" className="text-gray-800 hover:text-blue-600"><i className="fab fa-youtube"><AiFillYoutube /></i></a>
            <a href="#" className="text-gray-800 hover:text-blue-600"><i className="fab fa-pinterest"><FaPinterest /></i></a>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="text-center py-4 text-sm text-gray-600">
        <p>Copyright © 2023 <a href="#" className="text-[#0A93CC] hover:underline">SV Tech Soft</a> | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

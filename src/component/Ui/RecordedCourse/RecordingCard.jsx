import React from "react";
import { GoDotFill } from "react-icons/go"; // Recorded indicator
import { IoMdBook } from "react-icons/io"; // Lessons icon
import { LuUsers2 } from "react-icons/lu"; // Students icon
import StarRating from "./StarRating";

const RecordingCard = ({ image, title, lessons, students, rating }) => {
  console.log(rating)
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center cursor-pointer w-60">
      {/* Image Section with REC indicator */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="rounded-t-lg w-full h-36 object-cover"
        />
        {/* REC icon with red background */}
        <div className="absolute top-2 left-2 flex items-center bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          <GoDotFill className="mr-1" />
          REC
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex justify-around">
          <div className="image">
            <img src="/logo.png" className="w-25 h-7" alt="SV Tech Soft" />
          </div>
          <div className="rating">
          <StarRating rating={rating} />

          </div>
        </div>
        {/* Course Title */}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

        {/* Lesson and Student Info */}
        <div className="flex justify-between mt-4 text-gray-600">
          {/* Lessons Info */}
          <div className="flex items-center space-x-1">
            <IoMdBook className="text-lg text-green-600" />
            <span>Lesson {lessons}</span>
          </div>

          {/* Students Info */}
          <div className="flex items-center space-x-1">
            <LuUsers2 className="text-lg text-blue-600" />
            <span>Student {students}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordingCard;

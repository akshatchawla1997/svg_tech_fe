import React from "react";

const RecordingCard = ({ image, title, lessons, students }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 text-center cursor-pointer">
      <div className="relative">
        <img src={image} alt={title} className="rounded-t-lg w-full h-48 object-cover" />
        <div className="absolute top-2 left-2 bg-red-500 text-white text-sm rounded-full p-1">REC</div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600 mt-2">Lesson {lessons}</p>
        <p className="text-gray-600 mt-1">Student {students}</p>
      </div>
    </div>
  );
};

export default RecordingCard;

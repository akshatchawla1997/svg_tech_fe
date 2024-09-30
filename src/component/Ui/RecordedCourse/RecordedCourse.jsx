import React from "react";
import RecordingCard from "./RecordingCard"; // Import the RecordingCard component
import recordings from "./recordings.json"; 
// import Link from 'next/link';

const RecordedCourse = () => {
  return (
    <div className=" bg-gradient-to-b from-white to-[#E7F5FA]  w-screen  p-20">
      {/* Search Bar */}
      <h1 className="text-4xl font-semibold text-[#3393D0] text-left py-10">
        <span className="text-black">Search Result for </span> “salesforce”
      </h1>
      <div className="flex items-center mb-8 gap-5 bg-white border border-gray-300 rounded-lg py-2">
        <h1 className="flex justify-center items-center ml-4">Look For</h1>
        <input
          type="text"
          placeholder="Salesforce"
          className="w-[30%] p-4 text-gray-700 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
        />
        <h1 className="flex justify-center items-center ml-4">in</h1>
        <select className="p-4 text-[#87909c] border border-l-0 border-gray-300 rounded-none focus:outline-none focus:border-blue-500 w-1/2 bg-[#f2f2f2]">
          <option>Select Course Category</option>
        </select>
        <button className="px-8 py-4 text-white bg-yellow-500 rounded-r-lg hover:bg-yellow-600 focus:outline-none">
          Search
        </button>
      </div>

      {/* No Results Message */}
      <p className="text-gray-700 text-lg">
        Sorry, but nothing matched your search terms. Please try again with some
        different keywords.
      </p>

      {/* Recorded Courses */}
      <h2 className="mt-8 mb-4 text-4xl font-bold text-gray-800 ">
        Recorded Courses
      </h2>
      <p className="text-gray-700 text-lg pb-5 pr-48">
      Credibly syndicate transparent interfaces and client-focused synergy. Objectively embrace revolutionary infomediaries virtual functionalities. Monotonectally myocardinate client-based processes before intermandated models prospective.
      </p>

      {/* Recorded Courses Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {recordings.map((recording, index) => (
          <RecordingCard
            key={index}
            image={recording.image}
            title={recording.title}
            lessons={recording.lessons}
            students={recording.students}
          />
        ))}
      </div>
    </div>
  );
};

export default RecordedCourse;

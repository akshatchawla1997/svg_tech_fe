import React from 'react';

const BlogCard = ({ title, description, additionalDescription, author, date, imageUrl, readMoreUrl }) => {
  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden mb-6">
      {/* Image Section */}
      <div className="w-1/3 m-3">
        <img
          className="object-cover h-full w-full"
          src={imageUrl}
          alt={title}
        />
      </div>
      {/* Text Section */}
      <div className="w-2/3 p-6">
        <h3 className="text-lg font-semibold text-indigo-600">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <p className="mt-1 text-gray-500">{additionalDescription}</p>
        <div className="flex items-center text-sm text-gray-500 mt-4">
          <span>{author}</span>
          <span className="mx-2">&bull;</span>
          <span>{date}</span>
        </div>
        <a href={readMoreUrl} className="mt-4 text-blue-600 hover:underline">
          Read more...
        </a>
      </div>
    </div>
  );
};

export default BlogCard;

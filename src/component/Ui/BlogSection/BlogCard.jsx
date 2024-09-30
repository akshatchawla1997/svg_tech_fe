import React from 'react';

const BlogCard = ({ title, description, additionalDescription, author, date, imageUrl, readMoreUrl }) => {
  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden mb-6">
      {/* Image Section */}
      <div className="w-1/4">
        <img
          className="object-cover h-full w-full"
          src={imageUrl}
          alt={title}
        />
      </div>

      {/* Text Section */}
      <div className="w-3/4 p-4 flex flex-col justify-between">
        <div>
          {/* Title Section */}
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          
          {/* Description */}
          <p className="mt-2 text-gray-700 text-sm">{description}</p>

          {/* Additional Description */}
          <p className="mt-2 text-gray-600 text-xs line-clamp-2">
            {additionalDescription}
          </p>
        </div>

        {/* Author and Date Section */}
        <div className="flex items-center text-xs text-gray-500 mt-4">
          <span>{author}</span>
          <span className="mx-2">&bull;</span>
          <span>{date}</span>
        </div>

        {/* Read More Link */}
        <div>
          <a href={readMoreUrl} className="text-blue-600 hover:underline text-sm mt-4 block">
            Read more...
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

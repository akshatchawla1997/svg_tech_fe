import React from 'react';

const BlogCard = ({ title, description, additionalDescription, author, date, imageUrl, readMoreUrl }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-6">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={imageUrl} // Dynamically set image
            alt={title}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <p className="mt-2 text-gray-500">{description}</p>
          <p className="mt-2 text-gray-500">{additionalDescription}</p>
          <div className="flex items-center mt-4 text-sm text-gray-500">
            <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 11c0 2.21-1.79 4-4 4H5v4h2a4 4 0 004 4V7m0-4H7m0 8H3" />
            </svg>
            <span>{author}</span>
            <span className="mx-2">&bull;</span>
            <span>{date}</span>
          </div>
          <a href={readMoreUrl} className="mt-4 text-blue-500 hover:underline">Read more...</a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

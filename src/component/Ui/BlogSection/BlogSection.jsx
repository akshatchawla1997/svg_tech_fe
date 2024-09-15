// BlogSection.jsx
import React from 'react';
import BlogCard from './BlogCard'; // Import BlogCard component

const BlogSection = () => {
  const blogs = [
    {
      title: "Salesforce Commerce Cloud (B2C) Interview Q & A",
      description: "Which product types are there in SFCC? Standard, base(master), variation group, variation product, product set, product bundle.",
      additionalDescription: "What is the difference between a product set and product bundle? Product set elements can be purchased separately, while product bundle elements are not.",
      author: "svtechsoft",
      date: "April 9, 2023",
      imageUrl: "https://via.placeholder.com/150",
      readMoreUrl: "#"
    },
    {
      title: "Salesforce Commerce Cloud (B2C) Interview Q & A",
      description: "Which product types are there in SFCC? Standard, base(master), variation group, variation product, product set, product bundle.",
      additionalDescription: "What is the difference between a product set and product bundle? Product set elements can be purchased separately, while product bundle elements are not.",
      author: "svtechsoft",
      date: "April 9, 2023",
      imageUrl: "https://via.placeholder.com/150",
      readMoreUrl: "#"
    }
  ];

  return (
    <section className="bg-white w-screen py-16">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <h3 className="text-lg font-semibold text-[#0A92CD] mb-4">Our News & Blogs</h3>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Latest News & Blogs
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
              additionalDescription={blog.additionalDescription}
              author={blog.author}
              date={blog.date}
              imageUrl={blog.imageUrl}
              readMoreUrl={blog.readMoreUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

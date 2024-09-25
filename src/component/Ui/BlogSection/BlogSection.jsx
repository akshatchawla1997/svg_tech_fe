import React from 'react';
import BlogCard from './BlogCard';
import Blogs from  './Blogs.json'
const BlogSection = () => {
  // const blogs = [
  //   {
  //     title: "Salesforce Commerce Cloud (B2C) Interview Q & A",
  //     description: "Which product types are there in SFCC? Standard, base(master), variation group, variation product, product set, product bundle.",
  //     additionalDescription: "What is the difference between a product set and product bundle? Product set elements can be purchased separately, while product bundle elements are not.",
  //     author: "svtechsoft",
  //     date: "April 9, 2023",
  //     imageUrl: "https://www.salesforce.com/blog/wp-content/uploads/sites/2/2024/09/DF_entrance.jpg?w=889&h=500",
  //     readMoreUrl: "#"
  //   },
  //   // Additional blog entries can go here
  // ];

  return (
    <section className="bg-white w-full py-16 mx-36">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-semibold text-[#0A92CD] mb-4">Our News & Blogs</h3>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Latest News & Blogs
        </h2>

        <div className="grid gap-8">
          {Blogs?.map((blog, index) => (
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

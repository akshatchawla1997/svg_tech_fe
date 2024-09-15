import React from "react";
import { FiBook } from "react-icons/fi";
import { IoIosBookmarks } from "react-icons/io";
import { GiAchievement } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { HiMiniTrophy } from "react-icons/hi2";
function AboutUs() {
  return (
    <div className="w-screen">
      <section className="py-12 px-5 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-4 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome to SV Tech Soft.
            </h2>
            <p className="text-gray-700">
              Founded in 2010 and based in India, SV Tech Soft provides
              training, consulting, IT remote support, and IT resourcing. In
              training our sole motto is “Customer Satisfaction” through quality
              support, which shows in our client's testimonial about our
              support.
            </p>
            <p className="text-gray-700">
              One of the main reasons why large IT projects aren’t posted on
              freelancing platforms is that the relevant set of IT skill
              professionals aren’t always willing to work as freelancers.
            </p>
            <p className="text-gray-700">
              SV Tech Soft is considered the Best Salesforce job support and
              online training company. SV Tech Soft has the expertise in all
              Salesforce.com areas.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center relative">
            <div className="relative">
              {/* First Image */}
              <img
                src="/public/images/about_1_2.png"
                alt="Student Studying"
                className="w-72 h-72 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen bg-blue-900 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <GiAchievement className="text-5xl pb-3" />
            <h3 className="text-white text-xl font-semibold">
              Learn From Industry Leaders
            </h3>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <IoIosBookmarks className="text-5xl pb-3" />
            <h3 className="text-white text-xl font-semibold">
              Learn at Your Own Pace
            </h3>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <GrCertificate className="text-5xl pb-3" />
            <h3 className="text-white text-xl font-semibold">
              Professional Certification
            </h3>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src="https://imgs.search.brave.com/iAYRLJ2EQWBBh0mMzlAxiOj00cSOYW0H62CgzD9RAuU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb2Fj/dGl2ZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDcv/Q1RJX2NlcnRpZmll/ZC1jb2FjaGluZ180/LmpwZw"
              alt="Students"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Mission and Vision Section */}
          <div className="space-y-8">
            {/* Mission Section */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">
                  {/* Icon can be added here if you have one */}
                  <GoGoal className="text-5xl" />
                </span>
                Our Mission
              </h3>
              <p className="text-gray-700">
                Our mission is to provide comprehensive and accessible education
                and professional development opportunities to individuals. We
                strive to empower our students to acquire new skills, advance in
                their careers, and achieve their personal and professional
                goals.
              </p>
            </div>

            {/* Vision Section */}
            <div className="bg-blue-950 p-6 rounded-lg shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">
                  {/* Icon can be added here if you have one */}
                  <HiMiniTrophy className="text-5xl" />
                </span>
                Our Vision
              </h3>
              <p>
                Our vision is to be the premier destination for lifelong
                learning and professional development. We aspire to be
                recognized for our excellence in education and for our
                commitment to providing our students with the skills and
                knowledge they need to succeed in today's competitive job
                market.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-36 py-10 text-xl">
        <p>
          Our website is widely regarded as the most effective resource for
          locating and hiring Salesforce freelancers for implementation and
          outsourcing projects. For complex and time-sensitive implementation
          activities, outsource Salesforce projects. And you can be assured that
          it will be completed correctly, on schedule, and to your complete
          satisfaction.
        </p>
        <br /><br />
        <p>
          For online Salesforce job support in projects, SV Tech Soft offers
          Skill checked trained Salesforce freelancers. There’s no need to be
          concerned about comparing different freelancers on various criteria.
          It takes up a lot of time and is very annoying. In the IT industry,
          one individual can be skilled in a variety of technologies. He may be
          excellent in one Salesforce but not in another. So, if a client
          chooses a freelancer based on their overall ranking, there’s a chance
          he’ll hire the wrong person. As a result, the customer could lose the
          right Salesforce freelancer or Subject Matter Expert. All is taken
          care of by SV Tech Soft. We’ll put you in touch with the best
          Salesforce freelancers in your price range. Who will have online
          Salesforce work support as a freelancer? Hire a Salesforce
          implementation freelancer who can complete end-to-end comprehensive
          Salesforce implementation projects.
        </p>
        <br /><br />
        <p>
          After seeing the analysis, seeking Salesforce job assistance from
          subject matter experts is not a good idea. When it comes to IT
          ventures, there are a few things to keep in mind. Since every project
          has a deadline. As a result, we provide you with fully personalized
          solutions. A video conference call with the subject matter expert will
          be set up. Anything can be discussed with the client. Only when the
          customer is pleased with the subject matter expert’s or Salesforce
          freelancer’s experience does he need to pay.
        </p>
        <br /><br />
        <p>
          If something goes wrong, SV Tech Soft will have a free substitute
          right away. Following client acceptance, funds will be allocated to
          Salesforce freelancers or subject matter experts at different stages
          of project completion.
        </p>
        <br /><br />
        <p>
          Taking Salesforce technology training to the next level, SV Tech Soft
          has been active in shaping bright career of smart professionals. The
          trainers are highly experienced in imparting productive knowledge on
          industry-specified methodologies and offers relative practical
          experience. We, at the SV Tech Soft, help candidates in acquiring
          certificates, master interview questions, and prepare brilliant
          resumes. Indeed, our Salesforce online training modules encompass an
          array of various cloud technologies with a vigilant eye over latest
          salesforce courses. We believe in keeping our students abreast of
          everything in the salesforce world.{" "}
        </p>
        <br /><br />
        <p>
          Being the leading salesforce training and consulting service provider
          in the market, SV Tech Soft is committed towards giving best-in-class
          online and corporate training services on Salesforce CRM technology.
          Apart from offering hands-on training and certification, our learning
          prospects are extended to placement as well as consultation services.
          These courses and updated knowledge has enabled us to train some of
          the most brilliant software experts, who made a mark in the business.
          Indeed, we have earned the trust of our clients by giving high-grade
          training on various different salesforce modules. Our sole purpose is
          to craft the best of business handling skills and polish them to such
          an extent that progress never hinders.{" "}
        </p>
      </section>
    </div>
  );
}

export default AboutUs;

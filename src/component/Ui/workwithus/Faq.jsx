import React, { useState } from "react";
import faqsData from './faqs.json'; // Import the FAQ data

const FAQ = () => {
  // State to track the index of the currently opened question
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  // Function to toggle question visibility
  const toggleAnswer = (index) => {
    // If the clicked question is already open, close it. Otherwise, open it.
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-semibold text-center mb-6">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqsData.map((faq, index) => (
          <div key={faq.id} className="border-b pb-4">
            {/* Question */}
            <div
              className="cursor-pointer flex justify-between items-center"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              <span>{openQuestionIndex === index ? "-" : "+"}</span>
            </div>
            {/* Answer (visible when clicked) */}
            {openQuestionIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

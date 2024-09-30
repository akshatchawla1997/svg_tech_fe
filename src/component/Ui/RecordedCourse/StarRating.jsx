import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating }) => {
    console.log(rating)
  // Ensure rating is a valid number between 0 and 5
  const validRating = typeof rating === 'number' && rating >= 0 && rating <= 5 ? rating : 0;

  const totalStars = 5;
  const fullStars = Math.floor(validRating); // Full yellow stars
  const halfStar = validRating % 1 !== 0 ? 1 : 0; // Half star if there's a decimal
  const emptyStars = totalStars - fullStars - halfStar; // Empty stars

  return (
    <div className="flex">
      {/* Render full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="text-yellow-400" size={20} />
      ))}
      {/* Render half star if applicable */}
      {halfStar === 1 && <FaStarHalfAlt className="text-yellow-400" size={20} />}
      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} className="text-gray-300" size={20} />
      ))}
    </div>
  );
};

export default StarRating;

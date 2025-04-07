import { useState } from "react";
import PropTypes from "prop-types";

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseEnter = (index) => setHoveredRating(index);
  const handleMouseLeave = () => setHoveredRating(0);
  const handleClick = (index) => setRating(index);

  const handleSubmit = () => {
    if (rating < 1 || rating > 5) {
      alert("Please select a rating between 1 and 5.");
      return;
    }
    onRatingSubmit(productId, rating);
    setRating(0);
  };

  return (
    <div className="rating-widget">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((index) => (
          <span
            key={index}
            className={`star ${
              index <= (hoveredRating || rating) ? "filled" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={handleSubmit} className="submit-button">
        Submit Rating
      </button>
    </div>
  );
}

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;

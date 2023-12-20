import React, { useState } from "react";
import "./svgheart.css";

const HeartSVG = () => {
  const [filled, setFilled] = useState(false);
  const [liked, setLiked] = useState(18);

  const handleClick = () => {
    setFilled(!filled);
    if (!filled) {
      setLiked(liked + 1);
    } else setLiked(liked - 1);
  };

  return (
    <div className="heartSvg">
      <svg
        onClick={handleClick}
        width="40"
        height="40"
        viewBox="0 0 30 30"
        fill={filled ? "red" : "none"}
        stroke="white"
        strokeWidth={filled ? "2" : "1"}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
      <span>{liked}</span>
    </div>
  );
};

export default HeartSVG;

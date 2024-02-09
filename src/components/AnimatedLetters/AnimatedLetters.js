import React, { useState, useEffect } from 'react';
import './animated_letters.scss'; // Import CSS file with animations


const AnimatedLetters = ({ letters, animation }) => {
  const [animate, setAnimate] = useState(true);

  const handleHover = () => {
    setAnimate(true);
  };

  return (
    <div className="animated-letters-container" onMouseEnter={handleHover}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`animated-letter ${animate && animation}`}
          onAnimationEnd={() => setAnimate(false)}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default AnimatedLetters;


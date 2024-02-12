import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './animated_letters.scss'; // Import CSS file with animations

const AnimatedLetters = ({ letters, animation }) => {
  const [animate, setAnimate] = useState(true);

  const handleHover = () => {
    setAnimate(true);
  };

  return (
    <div className="animated-letters-container" onMouseEnter={handleHover}>
      {letters.map((letter) => (
        <span
          key={uuidv4()}
          className={`animated-letter ${animate && animation}`}
          onAnimationEnd={() => setAnimate(false)}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

AnimatedLetters.propTypes = {
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  animation: PropTypes.string.isRequired,
};

export default AnimatedLetters;

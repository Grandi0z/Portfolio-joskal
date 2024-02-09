import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './technologies.scss';


const TechnologyItem = (props) => {
  const { technology } = props;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-fit md:w-1/4 sm:w-1/2">
      <div className="border-2 p-0.5 flex flex-col justify-center items-center
            flex-wrap border-gray-600 h-32 w-32 rounded-full transform
            transition duration-500 hover:scale-110
            bg-object"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-indigo-00 w-2/3 h-2/4 inline-block">
        <img
          src={technology.photo.svg}
          alt="technology"
          className={`filter-white h-16 w-16 m-auto ${isHovered ? technology.photo.filter : ''} `}
        />
        </div>
        <h3 className={`title-font font-medium text-xl h-1/4 ${isHovered ? `font-bold text-[${technology.photo.color}]` : 'text-white'}`}>{technology.name}</h3>
      </div>
    </div>
  );
};

TechnologyItem.propTypes = {
  technology: PropTypes.shape(
    {
      photo: PropTypes.string,
      name: PropTypes.string,
    },
  ).isRequired,
};

export default TechnologyItem;

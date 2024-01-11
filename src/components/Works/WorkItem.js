import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UsedTechs from '../UsedTechs/UsedTechs';
import WorkModal from './WorkModal';

const WorkItem = (props) => {
  const { project } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <button
      className="flex-shrink-0 m-6 relative overflow-hidden bg-object rounded-lg max-w-full xs:max-w-xs h-96 w-50 shadow-lg group"
      onClick={() => setIsModalOpen((prev) => !prev)}
      type="button"
      aria-label="Open modal"
    >
      <svg
        className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
        style={{ opacity: 0.1 }}
        viewBox="0 0 375 283"
        fill="none"
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div className="relative pt-2 px-2 w-80 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: 'radial-gradient(black, transparent 60%)',
            transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
            opacity: 0.2,
          }}
        />
        <img
          className="object-fill w-42 h-52"
          src={project.photo}
          alt="project"
        />
      </div>
      <div className="relative text-white px-2 pb-2 mt-2">
        <div className="h-32 flex flex-col justify-between items-center">
          <h3 className="block font-semibold text-xl group-hover:scale-110 transition-transform">
            {project.title}
          </h3>
          <div className="block opacity-75">
            <UsedTechs techs={project.technologies} />
          </div>
          <div className="flex justify-center gap-3">
            <span className="block bg-black rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none group-[hover]:text-yellow-100 flex items-center">
              <Link type="button" to={project.demoLive} target="_blank">
                Live Demo
              </Link>
            </span>
            <span className="block bg-black rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none group-[hover]:text-yellow-100 flex items-center">
              <Link type="button" to={project.code} target="_blank">
                Repository
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className={isModalOpen ? 'showWorkModal' : 'hidden'}>
        <WorkModal project={project} setIsModalOpen={setIsModalOpen} />
      </div>
    </button>
  );
};

WorkItem.propTypes = {
  project: PropTypes.shape(
    {
      photo: PropTypes.string,
      title: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        color: PropTypes.string,
      })),
      demoLive: PropTypes.string,
      code: PropTypes.string,
    },
  ).isRequired,
};

export default WorkItem;

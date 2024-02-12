import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UsedTechs from '../UsedTechs/UsedTechs';
import { XIcon } from '../../tools/features';

const WorkModal = (props) => {
  const { project } = props;
  // const [isModalOpen, setIsModalOpen] = useState(MyModal.setIsModalOpen);
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-800 bg-opacity-50">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md overflow-hidden mx-2 md:mx-0 dark:bg-gray-900">
        <div className="flex justify-between items-center px-6 py-4">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <button
            size="icon"
            type="button"
            // onClick={() => { setIsModalOpen((prev) => !prev); return isModalOpen; }}
          >
            <XIcon className="w-6 h-6" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <img
          alt="Project"
          className="object-cover w-full h-64"
          height={600}
          src={project.photo}
          style={{
            aspectRatio: '800/600',
            objectFit: 'cover',
          }}
          width={800}
        />
        <div className="px-6 py-4">
          <p className="text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
        </div>
        <div className="px-6 py-4 flex justify-between flex-col items-center">
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold m-auto">Technologies</h3>
            <UsedTechs techs={project.technologies} />
          </div>
          <div className="flex space-x-4 my-4">
            <Link
              to={project.code}
              target="_blank"
              className="text-gray-400 hover:text-gray-300 focus:animate-pulse flex"
            >
              <GithubIcon className="w-4 h-4 mr-2" />
              Repository
            </Link>
            <Link
              to={project.demoLive}
              target="_blank"
              className="text-gray-400 hover:text-gray-300 focus:animate-pulse flex"
            >
              <GlobeIcon className="w-4 h-4 mr-2" />
              Live demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const GithubIcon = (props) => (
  <svg
  /* eslint-disable-next-line react/jsx-props-no-spreading */
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400 hover:text-gray-300 focus:animate-pulse"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const GlobeIcon = (props) => (
  <svg
  /* eslint-disable-next-line react/jsx-props-no-spreading */
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400 hover:text-gray-300 focus:animate-pulse"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

WorkModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    photo: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    })),
    code: PropTypes.string,
    demoLive: PropTypes.string,
  }).isRequired,
};
export default WorkModal;

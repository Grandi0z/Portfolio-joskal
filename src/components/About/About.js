// About.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { aboutInfo, modalState } from '../../tools/features';
import ContactMe from './ContactMe';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import profile from '../../assets/images/profile/profiles.jpg';
import './about.scss';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(modalState);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-24 section-about border-r-2">
      <div className="bg-black/60">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-black shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src={profile}
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                    alt="profile"
                  />
                  <h1 className="text-xl font-bold">
                    {aboutInfo.bioInfo.name}
                  </h1>
                  <p className="text-gray-400">FullStack Developer</p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <a
                      href={aboutInfo.bioInfo.contactInfo.resume}
                      target="_blank"
                      className="bg-green-700 shadow-lg shadow-green-500/50 hover:bg-green-500/80
                      hover:shadow-lime-500/50 text-white py-2 px-4 rounded
                      dark:bg-green-500 dark:shadow-lg dark:shadow-green-500/50 dark:hover:bg-green-600
                      dark:hover:shadow-lime-500/50"
                      rel="noreferrer"
                    >
                      Resume
                    </a>
                    <button
                      className="contact_me bg-blue-800/80 shadow-lime-500/10"
                      onClick={() => setIsModalOpen((prev) => !prev)}
                      type="button"
                      aria-label="Open modal"
                      rel="noreferrer"
                    >
                      Get in touch
                    </button>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-400 uppercase font-bold tracking-wider mb-2">
                    Hardware
                  </span>
                  <ul>
                    <li className="mb-2">
                      <Link
                        to="https://www.lenovo.com/fr/fr/p/laptops/thinkpad/thinkpadt/thinkpad-t460s/22tp2tt460s"
                        target="_blank"
                        className="text-gray-300"
                      >
                        <i className="bi bi-laptop" />
                        Lenovo ThinkPad T460s
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        to="https://support.hp.com/ch-fr/document/c05268678"
                        target="_blank"
                        className="text-gray-300"
                      >
                        <i className="bi bi-laptop" />
                        HP EliteBook 840 G-3
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        to="https://www.lenovo.com/us/en/p/accessories-and-software/monitors/home/67aakcc3us"
                        target="_blank"
                        className="text-gray-300"
                      >
                        <i className="bi bi-display" />
                        Lenovo L24e-40
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-black shadow rounded-lg p-6">
                <h2>
                  <AnimatedLetters
                    letters={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    animation="pulse"
                  />
                </h2>
                <div className="text-gray-300">
                  <p>{aboutInfo.bioInfo.intro}</p>
                  <p>{aboutInfo.bioInfo.studyInfo}</p>
                  <div>
                    <h4>Full-Stack Expertise:</h4>
                    <ul className="info-list">
                      {aboutInfo.bioInfo.experienceInfo.map(
                        (element) => (
                          <li key={uuidv4()}>{element}</li>),
                      ) }
                    </ul>
                  </div>
                  <div>
                    <h4>Beyond the Code:</h4>
                    <ul className="info-list">
                      {aboutInfo.bioInfo.beyondCode.map(
                        (element) => (
                          <li key={uuidv4()}>{element}</li>),
                      ) }
                    </ul>
                  </div>
                  <div>
                    <h4>Driven by Curiosity:</h4>
                    <ul className="info-no-list">
                      {aboutInfo.bioInfo.divers.map(
                        (element) => (
                          <li key={uuidv4()}>{element}</li>),
                      ) }
                    </ul>
                  </div>
                  <br />
                  <p>{aboutInfo.bioInfo.contributionInfo}</p>
                  <br />
                  <p>{aboutInfo.bioInfo.skillsInfo}</p>
                </div>
                <h3 className="font-semibold text-center mt-3 -mb-2">
                  Find me on
                </h3>
                <div className="flex justify-center items-center gap-6 my-6">
                  <Link
                    className="text-gray-400 hover:text-blue-600"
                    aria-label="Visit GitHub"
                    to={aboutInfo.bioInfo.contactInfo.github}
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      className="h-6"
                    >
                      <path
                        fill="currentColor"
                        d="M8 .297C3.589.297 0 3.886 0 8.297c0 3.653 2.363 6.746 5.637 7.853.412.076.56-.178.56-.396 0-.196-.007-.712-.01-1.397-2.291.498-2.784-1.153-2.784-1.153-.375-.952-.916-1.205-.916-1.205-.748-.51.057-.5.057-.5.828.058 1.264.855 1.264.855.735 1.26 1.927.898 3.016.688.094-.53.29-.891.528-1.096-1.853-.21-3.8-.926-3.8-4.117 0-.912.324-1.658.855-2.244-.085-.21-.372-1.063.082-2.213 0 0 .703-.225 2.3.86a7.75 7.75 0 0 1 2.057-.278c.696.002 1.397.094 2.057.278 1.593-1.084 2.297-.86 2.297-.86.455 1.15.168 2.004.082 2.213.531.586.853 1.332.853 2.244 0 3.198-1.953 3.906-3.81 4.113.3.258.567.766.567 1.546 0 1.117-.01 2.016-.01 2.291 0 .221.146.476.567.394C13.635 14.043 16 10.95 16 8.297 16 3.886 12.411.297 8 .297z"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="text-gray-400 hover:text-blue-600"
                    aria-label="Visit TrendyMinds LinkedIn"
                    to={aboutInfo.bioInfo.contactInfo.linkedin}
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-6"
                    >
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="text-gray-400 hover:text-blue-600"
                    aria-label="Visit TrendyMinds Facebook"
                    to={aboutInfo.bioInfo.contactInfo.facebook}
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="h-6"
                    >
                      <path
                        fill="currentColor"
                        d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="text-gray-400 hover:text-blue-600"
                    aria-label="Visit TrendyMinds Instagram"
                    to={aboutInfo.bioInfo.contactInfo.instagram}
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-6"
                    >
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="text-gray-400 hover:text-blue-600"
                    aria-label="Visit TrendyMinds Twitter"
                    to={aboutInfo.bioInfo.contactInfo.twitter}
                    target="_blank"
                  >
                    <svg
                      className="h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      />
                    </svg>
                  </Link>
                </div>

                <h2 className="text-xl font-bold mt-6 mb-4">Hobbies</h2>
                <div className="mb-6">
                  <ul className="flex justify-between flex-wrap gap-2 w-full">
                    <li className="text-gray-400 font-bold">Content writer</li>
                    <li className="text-gray-400 font-bold">Manga</li>
                    <li className="text-gray-400 font-bold">
                      Talking about superheroes
                    </li>
                    <li className="text-gray-400 font-bold">
                      Watching horror movies
                    </li>
                  </ul>
                  <p className="mt-2" />
                </div>
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
      <div className={isModalOpen ? 'showWorkModal' : 'hidden'}>
        <ContactMe closeModal={closeModal} />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  aboutInfo: state.aboutInfo,
});

export default connect(mapStateToProps)(About);

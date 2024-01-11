// About.js

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap-icons/font/bootstrap-icons.css';

const About = () => {
  const aboutInfo = {
    profileImage: 'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704546836/josephIo/Images/Profile/Picsart_22-11-28_13-42-04-893_j5u4hl.jpg',
    bioInfo: {
      name: 'Joseph Lwanzo Kausi',
      intro:
        "Hello, my name is Joseph! I'm a motivated software developer working in Goma.",
      studyInfo:
        "I'm currently working on my website, where you'll find everything I want to show the world. I did 3 years of university studies in computer science, which I supplemented with distance learning at a very selective school where I spent months working remotely with talented developers from different continents.",
      experienceInfo:
        'Take a look at the projects page for an overview of my work on open source software.',
      contributionInfo:
        "I'm active on my social media, or by email, so if you want to get in touch, don't hesitate, it's always a pleasure to meet new people.",
      skillsInfo: 'skills infos',
      contactInfo: {
        facebook: 'https://fr-fr.facebook.com/joseph.khausilj/',
        instagram: 'https://www.instagram.com/joseph_l_khausi/',
        linkedin: 'linkedin.com/in/joskal',
        twitter: 'https://twitter.com/Joseph_LSK',
        medium: 'medium.com/@josephlkausi',
        tiktok: 'tiktok.com/@grandioseh.fr',
        github: 'github.com/Grandi0z',
        email: 'josephlkausi@gmail.com',
        resume: 'https://docs.google.com/document/d/10NTVw12Jqzel3yX_4unJrOhg0_kLIhjWLl-Xi3sZf4Q/edit?usp=sharing',
      },

    },
    location: 'Nord Kivu Goma',
    website: 'hola.com',
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
                    src={aboutInfo.profileImage}
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                    alt="profile"
                  />
                  <h1 className="text-xl font-bold">{aboutInfo.bioInfo.name}</h1>
                  <p className="text-gray-400">
                    FullStack Developer
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <a
                      href={`mailto:${aboutInfo.bioInfo.contactInfo.email}`}
                      target="_blank"
                      className="bg-blue-500 shadow-lg shadow-blue-500/50 hover:bg-blue-600
                                  hover:shadow-cyan-500/50 text-white py-2 px-4 rounded
                                  dark:bg-blue-500 dark:shadow-lg dark:shadow-blue-500/50 dark:hover:bg-blue-600
                                  dark:hover:shadow-cyan-500/50"
                      rel="noreferrer"
                    >
                      Get in touch
                    </a>
                    <a
                      href={aboutInfo.bioInfo.contactInfo.resume}
                      target="_blank"
                      className="bg-green-500 shadow-lg shadow-green-500/50 hover:bg-green-600
                      hover:shadow-lime-500/50 text-white py-2 px-4 rounded
                      dark:bg-green-500 dark:shadow-lg dark:shadow-green-500/50 dark:hover:bg-green-600
                      dark:hover:shadow-lime-500/50"
                      rel="noreferrer"
                    >
                      Resume
                    </a>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-400 uppercase font-bold tracking-wider mb-2">
                    Hardware
                  </span>
                  <ul>
                    <li className="mb-2">
                      <Link to="https://www.lenovo.com/fr/fr/p/laptops/thinkpad/thinkpadt/thinkpad-t460s/22tp2tt460s" target="_blank" className="text-gray-300">
                        <i className="bi bi-laptop" />
                        Lenovo ThinkPad T460s
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="https://support.hp.com/ch-fr/document/c05268678" target="_blank" className="text-gray-300">
                        <i className="bi bi-laptop" />
                        HP EliteBook 840 G-3
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="https://www.lenovo.com/us/en/p/accessories-and-software/monitors/home/67aakcc3us" target="_blank" className="text-gray-300">
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
                <h2>About Me</h2>
                <div className="text-gray-300">
                  <p>{aboutInfo.bioInfo.intro}</p>
                  <p>{aboutInfo.bioInfo.studyInfo}</p>
                  <p>{aboutInfo.bioInfo.experienceInfo}</p>
                  <p>{aboutInfo.bioInfo.contributionInfo}</p>
                  <p>{aboutInfo.bioInfo.skillsInfo}</p>
                </div>
                <h3 className="font-semibold text-center mt-3 -mb-2">
                  Find me on
                </h3>
                <div className="flex justify-center items-center gap-6 my-6">
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
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-400 font-bold">
                      Writer
                    </span>
                  </div>
                  <p className="mt-2 text-gray-300" />
                </div>
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  aboutInfo: state.aboutInfo,
});

export default connect(mapStateToProps)(About);

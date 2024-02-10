import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faWindows } from '@fortawesome/free-brands-svg-icons'
import './home.scss'
import animateTitle from '../../tools/tools';


const Home = () => {
  // we initial call the animation on 'hi, I'm joseph' 5 second after the page load
  useEffect(() => {
    setTimeout(() => {
      animateTitle('h-animate');
  }, 5 * 1000);
  }, []);
  
// we call the animation every 60 seconds
  useEffect(() => {
    setInterval(() => {
      animateTitle('h-animate');
  }, 60 * 1000);
  }, [])

  return(
    <div className="section-main full-container">
      <div className='flex w-screen sm:items-center xs:p-3 md:p-0'>
        <ul className="font-bold text-center xs:w-100% home-list">
        <li>
          <div className="inline-flex flex-col  overflow-hidden">
            <ul className="block text-left leading-tight">
              <li className="group relative">
                <h1 className="group-hover:translate-y-[-100%] transition-transform duration-500">  
                <span className="h-animate">HI</span>
                </h1>
                <a href="#technologies">
                  <h1 className="absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 xs:hidden md:inline">
                    TECHNOLOGIES
                  </h1>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="text-indigo-500 inline-flex flex-col  overflow-hidden">
            <ul className="block text-left leading-tight">
              <li className="group relative">
                <h1 className="group-hover:translate-y-[-100%] transition">
                <span className="h-animate">I&apos;M</span>
                </h1>
                <a href="#works">
                  <h1 className="absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 xs:hidden md:inline">
                    WORKS
                  </h1>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="text-indigo-500 inline-flex flex-col  overflow-hidden">
            <ul className="block text-left leading-tight">
              <li className="group relative">
                <h1 className="group-hover:translate-y-[-100%] transition-transform duration-500">
                  <span className="h-animate">JOSEPH</span>
                </h1>
                <a href="#about">
                  <h1 className="absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 xs:hidden md:inline">
                    ABOUT ME
                  </h1>
                </a>
              </li>
            </ul>
          </div>
        </li>
        </ul>
        <div className='stage-cube-cont side-by-side'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faWindows} color="#5366FF"/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                        </div>
                    </div>
        </div>
      </div>
      
      <div className="p-2 text-gray-200 text-center text-lg xs:bg-blue-600/10 xs:text-[1rem] md:text-[1.2rem] md:p-6 md:bg-blue-600/0 full-side">
        <p>Let&apos;s turn your creative dreams into an epic adventure!</p>
        <p className="xs:hidden sm:block">
          Whether it&apos;s creating a super-powered product, adding a touch of magic or
          weaving fiction into a website, I&apos;ve
          got you covered!
        </p>
        <p>
          Take a look at some of my work and experiences. If you like what
          you see and have a project that&apos;s just waiting to become reality, don&apos;t
          hesitate to <span className="block contact_me">contact me!</span> 
        </p>
      </div>
    </div>
  )
};

export default Home;

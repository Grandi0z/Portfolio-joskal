import React from 'react';
import NavBarMobile from './NavBarMobile';

const MainContents = () => (
  <div className="full-container h-full flex items-center justify-center section-main flex-col">
    <div className="md:hidden">
      <NavBarMobile />
    </div>
    <ul className="text-4xl font-bold text-center">
      <li>
        <div className="inline-flex flex-col  overflow-hidden">
          <ul className="block text-left leading-tight">
            <li className="group relative">
              <h1 className="group-hover:translate-y-[-100%] transition-transform duration-500">
                <span className="invisible">We ned</span>
                HI
                <span className="invisible">Spaces.</span>
              </h1>
              <a href="#technologies">
                <h1 className="absolute w-auto top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ">
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
              <h1 className="group-hover:translate-y-[-100%] transition-transform duration-500">
                <span className="invisible">123</span>
                I&apos;M
                <span className="invisible">123</span>
              </h1>
              <a href="#works">
                <h1 className="absolute w-auto top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
                JOSEPH
              </h1>
              <a href="#about">
                <h1 className="absolute w-auto top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  ABOUT
                </h1>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <div className="w-2/3 text-gray-200 text-center text-lg xs:bg-blue-600/60 md:bg-blue-600/0">
      Ready to bring your ideas to life?
      <p>
        Whether it&apos;s creating a super-powered product, adding a touch of magic,
        weaving fiction into a website or creating a manga-worthy feature, I&apos;ve
        got you covered!
      </p>
      <p>
        Take a look at some of my heroic work and experiences. If you like what
        you see and have a project that&apos;s just waiting to become reality, don&apos;t
        hesitate to contact me! Let&apos;s turn your creative dreams into an epic
        adventure!
      </p>
    </div>
  </div>
);

export default MainContents;

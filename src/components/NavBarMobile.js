import React, { useState } from 'react';

const NavBarMobile = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-400">
      <nav className="nav-mobil">
        <section className="MOBILE-MENU flex lg:hidden pt-2">
          <button
            className="HAMBURGER-ICON space-y-2 fixed top-1 left-1"
            onClick={() => setIsNavOpen((prev) => !prev)}
            aria-label="Open menu"
            type="button"
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-200 transform transition-all duration-300 origin-left group-focus:translate-x-10" />
            <span className="block h-0.5 w-8 animate-pulse bg-gray-200 transform transition-all duration-300 group-focus:translate-x-10 delay-75" />
            <span className="block h-0.5 w-8 animate-pulse bg-gray-200 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150" />
          </button>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <button
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
              aria-label="Close menu"
              type="button"
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" className={isNavOpen ? 'visible' : 'hidden'} />
                <line x1="6" y1="6" x2="18" y2="18" className={isNavOpen ? 'visible' : 'hidden'} />
              </svg>
            </button>
            <div className={isNavOpen ? 'visible' : 'hidden'}>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a onClick={() => { setIsNavOpen(false); }} href="#about">About</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a onClick={() => { setIsNavOpen(false); }} href="#technologies">Technologies</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a onClick={() => { setIsNavOpen(false); }} href="#works">Projects</a>
                </li>
              </ul>
            </div>

          </div>
        </section>
      </nav>
    </div>
  );
};

export default NavBarMobile;

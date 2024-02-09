import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TechnologyItem from './TechnologyItem';
import { technologies } from '../../tools/features';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';


const Technologies = () => {
  
  const content = (
      <>
        <div className="container px-5 py-5 mx-auto">
          <ul className="flex flex-wrap -m-4 text-center justify-center gap-2 xs:justify-start">
            {technologies.languages.fontEnd.map((technology) => (
              <li key={uuidv4()} className="w-full xs:w-1/2 sm:w-1/3 md:w-1/4">
                <TechnologyItem technology={technology} />
              </li>
            ))}
            {technologies.languages.backEnd.map((technology) => (
              <li key={uuidv4()} className="w-full xs:w-1/2 sm:w-1/3 md:w-1/4">
                <TechnologyItem technology={technology} />
              </li>
            ))}
          </ul>
        </div>
        <div className="container px-5 py-5 mx-auto">
          <ul className="flex flex-wrap -m-4 text-center justify-center gap-2 xs:justify-start">
            {technologies.frameWorks.fontEnd.map((technology) => (
              <li key={uuidv4()} className="w-full xs:w-1/2 sm:w-1/3 md:w-1/4">
                <TechnologyItem technology={technology} />
              </li>
            ))}
            {technologies.frameWorks.backEnd.map((technology) => (
              <li key={uuidv4()} className="w-full xs:w-1/2 sm:w-1/3 md:w-1/4">
                <TechnologyItem technology={technology} />
              </li>
            ))}
          </ul>
        </div>
      </>
    );

  return (
    <section className="full-container tech-section">
      <h2 className=''>
      <AnimatedLetters 
                        letters={['T', 'e','c','h','n','l','o','g', 'i', 'e', 's']}
                        animation={'pulse'}
                    />
      

      </h2>
      <div className="grid grid-cols-2 ul-works">
        {content}
      </div>
    </section>
  );
};

export default Technologies;

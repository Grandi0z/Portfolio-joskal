import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import WorkItem from './WorkItem';
import { projects } from '../../tools/features';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './works.scss'

const Works = () => {
 
  const content = (
    <section className="full-container section-works" data-modal-target="default-modal" data-modal-toggle="default-modal">
      <h2>
      <AnimatedLetters 
                        letters={['P', 'r','o', 'j' ,'e', 'c','t', 's']}
                        animation={'pulse'}
                    />
      </h2>
      <div className="">
        <ul className="rounded-md hover:bg-blend-darken flex flex-wrap items-center justify-center ul-works">
          {projects.map((project) => (
            <li key={uuidv4()}><WorkItem project={project} /></li>
          ))}
        </ul>
      </div>
    </section>
  );
  return content;
};

export default Works;

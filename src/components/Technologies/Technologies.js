import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TechnologyItem from './TechnologyItem';

const Technologies = () => {
  const technologies = {
    languages: {
      fontEnd: [
        {
          name: 'HTML',
          photo:
            'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704550523/josephIo/Images/Technologies/eotzxmargccs0idvwqnn.png',
        },
        {
          name: 'CSS',
          photo:
            'https://pixelmechanics.com.sg/wp-content/uploads/2019/04/css.jpg',
        },
        {
          name: 'JavaScript',
          photo:
            'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704549386/josephIo/Images/Technologies/m7m4r0ccqdn6phtbd2ky.png',
        },
      ],
      backEnd: [
        {
          name: 'Ruby',
          photo:
            'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704549384/josephIo/Images/Technologies/hohojqiafb7nmr3zogdj.png',
        },
        {
          name: 'PHP',
          photo:
            'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704549384/josephIo/Images/Technologies/czxgbcdrke7uyqnemmxj.jpg',
        },
        {
          name: 'SQL',
          photo:
            'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704550540/josephIo/Images/Technologies/ekxidsb3qvlikivirjfi.png',
        },
      ],
    },
    frameWorks: {
      fontEnd: [
        {
          name: 'Sass',
          photo:
            'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704549384/josephIo/Images/Technologies/tszulq6e7nmrhf3gnpbk.jpg',
        },
        {
          name: 'Bootstrap',
          photo:
            'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704549385/josephIo/Images/Technologies/e2hy0c8dixfcmr8h9cp6.jpg',
        },
        {
          name: 'tailwindcss',
          photo:
            'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704550853/josephIo/Images/Technologies/wwhfywg1qamwglbjx9zd.png',
        },
        {
          name: 'React',
          photo:
            'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704549384/josephIo/Images/Technologies/kiukyih6vbrqwrimixke.png',
        },
        {
          name: 'Redux',
          photo:
            'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704549384/josephIo/Images/Technologies/qapk3bdfl6d7za8kjqps.png',
        },
      ],
      backEnd: [
        {
          name: 'Rials',
          photo:
            'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704549383/josephIo/Images/Technologies/ypyfznjdbbi1g6l17mkd.png',
        },
      ],
    },
  };

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
    <section className="full-container section-technologies">
      <h2>Technologies</h2>
      <div className="grid grid-cols-2 ul-works">
        {content}
      </div>
    </section>
  );
};

export default Technologies;

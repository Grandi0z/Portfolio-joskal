import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import UsedTechItem from './UsedTechItem';

const UsedTechs = (props) => {
  const { techs } = props;
  const content = (
    <ul className="flex flex-row gap-2 rounded-sm shadow-sm">
      {techs.map((tech) => (
        <li key={uuidv4()}><UsedTechItem tech={tech} /></li>
      ))}
    </ul>
  );

  return (
    <div>
      {content}
    </div>
  );
};

UsedTechs.propTypes = {
  techs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default UsedTechs;

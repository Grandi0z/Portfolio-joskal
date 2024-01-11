import React from 'react';
import PropTypes from 'prop-types';

const UsedTechItem = (props) => {
  const { tech } = props;
  return (
    <span
      type="button"
      className="block rounded-full text-white text-xs font-bold px-3 py-2 leading-none items-center group-[hover]:text-red-500"
      style={{ background: tech.color }}
    >
      {tech.name}
    </span>
  );
};

UsedTechItem.propTypes = {
  tech: PropTypes.shape(
    {
      color: PropTypes.string,
      name: PropTypes.string,
    },
  ).isRequired,
};

export default UsedTechItem;

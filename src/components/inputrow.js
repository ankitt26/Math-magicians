import React from 'react';
import PropTypes from 'prop-types';
import Inputitem from './inputItem';

const Inputrow = (props) => {
  const {
    item1, item2, item3, item4,
  } = props;
  return (
    <div className="input-row">
      <Inputitem item={item1} />
      <Inputitem item={item2} />
      <Inputitem item={item3} />
      <Inputitem item={item4} classN="input-item item4" />
    </div>
  );
};

Inputrow.propTypes = {
  item1: PropTypes.string.isRequired,
  item2: PropTypes.string.isRequired,
  item3: PropTypes.string.isRequired,
  item4: PropTypes.string.isRequired,
};

export default Inputrow;

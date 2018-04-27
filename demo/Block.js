import React from 'react';
import PropTypes from 'prop-types';

import {
  Selectable,
} from './components';

const Block = ({ selected, uid, onClick }) => (
  <Selectable
    selected={selected}
    onClick={onClick}
  >
    {uid}
  </Selectable>
);

Block.propTypes = {
  selected: PropTypes.bool,
  uid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onClick: PropTypes.func,
};

export default Block;

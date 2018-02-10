import React from 'react';
import PropTypes from 'prop-types';

const Foo = ({ selected, uid, onClick }) => (
  <div
    className={selected ? 'selected' : 'unselected'}
    onClick={onClick}
  >
    {uid}
  </div>
);

Foo.propTypes = {
  selected: PropTypes.bool,
  uid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onClick: PropTypes.func,
};

export default Foo;

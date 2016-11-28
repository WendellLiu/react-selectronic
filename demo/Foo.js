import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.scss';


const Foo = ({ selected, id, onClick }) => (
  <div
    styleName={selected ? 'selected' : 'unselected'}
    onClick={onClick}
  >
    {id}
  </div>
);

export default new CSSModules(Foo, styles);

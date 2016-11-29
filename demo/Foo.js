import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.scss';


const Foo = ({ selected, uid, onClick }) => (
  <div
    styleName={selected ? 'selected' : 'unselected'}
    onClick={onClick}
  >
    {uid}
  </div>
);

export default new CSSModules(Foo, styles);

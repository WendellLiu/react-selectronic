import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.scss';


const Foo = ({ selected, id }) => (
  <div styleName={selected ? 'selected' : 'unselected'}>
    {id}
  </div>
);

export default new CSSModules(Foo, styles);

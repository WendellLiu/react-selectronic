import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import {
  createSeletable,
  SelectableGroup,
} from '../src';

import Foo from './Foo';
import styles from './App.scss';

const SelectableFoo = createSeletable(Foo)

class App extends Component {
  constructor(props){
    super(props)

    this._handleChange = this._handleChange.bind(this)

    this.state = {
      selectedList: [],
    }
  }

  _handleChange(selectedList){
    this.setState({
      selectedList
    })
  }

  render() {
    return (
      <div className="App">
        <SelectableGroup
          selectedList={this.state.selectedList}
          onChange={this._handleChange}
          styleName="container"
        >
          {
            Array(14).fill(0).map((ele, index) => index).map((ele) => (
              <SelectableFoo uid={ele} key={ele} />
            ))
          }
          <div styleName="nonSelectable" />
          <div styleName="nonSelectable" />
        </SelectableGroup>
        <div styleName="result">
          <div>selected: </div>
          <ul>
          {
            this.state.selectedList.map((ele, index) => (
              <li key={index}>{ele}</li>
            ))
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default new CSSModules(App, styles)  ;

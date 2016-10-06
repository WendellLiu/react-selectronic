import React, { Component } from 'react';

import createSeletable from './createSeletable'
import SelectableGroup from './SelectableGroup'

import './App.css'

const Foo = ({ selected }) => (
  <div className={selected ? 'selected' : 'unselected'}>
    test
  </div>
)

const SelectableFoo = createSeletable(Foo)

class App extends Component {
  constructor(props){
    super(props)

    this._handleChange = this._handleChange.bind(this)

    this.state = {
      selectedList: []
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
        >
          <SelectableFoo id={0} />
          <SelectableFoo id={1} />
          <SelectableFoo id={2} />
          <div>oh!</div>
        </SelectableGroup>
      </div>
    );
  }
}

export default App;

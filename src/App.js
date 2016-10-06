import React, { Component } from 'react';

import createSeletable from './createSeletable'
import SelectableGroup from './SelectableGroup'

import './App.css'

const Foo = ({ selected, id }) => (
  <div className={selected ? 'selected' : 'unselected'}>
    {id}
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
          {
            Array(20).fill(0).map((ele, index) => index).map((ele) => (
              <SelectableFoo id={ele} key={ele} />
            ))
          }
          <div>I'm not selectable!</div>
        </SelectableGroup>
        <div>selected: </div>
        <ul>
        {
          this.state.selectedList.map((ele, index) => (
            <li key={index}>{ele}</li>
          ))
        }
        </ul>
      </div>
    );
  }
}

export default App;

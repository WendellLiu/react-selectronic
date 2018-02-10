import React, { PureComponent } from 'react';

import {
  createSeletable,
  SelectableGroup,
} from '../src';

import Foo from './Foo';

const SelectableFoo = createSeletable(Foo);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handleChange = this._handleChange.bind(this);

    this.state = {
      selectedList: [],
    };
  }

  _handleChange(selectedList) {
    this.setState({
      selectedList,
    });
  }

  render() {
    return (
      <div className="App">
        <SelectableGroup
          selectedList={this.state.selectedList}
          onChange={this._handleChange}
          className="container"
        >
          {
            Array(14).fill(0).map((ele, index) => index).map(ele => (
              <SelectableFoo uid={ele} key={ele} />
            ))
          }
          <div className="nonSelectable" />
          <div className="nonSelectable" />
        </SelectableGroup>
        <div className="result">
          <div>selected: </div>
          <ul>
            {
              this.state.selectedList.map(ele => (
                <li key={ele}>{ele}</li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

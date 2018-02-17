import React from 'react';

import {
  createSeletable,
  SelectableGroup,
} from '../src';

import Foo from './Foo';

import {
  Container,
  NonSelectable,
  Result,
} from './components';

const SelectableFoo = createSeletable(Foo);


class App extends React.PureComponent {
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
      <Container>
        <SelectableGroup
          selectedList={this.state.selectedList}
          onChange={this._handleChange}
          style={{
            display: 'flex',
            width: '800px',
            flexWrap: 'wrap',
          }}
        >
          {
            Array(14).fill(0).map((ele, index) => index).map(ele => (
              <SelectableFoo uid={ele} key={ele} />
            ))
          }
          <NonSelectable />
          <NonSelectable />
        </SelectableGroup>
        <Result>
          <div>selected: </div>
          <ul>
            {
              this.state.selectedList.map(ele => (
                <li key={ele}>{ele}</li>
              ))
            }
          </ul>
        </Result>
      </Container>
    );
  }
}

export default App;

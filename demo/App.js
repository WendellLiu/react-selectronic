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

const elements = Array(14).fill(0).map((_, index) => (
  {
    id: index,
  }
));


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
    const {
      selectedList,
    } = this.state;
    return (
      <Container>
        <SelectableGroup
          selectedList={selectedList}
          uidList={elements.map(e => e.id)}
          onChange={this._handleChange}
          style={{
            display: 'flex',
            width: '800px',
            flexWrap: 'wrap',
          }}
        >
          {
            elements.map(ele => (
              <SelectableFoo
                key={ele.id}
                uid={ele.id}
                selected={selectedList.indexOf(ele.id) >= 0}
              />
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

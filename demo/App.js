import React from 'react';

import {
  createSeletable,
  SelectableGroup,
} from '../src';

import Block from './Block';

import {
  Container,
  NonSelectable,
  Result,
} from './components';

const SelectableBlock = createSeletable(Block);

const elements = Array(24).fill(0).map((_, index) => (
  {
    id: index,
  }
));


class App extends React.Component {
  state = {
    selectedList: [],
  };

  _handleChange = (selectedList) => {
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
        <div>
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
                <SelectableBlock
                  key={ele.id}
                  uid={ele.id}
                  selected={selectedList.indexOf(ele.id) >= 0}
                />
              ))
            }
            <NonSelectable />
            <NonSelectable />
          </SelectableGroup>
        </div>
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

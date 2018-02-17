import React from 'react';
import styled from 'styled-components';

import {
  createSeletable,
  SelectableGroup,
} from '../src';

import Foo from './Foo';

const SelectableFoo = createSeletable(Foo);
const Container = styled.div`
  display: flex;
  backgrout: black;
`;

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
      <Container
        style={{
          display: 'flex',
        }}
      >
        <SelectableGroup
          selectedList={this.state.selectedList}
          onChange={this._handleChange}
          style={{
            display: 'flex',
            width: '800px',
            flexQrap: 'wrap',
          }}
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
      </Container>
    );
  }
}

export default App;

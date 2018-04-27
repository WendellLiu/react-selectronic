# react-selectronic

![Build Status](https://circleci.com/gh/WendellLiu/react-selectronic.png?circle-token=6cb81d93caa745b04d31d9dbf5ff73e47a74b7ea)


inspired by [unclecheese](https://github.com/unclecheese)/[react-selectable](https://github.com/unclecheese/react-selectable)

## Usage
2. support group selection with __shift key__
3. support multiple selection with __ctrl key and cmd  key__
1. not support __group-selection with mouse dragging__

## Example

```js
import React from 'react';
import {
  SelectableGroup,
  CreateSeletable
} from 'react-selectronic';

const Foo = ({ selected, id, onClick }) => (
  <div
    className={selected ? 'selected' : 'unselected'}
    onClick={onClick}
  >
  </div>
);

const SelectableFoo = createSeletable(Foo);
const elements = [1, 2, 3, 4, 5, 6, 7];

class App extends React.Component {
  this.state = {
    selectedList: [],
  };

  render() {
    return (
      <SelectableGroup
        selectedList={this.state.selectedList}
        onChange={this.handleChange}
        uidList={elements}
      >
        {
          elements.map((ele) => (
            <SelectableFoo uid={ele} key={ele} /> // uid is required
          ))
        }
        <div className="nonSelectable" /> // you can insert any component not selectable
      </SelectableGroup>
    );
  }
}

```

## Components

### SelectableGroup
#### Description
grouping component, clicking function provider which handling the selecting strategy

### CreateSeletable
#### Description
an HOC to wrap `onClick`

**Caution:**
the wrapped component(as Foo above) **must** take `onClick` property to make selection-function work.

## Development
```sh
yarn start
```

the demo page will served on port **5000**

# react-selectronic

inspired by [unclecheese](https://github.com/unclecheese)/[react-selectable](https://github.com/unclecheese/react-selectable)

## Feature
1. not support __group selection with mouse drag__
2. support group selection with __shift key__
3. support multiple selection with __ctrl key and cmd  key__

## Example

```js
import React from 'react';
import {
  SelectableGroup,
  CreateSeletable
} from 'react-selectronic';

const Foo = ({ selected, id }) => (
  <div className={selected ? 'selected' : 'unselected'}>
  </div>
)

const SelectableFoo = createSeletable(Foo)

<SelectableGroup
  selectedList={this.state.selectedList}
  onChange={this._handleChange}
  className="container"
>
  {
    Array(14).fill(0).map((ele, index) => index).map((ele) => (
      <SelectableFoo id={ele} key={ele} />
    ))
  }
  <div className="nonSelectable" /> // you can insert any component not selectable
</SelectableGroup>

```

## Components

### SelectableGroup
#### Description
a group component containing

### CreateSeletable
#### Description

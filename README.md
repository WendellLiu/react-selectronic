# react-selectronic

![Build Status](https://circleci.com/gh/WendellLiu/react-selectronic.png?circle-token=6cb81d93caa745b04d31d9dbf5ff73e47a74b7ea)


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

const Foo = ({ selected, id, onClick }) => (
  <div
    className={selected ? 'selected' : 'unselected'}
    onClick={onClick}
  >
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
      <SelectableFoo uid={ele} key={ele} /> // uid is a must-given property!
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

**Caution:**
the wrapped component(like Foo above) **must** take `onClick` property to make select-function work.

## Development
```sh
yarn start
```

the demo page will served on port **5000**

# react-selectronic

![Build Status](https://circleci.com/gh/WendellLiu/react-selectronic.png?circle-token=6cb81d93caa745b04d31d9dbf5ff73e47a74b7ea)


inspired by [unclecheese](https://github.com/unclecheese)/[react-selectable](https://github.com/unclecheese/react-selectable)

## Usage
1. support group selection with the __shift key__
2. support multiple selection with the __ctrl key(Windows OS)__ and the __cmd  key(Mac OS)__
3. not support __group-selection with dragging__

## Install
```sh
yarn add react-selectronic
```

or

```sh
npm install --save react-selectronic
```

## Example

```js
import React from 'react';
import {
  SelectableGroup,
  createSelectable
} from 'react-selectronic';

const Foo = ({ selected, id, onClick }) => (
  <div
    className={selected ? 'selected' : 'unselected'}
    onClick={onClick}
  >
  </div>
);

const SelectableFoo = createSelectable(Foo);
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
            <SelectableFoo 
              key={ele} 
              uid={ele} // uid is required
            /> 
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
Click functions provider which handling the selecting strategy

#### Props

prop             | type     | default      | required | notes
-----------------|----------|--------------|----------|------
selectedList     | Array<*>   |     `[]`   |     v    |    Selected list
onChange         | SelectedList => void  | |     v    | Handle next seelctedList 
uidList          | Array<*>   |            |     v    | All uid(including non-selected) of data
Component          | Component   | `'div'` |          | Component of SelectableGroup


### createSelectable
#### Description
An HOC to wrap `onClick`

#### Props

prop             | type     | default    |   required  | notes
-----------------|----------|------------|-------------|---------
uid              | *        |            |     v       | Unique id of the element
selected         | boolean  |            |     v       | Whether element is selected
onClick          | event => any |        |             | Additional click callback 

**Caution:**
wrapped component(as Foo above) **must** be taken `onClick` property for selection-function.

## Development
```sh
yarn start
```

the demo page will served on port **5000**

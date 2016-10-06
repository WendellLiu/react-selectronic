# react-selectronic

inspired by [unclecheese](https://github.com/unclecheese)/[react-selectable](https://github.com/unclecheese/react-selectable)

## Component

### SelectableGroup
#### Description
a group component containing

### CreateSeletable
#### Description

```js
import React from 'react';
import {
  SelectableGroup,
  CreateSeletable
} from 'react-selectronic';

const Foo = () => (
  <div
    style={
      width: '50px',
      height: '50px',
      backgroundColor: 'LightSeaGreen'
    }
  />
)

const Seletable = CreateSeletable(Foo)

<SelectableGroup>
  <Seletable />
  <Seletable />
  <Seletable />
</SelectableGroup>

```

import React from 'react';
import PropTypes from 'prop-types';

import createSeletable from './createSeletable';

import {
  listCompare,
} from './utils';

class SelectableGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    onChange: PropTypes.func,
    selectedList: PropTypes.array,
    uidList: PropTypes.array,
    Component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.object,
    ]),
  }

  static defaultProps = {
    Component: 'div',
    selectedList: [],
  }

  static childContextTypes = {
    actions: PropTypes.shape({
      oneClick: PropTypes.func,
      toggleClick: PropTypes.func,
      rangeSelect: PropTypes.func,
    }),
  }

  getChildContext() {
    return (
      {
        actions: {
          oneClick: this._oneClick,
          toggleClick: this._toggleClick,
          rangeSelect: this._rangeSelect,
        },
      }
    );
  }

  _toggleClick = (uid) => {
    const selectedList = [...this.props.selectedList];

    const index = selectedList.indexOf(uid);

    if (index < 0) {
      selectedList.push(uid);
    } else {
      selectedList.splice(index, 1);
    }

    this.props.onChange(selectedList);
  }

  _oneClick = (uid) => {
    let selectedList = [...this.props.selectedList];

    const index = selectedList.indexOf(uid);

    // more one element were selected
    if (selectedList.length > 1) {
      selectedList = [uid];
    } else if (index < 0) {
      selectedList = [uid];
    } else {
      selectedList.splice(index, 1);
    }

    this.props.onChange(selectedList);
  }

  _rangeSelect = (uid) => {
    const {
      selectedList,
      uidList,
    } = this.props;
    if (selectedList.length === 0) return;

    const allCompare = listCompare(uidList);

    this.props.onChange(allCompare(selectedList, uid));
  }


  render() {
    const { Component, children, selectedList, ...rest } = this.props;

    const newChildren = React.Children.map(children, (child) => {
      // check if child have selected in props
      if (typeof child.type === 'function' && child.type.name === createSeletable().name) {
        // clone a props and replace selected for new selectedList
        const props = {
          ...child.props,
          selected: (selectedList.indexOf(child.props.uid) >= 0),
        };

        // clone a children
        const { children: c } = child;

        // clone a child
        return React.createElement(child.type, props, c);
      }

      // if the child is not selectable, don't do anything
      return child;
    });

    return (
      <Component
        {...rest}
      >
        {newChildren}
      </Component>
    );
  }
}


export default SelectableGroup;

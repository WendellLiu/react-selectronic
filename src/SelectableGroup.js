import React from 'react';
import PropTypes from 'prop-types';

import {
  listCompare,
  removeElement,
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
    const {
      selectedList: prevSelectedList,
      onChange,
    } = this.props;

    const index = prevSelectedList.indexOf(uid);

    const selectedList = index < 0 ?
      prevSelectedList.concat([uid]) :
      removeElement(index)(prevSelectedList);

    onChange(selectedList);
  }

  _oneClick = (uid) => {
    const {
      selectedList: prevSelectedList,
      onChange,
    } = this.props;

    const index = prevSelectedList.indexOf(uid);

    const isSelected = prevSelectedList.length > 1 || index < 0;
    const selectedList = isSelected ? [uid] : removeElement(index)(prevSelectedList);

    return onChange(selectedList);
  }

  _rangeSelect = (uid) => {
    const {
      selectedList,
      uidList,
    } = this.props;
    if (selectedList.length === 0) return null;

    const allCompare = listCompare(uidList);

    return this.props.onChange(allCompare(selectedList, uid));
  }


  render() {
    const {
      Component,
      children,
      selectedList,
      uidList,
      ...rest
    } = this.props;

    return (
      <Component
        {...rest}
      >
        {children}
      </Component>
    );
  }
}


export default SelectableGroup;

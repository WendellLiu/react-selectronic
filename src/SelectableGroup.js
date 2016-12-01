import React, { PropTypes } from 'react';

import {
  listCompare
} from './utils'

class SelectableGroup extends React.Component{
  constructor(props){
    super(props);

    this._toggleClick = this._toggleClick.bind(this);
    this._oneClick = this._oneClick.bind(this);
    this._rangeSelect = this._rangeSelect.bind(this);

    this.state = {
      uidList: React.Children.map(props.children, (child) => (
        child.props.uid
      )),
    };
  }

  componentWillReceiveProps(nextProps) {
    const uidList = React.Children.map(nextProps.children, (child) => (
      child.props.uid
    ));

    this.setState({
      uidList,
    });
  }

  static propTypes = {
    onChange: PropTypes.func,
    selectedList: PropTypes.array,
    Component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.object,
    ])
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
    })
  }

  getChildContext(){
    return(
      {
        actions: {
          oneClick: this._oneClick,
          toggleClick: this._toggleClick,
          rangeSelect: this._rangeSelect,
        }
      }
    )
  }

  _toggleClick(uid){
    const selectedList = [...this.props.selectedList];

    const index = selectedList.indexOf(uid);

    if(index < 0){
      selectedList.push(uid);
    } else{
      selectedList.splice(index, 1);
    }

    this.props.onChange(selectedList);
  }

  _oneClick(uid){
    let selectedList = [...this.props.selectedList];

    const index = selectedList.indexOf(uid);

    // more one element were selected
    if(selectedList.length > 1){
      selectedList = [uid];
    } else{

      if(index < 0){
        selectedList = [uid];
      } else{
        selectedList.splice(index, 1);
      }
    }

    this.props.onChange(selectedList)
  }

  _rangeSelect(uid){
    const selectedList = [...this.props.selectedList];

    const allCompare = listCompare(this.state.uidList)

    this.props.onChange(allCompare(selectedList, uid))
  }


  render(){
    const { Component, children, selectedList,  ...rest } = this.props

    const newChildren = React.Children.map(children, (child) => {

      // check if child have selected in props
      if( typeof child.type === 'function' && child.type.name === 'SelectableComponent' ){
        // clone a props
        let props = {...child.props}

        // replace selected for new selectedList
        props.selected = (selectedList.indexOf(child.props.uid) >= 0);

        // clone a children
        const { children } = child;

        // clone a child
        return React.createElement(child.type, props, children)
      }

      // if the child is not selectable, don't do anything
      return child
    })

    return(
      <Component
        {...rest}
      >
        {newChildren}
      </Component>
    )
  }
}


export default SelectableGroup

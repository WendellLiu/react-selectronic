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
      idList: React.Children.map(props.children, (child) => (
        child.props.id
      ))
    }
  }

  static propTypes = {
    onChange: PropTypes.func,
    selectedList: PropTypes.array,
    Component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.object
    ])
  }

  static defaultProps = {
    Component: 'div',
    selectedList: []
  }

  static childContextTypes = {
    actions: PropTypes.shape({
      oneClick: PropTypes.func,
      toggleClick: PropTypes.func,
      rangeSelect: PropTypes.func
    })
  }

  getChildContext(){
    return(
      {
        actions: {
          oneClick: this._oneClick,
          toggleClick: this._toggleClick,
          rangeSelect: this._rangeSelect
        }
      }
    )
  }

  _toggleClick(id){
    let selectedList = [...this.props.selectedList];

    const index = selectedList.indexOf(id);

    if(index < 0){
      selectedList.push(id);
    } else{
      selectedList.splice(index, 1);
    }

    this.props.onChange(selectedList);
  }

  _oneClick(id){
    let selectedList = [...this.props.selectedList];

    const index = selectedList.indexOf(id);

    // more one element were selected
    if(selectedList.length > 1){
      selectedList = [id];
    } else{

      if(index < 0){
        selectedList = [id];
      } else{
        selectedList.splice(index, 1);
      }
    }

    this.props.onChange(selectedList)
  }

  _rangeSelect(id){
    let selectedList = [...this.props.selectedList];

    const allCompare = listCompare(this.state.idList)

    this.props.onChange(allCompare(selectedList, id))
  }


  render(){
    let { Component, children, selectedList,  ...rest } = this.props

    children = React.Children.map(children, (child) => {

      // check if child have selected in props
      if( !(child.props.selected === undefined) ){
        // clone a props
        let props = {...child.props}

        // replace selected for new selectedList
        props.selected = (selectedList.indexOf(child.props.id) >= 0);

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
        {children}
      </Component>
    )
  }
}


export default SelectableGroup

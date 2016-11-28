import React, { PropTypes } from 'react';

// High Order Component
const createSeletable = (WrappedComponent) => {
  class SelectableComponent extends React.Component {
    constructor(props){
      super(props);

      this._handleClick = this._handleClick.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState){
      // don't update if selected prop didn't change
      if(nextProps.selected === this.props.selected) return false;

      return true;
    }

    static contextTypes = {
      actions: PropTypes.shape({
        oneClick: PropTypes.func,
        toggleClick: PropTypes.func,
        rangeSelect: PropTypes.func
      })
    }

    static propTypes = {
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      selected: PropTypes.bool.isRequired
    }

    static defaultProps = {
      selected: false
    }

    _handleClick(e){
      const actions = this.context.actions;

      e.preventDefault();

      // shift key
      if(e.shiftKey === true){
        actions.rangeSelect(this.props.id);
        return
      }

      // cmd key or ctrl key
      if(e.ctrlKey === true || e.metaKey === true){
        actions.toggleClick(this.props.id);
        return
      }

      actions.oneClick(this.props.id);
    }

    render () {
      let props = this.props;
      props = {
        ...props,
        onClick: (e) => {
          this._handleClick(e);
          if (this.props.onClick) {
            this.props.onClick(e);
          }
        },
      }

			return (

          <WrappedComponent {...props} />

      )
		}
  }

  return SelectableComponent;
}

export default createSeletable;

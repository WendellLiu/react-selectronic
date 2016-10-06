import React, { PropTypes } from 'react';

// High Order Component
const createSeletable = (WrappedComponent) => {
  class SelectableComponent extends React.Component {
    constructor(props){
      super(props);

      this._handleClick = this._handleClick.bind(this)
    }

    static contextTypes = {
      actions: PropTypes.object
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
      if(e.shift === true){
        actions.toggleClick(this.props.id);
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

			return (
        <div
          onClick={this._handleClick}
        >
          <WrappedComponent {...props} >
            {this.props.children}
          </WrappedComponent>
        </div>

      )
		}
  }

  return SelectableComponent;
}

export default createSeletable;

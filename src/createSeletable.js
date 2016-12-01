import React, { PropTypes } from 'react';

// High Order Component
const createSeletable = (WrappedComponent) => {
  class SelectableComponent extends React.PureComponent {
    constructor(props){
      super(props);

      this._handleClick = this._handleClick.bind(this)
    }

    static contextTypes = {
      actions: PropTypes.shape({
        oneClick: PropTypes.func,
        toggleClick: PropTypes.func,
        rangeSelect: PropTypes.func,
      })
    }

    static propTypes = {
      uid: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      selected: PropTypes.bool.isRequired,
    }

    static defaultProps = {
      selected: false,
    }

    _handleClick(e){
      const actions = this.context.actions;

      e.preventDefault();

      // shift key
      if(e.shiftKey === true){
        actions.rangeSelect(this.props.uid);
        return
      }

      // cmd key or ctrl key
      if(e.ctrlKey === true || e.metaKey === true){
        actions.toggleClick(this.props.uid);
        return
      }

      actions.oneClick(this.props.uid);
    }

    render () {
      const props = {
        ...this.props,
        onClick: (e) => {
          this._handleClick(e);
          if (this.props.onClick && typeof this.props.onClick === 'function') {
            this.props.onClick(e);
          }
        },
      };

			return (
          <WrappedComponent {...props} />
      )
		}
  }

  return SelectableComponent;
}

export default createSeletable;

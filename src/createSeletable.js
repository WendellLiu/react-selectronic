import React from 'react';
import PropTypes from 'prop-types';

// High Order Component
const createSeletable = (WrappedComponent) => {
  class SelectableComponent extends React.PureComponent {
    static contextTypes = {
      actions: PropTypes.shape({
        oneClick: PropTypes.func,
        toggleClick: PropTypes.func,
        rangeSelect: PropTypes.func,
      }),
    }

    static propTypes = {
      uid: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      selected: PropTypes.bool.isRequired,
      onClick: PropTypes.func,
    }

    _handleClick = (e) => {
      const actions = this.context.actions;

      e.preventDefault();

      // shift key
      if (e.shiftKey === true) {
        actions.rangeSelect(this.props.uid);
        return;
      }

      // cmd key or ctrl key
      if (e.ctrlKey === true || e.metaKey === true) {
        actions.toggleClick(this.props.uid);
        return;
      }

      actions.oneClick(this.props.uid);
    }

    render() {
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
      );
    }
  }

  return SelectableComponent;
};

export default createSeletable;

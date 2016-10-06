import React, { PropTypes } from 'react';

// High Order Component
const createSeletable = (WrappedComponent) => {
  class SelectableComponent extends React.Component {

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

    render () {
      let props = this.props;
      const actions = this.context.actions;

			return (
        <div onClick={
          (e) => {
            if(e.ctrlKey === true || e.metaKey === true){
              actions.toggleClick(this.props.id);
              return
            }
            actions.oneClick(this.props.id);
          }
        }>
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

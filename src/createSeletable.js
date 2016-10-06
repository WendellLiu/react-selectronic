import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

// High Order Component
const createSeletable = (WrappedComponent) => {
  class SelectableComponent extends React.Component {

    static contextTypes = {
      onChange: PropTypes.func
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
      let props = this.props

			return (
        <div onClick={
          () => {
            this.context.onChange(this.props.id)
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

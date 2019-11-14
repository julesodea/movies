import React, { Component } from 'react';
import Portal from '../Portal/Portal';
import './modal.styles.scss';

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on && (
          <div className="modal-wrapper">
            <button onClick={toggle}>Close</button>
            <div>{children}</div>
          </div>
        )}
      </Portal>
    );
  }
}

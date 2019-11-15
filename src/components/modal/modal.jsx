import React, { Component } from 'react';
import Portal from '../Portal/Portal';
import Close from '../../img/close-button.svg';
import './modal.styles.scss';

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on && (
          <div className="modal-wrapper">
            <button onClick={toggle}>
              <img src={Close} alt="close-button" />
            </button>
            <div>{children}</div>
          </div>
        )}
      </Portal>
    );
  }
}

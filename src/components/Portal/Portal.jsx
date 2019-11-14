import { Component } from 'react';
import ReactDOM from 'react-dom';

const portalRoute = document.getElementById('portal');

export default class Portal extends Component {
  constructor() {
    super();

    this.el = document.createElement('div');
  }

  componentDidMount() {
    portalRoute.appendChild(this.el);
  }

  componentWillUnmount() {
    portalRoute.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}

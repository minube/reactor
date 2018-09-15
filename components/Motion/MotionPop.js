import { bool, node } from 'prop-types';
import { createElement, PureComponent } from 'react';

import Motion from './Motion';

class MotionPop extends PureComponent {
  static propTypes = {
    children: node.isRequired,
    visible: bool,
  };

  static defaultProps = {
    visible: false,
  };

  render() {
    const {
      props: { children, visible, ...inherit },
    } = this;

    return createElement(Motion, {
      ...inherit,
      timeline: [
        { property: 'opacity', value: visible ? 1 : 0 },
        { property: 'scale', value: visible ? 1 : 0 },
      ],
    }, children);
  }
}

export default MotionPop;

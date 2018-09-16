import { bool, oneOf, node } from 'prop-types';
import { createElement, PureComponent } from 'react';

import Motion from './Motion';
import PRESETS from './modules/presets';

class MotionPreset extends PureComponent {
  static propTypes = {
    children: node.isRequired,
    value: oneOf(['fade', 'pop', 'pop_fade']),
    visible: bool,
  };

  static defaultProps = {
    value: undefined,
    visible: false,
  };

  render() {
    const {
      children, value = '', visible, ...inherit
    } = this.props;

    const { IN, OUT } = PRESETS[value.toUpperCase()] || PRESETS.POP_FADE;

    return createElement(Motion, {
      ...inherit,
      pointerEvents: visible ? undefined : 'none',
      timeline: visible ? IN : OUT,
    }, children);
  }
}

export default MotionPreset;

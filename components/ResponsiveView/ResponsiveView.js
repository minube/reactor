import { func, node } from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import { LAYOUT } from '../../common';

class ResponsiveView extends PureComponent {
  render() {
    const {
      children, onLayout, ...inherit
    } = this.props;

    return (
      <View
        {...inherit}
        key={this.state && this.state.viewport}
        onLayout={() => {
          LAYOUT.calc();
          this.setState({ viewport: `${LAYOUT.VIEWPORT.W}x${LAYOUT.VIEWPORT.H}` });
          // this.forceUpdate(); @TODO: React fiber
          onLayout(LAYOUT.VIEWPORT);
        }}
      >
        {children}
      </View>
    );
  }
}

ResponsiveView.propTypes = {
  children: node,
  onLayout: func,
};

ResponsiveView.defaultProps = {
  children: undefined,
  onLayout() {},
};

export default ResponsiveView;

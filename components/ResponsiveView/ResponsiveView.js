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
          onLayout(LAYOUT.VIEWPORT);

          const viewport = `${LAYOUT.VIEWPORT.W}x${LAYOUT.VIEWPORT.H}`;
          if (this.state && this.state.viewport === viewport) return;

          this.setState({ viewport });
          // this.forceUpdate(); @TODO: React fiber
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

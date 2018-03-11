import { func, node } from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';

import { LAYOUT } from '../../common';

class WebView extends Component {
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
          onLayout();
        }}
      >
        {children}
      </View>
    );
  }
}

WebView.propTypes = {
  children: node,
  onLayout: func,
};

WebView.defaultProps = {
  children: undefined,
  onLayout() {},
};

export default WebView;

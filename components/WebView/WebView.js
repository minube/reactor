import { node } from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';

class WebView extends Component {
  render() {
    const { props: { children, ...inherit } } = this;

    return (
      <View
        {...inherit}
        key={this.state && this.state.timestamp}
        onLayout={() => this.setState({ timestamp: new Date() })}
      >
        {children}
      </View>
    );
  }
}

WebView.propTypes = {
  children: node,
};

WebView.defaultProps = {
  children: undefined,
};

export default WebView;

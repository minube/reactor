import { node } from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';

let timeout;

class WebView extends Component {
  render() {
    const { props: { children, ...inherit } } = this;

    return (
      <View
        {...inherit}
        style={{ alignItems: 'center', width: '100%', height: '100%' }}
        key={this.state && this.state.timestamp}
        onLayout={() => {
          clearTimeout(timeout);
          timeout = setTimeout(() => this.setState({ timestamp: new Date() }), 40);
        }}
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

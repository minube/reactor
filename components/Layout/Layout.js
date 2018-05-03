import { func, node } from 'prop-types';
import React, { createContext, PureComponent } from 'react';
import { View } from 'react-native';

import { LAYOUT } from '../../common';

const Context = createContext();
const { Provider, Consumer: LayoutStyle } = Context;

class LayoutView extends PureComponent {
  state = {
    key: undefined,
    style: LAYOUT.STYLE,
    viewport: LAYOUT.VIEWPORT,
  }

  _onLayout = () => {
    const { props: { onLayout } } = this;

    LAYOUT.calc();
    const { STYLE, VIEWPORT } = LAYOUT;
    onLayout(VIEWPORT);

    const key = `${VIEWPORT.W}x${VIEWPORT.H}`;
    if (this.state.key === key) return;

    this.setState({
      key,
      style: STYLE,
      viewport: VIEWPORT,
    });
    // this.forceUpdate(); // @TODO: React fiber
  }

  render() {
    const {
      _onLayout,
      props: { children, onLayout, ...inherit },
      state: { key, style, viewport },
    } = this;

    return (
      <Provider value={{ style, viewport }}>
        <View {...inherit} key={key} onLayout={_onLayout}>
          {children}
        </View>
      </Provider>
    );
  }
}

LayoutView.propTypes = {
  children: node,
  onLayout: func,
};

LayoutView.defaultProps = {
  children: undefined,
  onLayout() {},
};

export { LayoutStyle };

export default LayoutView;

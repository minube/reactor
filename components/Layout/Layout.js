import { func, node } from 'prop-types';
import React, { createContext, PureComponent } from 'react';
import { View } from 'react-native';

import { ENV, LAYOUT } from '../../common';

const { IS_WEB, IS_SERVER, IS_MOBILE_WEB } = ENV;
const Context = createContext('reactor:layout');
const { Provider, Consumer: LayoutConsumer } = Context;

class LayoutView extends PureComponent {
  static propTypes = {
    children: node,
    onLayout: func,
  };

  static defaultProps = {
    children: undefined,
    onLayout() {},
  };

  state = {
    key: `${LAYOUT.VIEWPORT.W}x${LAYOUT.VIEWPORT.H}`,
  }

  _onLayout = ({ nativeEvent: { layout = {} } }) => {
    const { props: { onLayout } } = this;

    setTimeout(() => {
      LAYOUT.calc();
      onLayout(LAYOUT.VIEWPORT);
      this.setState({ key: `${layout.width}x${layout.height}` });
    }, 40);
  }

  render() {
    const {
      _onLayout,
      props: { children, onLayout, ...inherit },
      state: { key },
    } = this;

    return (
      <Provider value={{ style: LAYOUT.STYLE, viewport: LAYOUT.VIEWPORT }}>
        <View
          {...inherit}
          key={key}
          onLayout={IS_WEB && !IS_SERVER && !IS_MOBILE_WEB ? _onLayout : undefined}
        >
          {children}
        </View>
      </Provider>
    );
  }
}

export { LayoutConsumer };

export default LayoutView;

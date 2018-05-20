import { func, node } from 'prop-types';
import React, { createContext, PureComponent } from 'react';
import { View } from 'react-native';

import { LAYOUT } from '../../common';

const Context = createContext();
const { Provider, Consumer: ConsumerLayout } = Context;

class LayoutView extends PureComponent {
  state = {
    key: undefined,
  }

  _onLayout = () => {
    setTimeout(() => {
      LAYOUT.calc();
      const { VIEWPORT } = LAYOUT;
      const key = `${VIEWPORT.W}x${VIEWPORT.H}`;

      if (this.state.key !== key) {
        const { props: { onLayout } } = this;

        onLayout(VIEWPORT);
        this.setState({ key });
        // this.forceUpdate(); // @TODO: React fiber
      }
    }, 30);
  }

  render() {
    const {
      _onLayout,
      props: { children, onLayout, ...inherit },
      state: { key },
    } = this;

    return (
      <View {...inherit} key={key} onLayout={_onLayout}>
        <Provider value={{ style: LAYOUT.STYLE, viewport: LAYOUT.VIEWPORT }}>
          {children}
        </Provider>
      </View>
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

export { ConsumerLayout };

export default LayoutView;

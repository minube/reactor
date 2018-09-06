import { node, shape } from 'prop-types';
import React, { createContext, PureComponent } from 'react';

import THEME from '../../common/theme/theme';

const { Provider, Consumer: ConsumerTheme } = createContext('reactor:l10n');

class ProviderTheme extends PureComponent {
  static propTypes = {
    children: node,
    style: shape({}),
  };

  static defaultProps = {
    children: undefined,
    style: {},
  };

  constructor(props) {
    super(props);
    this.state = { style: THEME.extendTheme(props.style) };
  }

  extendTheme = (style) => {
    this.setState({ style: THEME.extendTheme(style) });
  }

  render() {
    const {
      extendTheme,
      props: { children }, state: { style },
    } = this;

    console.log('<ProviderTheme />', style);

    return (
      <Provider value={{ extendTheme, THEME: { ...style } }}>
        { children }
      </Provider>
    );
  }
}

export { ConsumerTheme, ProviderTheme };

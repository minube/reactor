import { node, shape } from 'prop-types';
import React, { createContext, PureComponent } from 'react';

import THEME from '../../common/theme';

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
    this.state = { theme: THEME.extend(props.style) };
  }

  componentWillReceiveProps({ style: nextStyle }) {
    const { props: { style } } = this;
    if (nextStyle !== style) this.setState({ theme: THEME.extend(nextStyle) });
  }

  render() {
    const { props: { children }, state } = this;

    return (
      <Provider value={state.theme}>
        { children }
      </Provider>
    );
  }
}

export { ConsumerTheme, ProviderTheme };

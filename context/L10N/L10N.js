import { node, shape, string } from 'prop-types';
import React, { createContext, PureComponent } from 'react';

const { Provider, Consumer: ConsumerL10N } = createContext('reactor:l10n');

class ProviderL10N extends PureComponent {
  static propTypes = {
    children: node,
    dictionary: shape({}),
    language: string,
  };

  static defaultProps = {
    children: undefined,
    dictionary: {},
    language: 'en-EN',
  };

  render() {
    const { props: { children, dictionary, language } } = this;

    return (
      <Provider value={{ l10n: dictionary[language] || {} }}>
        { children }
      </Provider>
    );
  }
}

export { ConsumerL10N, ProviderL10N };

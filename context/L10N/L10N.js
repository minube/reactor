import { node, shape, string } from 'prop-types';
import React, { createContext, PureComponent } from 'react';

const Context = createContext();
const { Provider, Consumer: ConsumerL10N } = Context;

class ProviderL10N extends PureComponent {
  render() {
    const { props: { children, dictionary, language } } = this;

    return (
      <Provider value={{ l10n: dictionary[language] || {} }}>
        { children }
      </Provider>
    );
  }
}

ProviderL10N.propTypes = {
  children: node,
  dictionary: shape({}),
  language: string,
};

ProviderL10N.defaultProps = {
  children: undefined,
  dictionary: {},
  language: 'en-EN',
};

export { ConsumerL10N, ProviderL10N };

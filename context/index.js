import {
  func, node, shape, string,
} from 'prop-types';
import React from 'react';

import SHAPE from '../common/shape';
import { ConsumerAmplitude, ProviderAmplitude } from './Amplitude';
import { ConsumerL10N, ProviderL10N } from './L10N';
import { ConsumerTheme, ProviderTheme } from './Theme';

const Consumer = ({ children }) => (
  <ConsumerTheme>
    { theme => (
      <ConsumerAmplitude>
        { amplitude => (
          <ConsumerL10N>
            { l10n => children({ ...amplitude, ...l10n, ...theme }) }
          </ConsumerL10N>
        )}
      </ConsumerAmplitude>
    )}
  </ConsumerTheme>
);

Consumer.propTypes = {
  children: func.isRequired,
};

const Provider = ({
  amplitudeKey, children, session, theme, ...l10n
}) => (
  <ProviderTheme style={theme || { COLOR: { PRIMARY: 'pink' } }}>
    <ProviderAmplitude key={amplitudeKey} session={session}>
      <ProviderL10N {...l10n}>
        {children}
      </ProviderL10N>
    </ProviderAmplitude>
  </ProviderTheme>
);

Provider.propTypes = {
  amplitudeKey: string,
  children: node.isRequired,
  session: shape(SHAPE.SESSION),
  theme: shape({}),
};

Provider.defaultProps = {
  amplitudeKey: undefined,
  session: undefined,
  theme: undefined,
};

export {
  Consumer,
  Provider,
};

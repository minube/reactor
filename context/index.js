import { func, node, shape, string } from 'prop-types';
import React from 'react';

import { SHAPE } from '../common';
import { ConsumerAmplitude, ProviderAmplitude } from './Amplitude';
import { ConsumerL10N, ProviderL10N } from './L10N';

const Consumer = ({ children }) => (
  <ConsumerAmplitude>
    { amplitude => (
      <ConsumerL10N>
        { l10n => children({ ...amplitude, ...l10n }) }
      </ConsumerL10N>
    )}
  </ConsumerAmplitude>
);

Consumer.propTypes = {
  children: func.isRequired,
};

const Provider = ({
  amplitudeKey, children, session, ...l10n
}) => (
  <ProviderAmplitude key={amplitudeKey} session={session}>
    <ProviderL10N {...l10n}>
      {children}
    </ProviderL10N>
  </ProviderAmplitude>
);

Provider.propTypes = {
  amplitudeKey: string,
  children: node.isRequired,
  session: shape(SHAPE.SESSION),
};

Provider.defaultProps = {
  amplitudeKey: undefined,
  session: undefined,
};

export {
  Consumer,
  Provider,
};

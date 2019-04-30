import { number, string } from 'prop-types';
import React from 'react';

import Text from '../Text';
import { format } from './modules';

const LOCALE = 'es-ES';

const Price = ({
  currency, locale, fixed, symbol, value, ...inherit
}) => (
  <Text {...inherit} style={inherit.style}>
    { format({
      currency, amount: value, fixed, locale, symbol,
    })}
  </Text>
);

Price.propTypes = {
  currency: string,
  fixed: number,
  locale: string,
  symbol: string,
  value: number,
};

Price.defaultProps = {
  currency: undefined,
  fixed: 2,
  locale: typeof navigator !== 'undefined' ? navigator.language : LOCALE,
  symbol: undefined,
  value: 0,
};

export default Price;

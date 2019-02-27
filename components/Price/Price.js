import { number, string } from 'prop-types';
import React, { Fragment } from 'react';
import { View } from 'react-native';

import Text from '../Text';
import { format } from './modules';
import styles from './Price.style';

const LEFT_SYMBOLS = ['$'];
const LOCALE = 'es-ES';

const Price = ({
  locale, fixed, symbol, title, value, ...inherit
}) => (
  <View style={styles.container}>
    { title && (
      <Text {...inherit} style={[styles.minimize, inherit.style]}>
        {title}
      </Text>
    )}

    <Fragment>
      { symbol && LEFT_SYMBOLS.includes(symbol) && (
        <Text {...inherit} style={[styles.minimize, inherit.style]}>
          {symbol}
        </Text>
      )}
      <Text {...inherit} style={inherit.style}>
        {format(value, fixed, locale)}
      </Text>
      { symbol && !LEFT_SYMBOLS.includes(symbol) && (
        <Text {...inherit} style={[styles.minimize, inherit.style]}>
          {symbol}
        </Text>
      )}
    </Fragment>

  </View>
);

Price.propTypes = {
  fixed: number,
  locale: string,
  symbol: string,
  title: string,
  value: number,
};

Price.defaultProps = {
  fixed: 2,
  locale: typeof navigator !== 'undefined' ? navigator.language : LOCALE,
  symbol: undefined,
  title: undefined,
  value: 0,
};

export default Price;

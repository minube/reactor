import {
  array, number, object, oneOfType, string,
} from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../Text';
import { markdown, BOLD, ITALIC } from './modules';
import styles from './Markdown.style';

const Markdown = ({
  children, styleContainer, ...inherit
}) => {
  const sentences = markdown(children);

  return (
    sentences.length <= 1
      ? (
        <View style={styleContainer}>
          <Text {...inherit}>
            {children}
          </Text>
        </View>
      )
      : (
        <View style={[styles.container, styleContainer]}>
          { sentences.map(({ value, type }, index) => {
            const key = `${type}${index}`;
            return (
              <Text
                key={key}
                {...inherit}
                bold={type === BOLD && styles.bold}
                italic={type === ITALIC && styles.italic}
              >
                {value}
              </Text>
            );
          })}
        </View>
      )
  );
};

Markdown.propTypes = {
  styleContainer: oneOfType([array, number, object]),
  children: string,
};

Markdown.defaultProps = {
  styleContainer: [],
  children: undefined,
};

export default Markdown;

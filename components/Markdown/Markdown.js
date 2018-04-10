import { string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { STYLE } from '../../common';
import Text from '../Text';
import { markdown, BOLD, ITALIC } from './modules';

const Markdown = ({
  children, ...inherit
}) => {
  const sentences = markdown(children);

  return (
    sentences.length <= 1
      ?
        <Text {...inherit}>{children}</Text>
      :
        <View style={STYLE.ROW}>
          { sentences.map(({ value, type }, index) => {
            const key = `${type}${index}`;
            return (
              <Text key={key} {...inherit} bold={type === BOLD} italic={type === ITALIC}>
                {value}
              </Text>
            );
          })}
        </View>
  );
};

Markdown.propTypes = {
  children: string,
};

Markdown.defaultProps = {
  children: undefined,
};

export default Markdown;

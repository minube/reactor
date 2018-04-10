import { string } from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { defaultBlockParse as markdownParse } from 'simple-markdown';

import { STYLE } from '../../common';
import Text from '../Text';

const ITALIC = 'em';
const DEFAULT = 'text';
const BOLD = 'strong';

const Markdown = ({
  children, ...inherit
}) => {
  const [value: { content: value } = {}] = markdownParse(children);

  return (
    value.content.length <= 1
      ?
        <Text {...inherit} tiny>{children}</Text>
      :
        <View style={STYLE.ROW}>
          { value.content.map(({ content, type }, index) => {
            const key = `${type}${index}`;

            return (
              <Text key={key} {...inherit} bold={type === BOLD} italic={type === ITALIC}>
                {type === DEFAULT ? content : content[0].content}
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

import {
  bool, arrayOf, number, shape, string
} from 'prop-types';
import { Animated, View } from 'react-native';
import React, { PureComponent } from 'react';
import styles from './ChartBar.style';

import { THEME } from '../../common';
import { calcRange } from './modules';

const { COLOR, MOTION: { DURATION } } = THEME;

export default class ChartBar extends PureComponent {
  static propTypes = {
    captions: arrayOf(string),
    color: string,
    highlight: number,
    inverted: bool,
    scales: arrayOf(shape({})),
    values: arrayOf(number),
  };

  static defaultProps = {
    captions: undefined,
    color: COLOR.PRIMARY,
    highlight: undefined,
    inverted: false,
    scales: undefined,
    values: [],
  };

  shouldComponentUpdate(nextProps) {
    return (JSON.stringify(nextProps) !== JSON.stringify(this.props));
  }

  render() {
    const {
      captions, color, highlight, inverted, scales, values, ...inherit
    } = this.props;
    const { max, min, avg } = calcRange(values);
    const avgProps = { backgroundColor: color };
    let firstValueIndex = values.findIndex(value => value !== 0);
    if (firstValueIndex === -1) firstValueIndex = undefined;

    return (
      <View style={[inverted ? styles.containerInverted : styles.container, inherit.styleContainer]}>
        { scales && (
          <View style={[styles.scales, captions && styles.scaleCaptions]}>
            <View style={[styles.scaleValues, inverted && styles.scaleValuesInverted]}>
              { firstValueIndex && scales.map((scale, index) => (
                <View
                  key={`scale-${index.toString()}`}
                  style={[styles.tag, scale.highlight && avgProps]}
                >
                  { scale.value !== 0 && (
                    <Text lighten style={[styles.legend, scale.highlight && styles.legendHighlight]}>
                      {scale.value}
                    </Text>
                  )}
                </View>
              ))}
            </View>
            <View style={styles.scaleLines}>
              { scales.map((scale, index) => (
                <View
                  key={`line-${index.toString()}`}
                  style={[styles.scaleLine, firstValueIndex && scale.highlight && [styles.scaleLineAVG, avgProps]]}
                />
              ))}
            </View>
          </View>
        )}

        <View style={[styles.content, styles.row, scales && styles.rowScale, inherit.style]}>
          { values.map((value, index) => (
            <View
              key={`${value}-${index.toString()}`}
              style={[styles.column, inverted && styles.columnInverted]}
            >
              <View
                style={[
                  styles.bar,
                  inverted && styles.barInverted,
                  (value !== 0 || index > firstValueIndex) && { backgroundColor: color },
                  value !== 0 && { height: `${calcHeight(value, { min, max, avg })}%` },
                  value === 0 && styles.barEmpty,
                ]}
              >
                { value !== 0 && (
                  <View
                    style={[
                      styles.bar,
                      inverted && styles.barInverted,
                      value !== 0 && {
                        backgroundColor: color,
                        height: '100%',
                        opacity: (highlight && highlight === index) ? 1 : 0.33,
                      },
                    ]}
                  />
                )}
              </View>
            </View>
          ))}
        </View>
        { captions && (
          <View style={[styles.captions, styles.row, scales && styles.rowScale]}>
            { captions.map((caption, index) => (
              <View key={caption} style={styles.column}>
                <Text lighten style={[styles.legend, highlight === index && styles.legendHighlight]}>
                  {caption.substring(0, 3).toUpperCase()}
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  }
}

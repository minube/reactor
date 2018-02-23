import { array, arrayOf, bool, func, number, oneOfType, shape, string } from 'prop-types';
import React, { Component } from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';

import { layout, THEME } from '../../common';
import Button from '../Button';
import Text from '../Text';
import styles from './Slider.style';

const { UNIT } = THEME;

const NEXT = 'next';
let timeout;
const MOMENTUM_INTERVAL = Platform.OS === 'web' ? 0 : 16;

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemWidth: layout().CARD.WIDTH,
      layoutHeight: 0,
      x: 0,
    };
    this._onButton = this._onButton.bind(this);
    this._onLayout = this._onLayout.bind(this);
    this._onScroll = this._onScroll.bind(this);
    this._updateScroll = this._updateScroll.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({ itemWidth: layout().CARD.WIDTH, x: 0 });
  }

  _onScroll({ nativeEvent: { contentOffset: { x } } }) {
    const { _updateScroll, props: { itemMargin }, state: { itemWidth } } = this;
    const width = (itemWidth + itemMargin);

    if (!Number.isInteger(x / width)) {
      clearTimeout(timeout);
      timeout = setTimeout(() => _updateScroll(Math.round(x / width) * width), MOMENTUM_INTERVAL * 3);
    }
  }

  _onButton(type) {
    const { _updateScroll, props: { itemMargin, steps }, state: { itemWidth, x } } = this;
    const width = (itemWidth + itemMargin) * steps;

    _updateScroll(type === NEXT ? x + width : x - width);
  }

  _onLayout({ nativeEvent }) {
    this.setState({ layoutHeight: nativeEvent.layout.height });
  }

  _updateScroll(x) {
    this.scrollview.scrollTo({ x });
    this.setState({ x });
  }

  render() {
    const {
      _onButton, _onLayout, _onScroll,
      props: {
        caption, dataSource, item: Item, itemMargin: marginRight, momentum, navigation, style, title,
      },
      state: { layoutHeight },
    } = this;

    return (
      <View style={styles.container}>
        <View style={(title || caption) && styles.header}>
          { title && <Text bold large style={styles.title}>{title}</Text> }
          { caption && <Text small style={styles.caption}>{caption}</Text> }
        </View>
        <View>
          { navigation &&
            <Button
              onPress={_onButton}
              small
              style={StyleSheet.flatten([styles.button, styles.previous, { top: layoutHeight / 2 }])}
              title="<"
            /> }
          { navigation &&
            <Button
              onPress={() => _onButton(NEXT)}
              small
              style={StyleSheet.flatten([styles.button, styles.next, { top: layoutHeight / 2 }])}
              title=">"
            /> }
          <ScrollView
            contentContainerStyle={StyleSheet.flatten(style)}
            horizontal
            onLayout={_onLayout}
            onScroll={momentum ? _onScroll : undefined}
            ref={(scrollview) => {
              this.scrollview = scrollview;
            }}
            scrollEventThrottle={MOMENTUM_INTERVAL}
            style={styles.slider}
          >
            { dataSource.map((data, index) =>
              <View key={index} style={{ marginRight }}><Item data={data} /></View>)}
          </ScrollView>
        </View>
      </View>
    );
  }
}

Slider.propTypes = {
  caption: string,
  dataSource: arrayOf(shape({})),
  item: func,
  itemMargin: number,
  momentum: bool,
  navigation: bool,
  steps: number,
  style: oneOfType([array, number]),
  title: string,
};

Slider.defaultProps = {
  caption: undefined,
  dataSource: [],
  item: undefined,
  itemMargin: UNIT,
  momentum: Platform.OS === 'web',
  navigation: Platform.OS === 'web',
  steps: 1,
  style: [],
  title: undefined,
};

export default Slider;

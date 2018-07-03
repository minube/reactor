import {
  arrayOf, bool, func, number, shape, string,
} from 'prop-types';
import React, { Component } from 'react';
import { Platform, ScrollView, View } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import Button from '../Button';
import Text from '../Text';
import styles from './Slider.style';

const { UNIT } = THEME;

const NEXT = 'next';
let timeout;
const MOMENTUM_INTERVAL = Platform.OS === 'web' ? 40 : 16;

const cardWidth = () => {
  const {
    TINY, PHONE, SMALL, TABLET, REGULAR,
  } = LAYOUT.VIEWPORT;

  if (TINY) return UNIT * 13;
  if (PHONE || SMALL) return UNIT * 15;
  if (TABLET || REGULAR) return UNIT * 16.8;

  return UNIT * 23.6;
};

class Slider extends Component {
  static propTypes = {
    caption: string,
    dataSource: arrayOf(shape({})),
    item: func.isRequired,
    itemMargin: number,
    itemWidth: number,
    momentum: bool,
    navigation: bool,
    steps: number,
    title: string,
  };

  static defaultProps = {
    caption: undefined,
    dataSource: [],
    itemMargin: UNIT,
    itemWidth: undefined,
    momentum: Platform.OS === 'web',
    navigation: Platform.OS === 'web',
    steps: 1,
    title: undefined,
  };

  constructor(props) {
    super(props);

    this.state = { x: 0 };
  }

  componentWillReceiveProps() {
    this.setState({ x: 0 });
  }

  shouldComponentUpdate({ dataSource = [], itemWidth }) {
    const { props } = this;
    return dataSource.length !== props.dataSource.length || itemWidth !== props.itemWidth;
  }

  _onScroll = ({ nativeEvent: { contentOffset: { x } } }) => {
    const { _updateScroll, props: { itemMargin, itemWidth = cardWidth() } } = this;
    const width = (itemWidth + itemMargin);

    if (!Number.isInteger(x / width)) {
      clearTimeout(timeout);
      timeout = setTimeout(() => _updateScroll(Math.round(x / width) * width), MOMENTUM_INTERVAL * 3);
    }
  }

  _onButton = (type) => {
    const {
      _updateScroll,
      props: { itemMargin, itemWidth = cardWidth(), steps },
      state: { x },
    } = this;
    const width = (itemWidth + itemMargin) * steps;

    _updateScroll(type === NEXT ? x + width : x - width);
  }

  _updateScroll = (x) => {
    this.scrollview.scrollTo({ x });
    this.setState({ x });
  }

  render() {
    const {
      _onButton, _onScroll,
      props: {
        caption, dataSource, item: Item, itemMargin: marginRight, momentum, navigation, title, ...inherit
      },
    } = this;

    return (
      <View style={styles.container}>

        { (title || caption)
          && (
          <View style={styles.header}>
            { title && (
            <Text bold large style={styles.title}>
              {title}
            </Text>
            ) }
            { caption && (
            <Text small style={styles.caption}>
              {caption}
            </Text>
            ) }
          </View>
          ) }

        { navigation
          && (
          <View style={[styles.navigation, styles.previous]}>
            <Button icon="left" onPress={_onButton} small />
          </View>
          ) }
        { navigation
          && (
          <View style={[styles.navigation, styles.next]}>
            <Button icon="right" onPress={() => _onButton(NEXT)} small />
          </View>
          ) }

        <ScrollView
          contentContainerStyle={inherit.style}
          horizontal
          onScroll={momentum ? _onScroll : undefined}
          ref={(scrollview) => {
            this.scrollview = scrollview;
          }}
          scrollEventThrottle={MOMENTUM_INTERVAL}
        >
          { dataSource.map((data, index) =>
            <View key={index} style={{ marginRight }}><Item data={data} /></View>) // eslint-disable-line
          }
        </ScrollView>
      </View>
    );
  }
}

export default Slider;

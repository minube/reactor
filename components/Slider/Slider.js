import {
  arrayOf, bool, func, node, number, shape, string,
} from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import { ENV, LAYOUT, THEME } from '../../common';
import Button from '../Button';
import Text from '../Text';
import styles from './Slider.style';

const { IS_WEB } = ENV;
const { UNIT } = THEME;
const NEXT = 'next';
const MOMENTUM_INTERVAL = 40;
let timeout;

class Slider extends Component {
  static propTypes = {
    caption: string,
    children: node,
    dataSource: arrayOf(shape({})),
    item: func,
    itemMargin: number,
    itemWidth: number,
    momentum: bool,
    navigation: bool,
    steps: number,
    title: string,
  };

  static defaultProps = {
    caption: undefined,
    children: undefined,
    dataSource: [],
    item() {},
    itemMargin: UNIT,
    itemWidth: undefined,
    momentum: IS_WEB,
    navigation: IS_WEB,
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

  shouldComponentUpdate({ dataSource = [] }) {
    const { props } = this;
    return JSON.stringify(dataSource) !== JSON.stringify(props.dataSource); // @TODO: We should compare all the datasource
  }

  _onPressButton = (type) => {
    const {
      _updateScroll,
      props: { itemMargin, itemWidth = LAYOUT.CARD.SLIDER, steps },
      state: { x },
    } = this;
    const width = (itemWidth + itemMargin) * steps;

    _updateScroll(type === NEXT ? x + width : x - width);
  }

  _onScroll = ({ nativeEvent: { contentOffset: { x } } }) => {
    const { _updateScroll, props: { itemMargin, itemWidth = LAYOUT.CARD.SLIDER } } = this;
    const width = (itemWidth + itemMargin);

    if (!Number.isInteger(x / width)) {
      clearTimeout(timeout);
      timeout = setTimeout(() => _updateScroll(Math.round(x / width) * width), MOMENTUM_INTERVAL * 2);
    }
  }

  _updateScroll = (x) => {
    this.scrollview.scrollTo({ x });
    this.setState({ x });
  }

  render() {
    const {
      _onPressButton, _onScroll,
      props: {
        caption, dataSource, item: Item, itemMargin: marginRight, momentum, navigation, title, ...inherit
      },
    } = this;

    return (
      <View style={styles.container}>

        { (title || caption) && (
          <View style={styles.header}>
            { title && (
            <Text bold large style={styles.title}>
              {title}
            </Text>
            )}
            { caption && (
            <Text small style={styles.caption}>
              {caption}
            </Text>
            )}
          </View>
        )}

        { navigation && (
          <View style={[styles.navigation, styles.previous]}>
            <Button icon="left" onPress={_onPressButton} small />
          </View>
        )}

        { navigation && (
          <View style={[styles.navigation, styles.next]}>
            <Button icon="right" onPress={() => _onPressButton(NEXT)} small />
          </View>
        )}

        <ScrollView
          contentContainerStyle={inherit.style}
          horizontal
          onScroll={momentum ? _onScroll : undefined}
          ref={scrollview => this.scrollview = scrollview} // eslint-disable-line
          scrollEventThrottle={MOMENTUM_INTERVAL}
        >
          { dataSource.map((data, index) =>
            <View key={index} style={{ marginRight }}><Item data={data} /></View>) // eslint-disable-line
          }
          { inherit.children }
        </ScrollView>
      </View>
    );
  }
}

export default Slider;

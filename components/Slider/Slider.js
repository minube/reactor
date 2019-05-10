import {
  arrayOf, bool, func, node, number, shape, string,
} from 'prop-types';
import React, { Component, createRef } from 'react';
import { Platform, ScrollView, View } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import Button from '../Button';
import Text from '../Text';
import styles from './Slider.style';

const { SPACE } = THEME;
const DEFAULT_PROPS = {
  horizontal: true,
  removeClippedSubviews: true,
  showsHorizontalScrollIndicator: false,
};
const NEXT = 'next';

class Slider extends Component {
  static propTypes = {
    caption: string,
    children: node,
    dataSource: arrayOf(shape({})),
    item: func,
    itemMargin: number,
    itemWidth: number,
    onChange: func,
    navigation: bool,
    snap: bool,
    steps: number,
    title: string,
  };

  static defaultProps = {
    caption: undefined,
    children: undefined,
    dataSource: [],
    item() {},
    itemMargin: SPACE.S,
    itemWidth: undefined,
    onChange: undefined,
    navigation: false,
    snap: true,
    steps: 1,
    title: undefined,
  };

  constructor(props) {
    super(props);
    this.scrollview = createRef();
    this.state = { x: 0 };
  }

  componentWillReceiveProps() {
    this.setState({ x: 0 });
  }

  // shouldComponentUpdate({ dataSource = [] }) {
  //   const { props } = this;
  //   return JSON.stringify(dataSource) !== JSON.stringify(props.dataSource); // @TODO: We should compare all the datasource
  // }

  _onPressButton = (type) => {
    const { props: { itemMargin, itemWidth = LAYOUT.CARD.SLIDER, steps } } = this;
    const width = (itemWidth + itemMargin) * steps;
    let { state: { x } } = this;

    x = type === NEXT ? x + width : x - width;

    this.scrollview.current.scrollTo({ x });
    this.setState({ x });
  }

  render() {
    const {
      _onPressButton,
      props: {
        caption, dataSource, navigation, onChange, snap, steps, title,
        item: Item, itemMargin, itemWidth = LAYOUT.CARD.SLIDER,
        ...inherit
      },
    } = this;
    const snapProps = snap
      ? {
        decelerationRate: 'fast',
        pagingEnabled: Platform.OS !== 'ios',
        snapToInterval: (itemWidth + itemMargin) * steps,
        snapToAlignment: 'start',
      }
      : undefined;
    const onChangeProps = onChange
      ? {
        onScroll: ({ nativeEvent: { contentOffset } }) => onChange(contentOffset),
        scrollEventThrottle: 1000,
      }
      : undefined;

    return (
      <View style={styles.container}>
        { (title || caption) && (
          <View style={styles.header}>
            { title && (
            <Text headline level={6} style={styles.title}>
              {title}
            </Text>
            )}
            { caption && (
            <Text caption lighten>
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
          {...DEFAULT_PROPS}
          {...snapProps}
          {...onChangeProps}
          contentContainerStyle={inherit.style}
          ref={this.scrollview}
        >
          { dataSource.map((data, index) =>
            <View key={index} style={{ marginRight: itemMargin }}><Item data={data} /></View>) // eslint-disable-line
          }
          { inherit.children }
        </ScrollView>
      </View>
    );
  }
}

export default Slider;

import {
  arrayOf, bool, func, node, number, shape, string,
} from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import { LAYOUT, THEME } from '../../common';
import Button from '../Button';
import Text from '../Text';
import styles from './Slider.style';

const { SPACE } = THEME;
const NEXT = 'next';

class Slider extends Component {
  static propTypes = {
    caption: string,
    children: node,
    dataSource: arrayOf(shape({})),
    item: func,
    itemMargin: number,
    itemWidth: number,
    navigation: bool,
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
    navigation: false,
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
    const { props: { itemMargin, itemWidth = LAYOUT.CARD.SLIDER, steps } } = this;
    const width = (itemWidth + itemMargin) * steps;
    let { state: { x } } = this;

    x = type === NEXT ? x + width : x - width;

    this.scrollview.scrollTo({ x });
    this.setState({ x });
  }

  render() {
    const {
      _onPressButton,
      props: {
        caption, dataSource, item: Item, itemMargin: marginRight, navigation, title, ...inherit
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
            <Text small lighten>
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
          pagingEnabled
          removeClippedSubviews
          ref={scrollview => this.scrollview = scrollview} // eslint-disable-line
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
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

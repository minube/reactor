import { bool, func } from 'prop-types';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import {
  ListingCard, Share, Slider, Text, Viewport,
} from '../components';

import Header from './Header';
import styles from './Viewport.style';

const LIPSUM = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." // eslint-disable-line

const ItemListingCard = ({ data }) => <ListingCard {...data} />; // eslint-disable-line

export default class App extends Component {
  static propTypes = {
    visible: bool,
    onBack: func.isRequired,
  };

  static defaultProps = {
    visible: false,
  };

  state = {
    dataSource: [...Array(16).keys()]
      .map(index => ({
        category: `Category ${index}`,
        title: `Title ${index}`,
        rating: { value: index + 1 },
        image: `https://picsum.photos/320/200?image=1${index + 1}`,
      })),
  }

  render() {
    const { props: { onBack, visible }, state } = this;

    return (
      <Viewport onBack={onBack} scroll={false} style={styles.container} visible={visible}>
        <Header title="Kitchensink" onBack={onBack} />
        <ScrollView contentContainerStyle={styles.content}>
          <Share uri="http://soyjavi.com" title="Share" />
          <Slider dataSource={state.dataSource} item={ItemListingCard} navigation={false} steps={2} />
          <Text>
            {LIPSUM}
          </Text>
        </ScrollView>
      </Viewport>
    );
  }
}

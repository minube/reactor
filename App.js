import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { STYLE, THEME } from './common';
import {
  Button,
  Heading,
  ListingCard,
  ProgressBar,
  Text,
  Slider,
  Switch,
  Video,
} from './components';
import PKG from './package.json';

if (typeof global.self === 'undefined') global.self = global;

const ItemListingCard = ({ data }) => <ListingCard {...data} />; // eslint-disable-line
const video = 'https://coverr.co/s3/mp4/Cloud_Surf.mp4';
const youtube = 'https://www.youtube.com/embed/cx4MxQcD8Fk?title=0';
const vimeo = 'https://player.vimeo.com/video/225434434';

const styles = StyleSheet.create({
  container: StyleSheet.flatten([
    STYLE.CENTERED,
    {
      flex: 1,
      // backgroundColor: THEME.COLOR.BACKGROUND,
      padding: THEME.UNIT,
    },
  ]),

  webview: {
    // flex: 1,
    margin: 0,
    padding: 0,
    width: 256,
    height: 200,

    maxWidth: 256,
    maxHeight: 200,
    overflow: 'hidden',
    backgroundColor: 'orange',
  },
});

export default class App extends Component {
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
    return (
      <View style={styles.container}>
        <View style={STYLE.CENTERED}>
          <Text bold large>{PKG.name}</Text>
          <Text bold tiny>{PKG.version}</Text>
        </View>
        <Video autoPlay loop height={200} width={320} source={video} />
      </View>
    );
  }
}

// <Button activity primary rounded title="Touch Me" onPress={() => console.log('Button.onPress')} />
// <Heading title="Actividades en España" rating={3} />
// <Switch />
// <ProgressBar progress={0.5} />
// <Slider dataSource={this.state.dataSource} item={ItemListingCard} navigation momentum />

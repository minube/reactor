import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { STYLE, THEME } from './common';
import {
  Button,
  ListingCard,
  Text,
  Video,
  Viewport,
} from './components';
import PKG from './package.json';

if (typeof global.self === 'undefined') global.self = global;

const ItemListingCard = ({ data }) => <ListingCard {...data} />; // eslint-disable-line
const video = 'https://coverr.co/s3/mp4/Cloud_Surf.mp4';
const youtube = 'https://www.youtube.com/cx4MxQcD8Fk';
const vimeo = 'https://player.vimeo.com/video/225434434';

const LIPSUM = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const styles = StyleSheet.create({
  container: StyleSheet.flatten([
    STYLE.CENTERED,
    {
      flex: 1,
      // backgroundColor: THEME.COLOR.BACKGROUND,
      padding: THEME.UNIT,
      backgroundColor: 'orange',
    },
  ]),
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
    viewport: false,
  }

  render() {
    const { state: { viewport } } = this;

    return (
      <View style={styles.container}>
        <Viewport visible scroll={true} style={STYLE.CENTERED}>
          <Text bold large>{PKG.name}</Text>
          <Text bold tiny>{PKG.version}</Text>
          <Button title="Second viewport" onPress={() => this.setState({ viewport: true })}/>
          <Text>{LIPSUM}</Text>
          <Text>{LIPSUM}</Text>
          <Text>{LIPSUM}</Text>
          <Text>{LIPSUM}</Text>
          <Text>{LIPSUM}</Text>
        </Viewport>

        <Viewport
          visible={viewport}
          onBack={() => this.setState({ viewport: false })}
          style={{ backgroundColor: 'red' }}
        >

          <Video
            autoPlay
            loop
            height={200}
            width={320}
            source={video}
            onLoad={() => console.log('onload')}
          />
          <Button title="Back" onPress={() => this.setState({ viewport: false })}/>
        </Viewport>
      </View>
    );
  }
}

// <Button activity primary rounded title="Touch Me" onPress={() => console.log('Button.onPress')} />
// <Heading title="Actividades en España" rating={3} />
// <Switch />
// <ProgressBar progress={0.5} />
// <Slider dataSource={this.state.dataSource} item={ItemListingCard} navigation momentum />

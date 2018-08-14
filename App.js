import React, { Component, Fragment } from 'react';
import { StyleSheet, View } from 'react-native';

import { STYLE, THEME } from './common';
import {
  Button,
  ListingCard,
  Text,
  Video,
  Viewport,
  Slider,
  Share,
} from './components';
import { Consumer, Provider } from './context';
import PKG from './package.json';

if (typeof global.self === 'undefined') global.self = global;

const ItemListingCard = ({ data }) => <ListingCard {...data} />; // eslint-disable-line
const video = 'https://coverr.co/s3/mp4/Cloud_Surf.mp4';
const youtube = 'https://www.youtube.com/cx4MxQcD8Fk'; // eslint-disable-line
const vimeo = 'https://player.vimeo.com/video/225434434'; // eslint-disable-line

const LIPSUM = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const DICTIONARY = {
  'es-ES': {
    GREETINGS: 'Hola Mundo...',
  },

  'en-EN': {
    GREETINGS: 'Hello World...',
  },
};

const styles = StyleSheet.create({
  container: {
    ...STYLE.CENTERED,
    flex: 1,
    padding: THEME.UNIT,
    backgroundColor: 'rgba(0,255,0,0.25)',
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
    viewport: false,
  }

  render() {
    const { state: { viewport } } = this;

    return (
      <Provider dictionary={DICTIONARY} language="en-EN">
        <View style={styles.container}>
          <Viewport visible scroll style={STYLE.CENTERED}>
            <Consumer>
              { ({ l10n }) => (
                <Fragment>
                  <Text bold large>{PKG.name}</Text>
                  <Text bold tiny>{PKG.version}</Text>
                  <Text bold tiny>{`l10n: ${l10n.GREETINGS}`}</Text>
                </Fragment>
              )}
            </Consumer>
            <Share
              uri="http://soyjavi.com"
              title="Share"
            />
            <Button title="Second viewport" onPress={() => this.setState({ viewport: true })}/>
            <Slider dataSource={this.state.dataSource} item={ItemListingCard} navigation momentum />

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
      </Provider>
    );
  }
}

// <Button activity primary rounded title="Touch Me" onPress={() => console.log('Button.onPress')} />
// <Heading title="Actividades en España" rating={3} />
// <Switch />
// <ProgressBar progress={0.5} />
// <Slider dataSource={this.state.dataSource} item={ItemListingCard} navigation momentum />

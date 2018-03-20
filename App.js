import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { STYLE, THEME } from './common';
import {
  Button,
  Heading,
  ListingCard,
  PictureCard,
  ProgressBar,
  Text,
  Slider,
  Switch,
} from './components';
import PKG from './package.json';

const LIPSUM_IMAGE = 'https://picsum.photos/320/200/?random';

const dataSource = [...Array(16).keys()]
  .map(index => ({
    category: `Category ${index}`,
    title: `Title ${index}`,
    rating: { value: index + 1 },
    image: `https://picsum.photos/320/200?image=1${index + 1}`,
  }));

const ItemListingCard = ({ data }) => <ListingCard {...data} />;
const ItemPictureCard = ({ data }) => <PictureCard square {...data} />;

const styles = StyleSheet.create({
  container: StyleSheet.flatten([
    STYLE.CENTERED,
    {
      flex: 1,
      // backgroundColor: THEME.COLOR.BACKGROUND,
      padding: THEME.UNIT,
    },
  ]),
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={STYLE.CENTERED}>
          <Text bold large>{PKG.name}</Text>
          <Text bold tiny>{PKG.version}</Text>
        </View>
        <Slider dataSource={dataSource} item={ItemListingCard} navigation momentum />
      </View>
    );
  }
}

// <Button activity primary rounded title="Touch Me" />
// <Heading title="Actividades en España" rating={3} />

// <ListingCard
//   category="Restaurantes"
//   description="Es una de esas joyas de Río que no hay que perderse. Se encuentra a caballo entre Lapa y el Barrio de… "
//   image={LIPSUM_IMAGE}
//   rating={4}
//   title="Café Les Deux Molins - El café de Amelie con titulo súper largo la"
// />

// <Switch />

// <ProgressBar progress={0.5} />


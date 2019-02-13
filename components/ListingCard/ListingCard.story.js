import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, object } from '@storybook/addon-knobs/react';

import { THEME, LAYOUT } from '../../common';
import Button from '../Button';
import Price from '../Price';
import Text from '../Text';
import ListingCard from './ListingCard';

const { COLOR, UNIT } = THEME;
const LIPSUM_IMAGE = 'https://picsum.photos/320/200/?random';
const RATING = { showValue: false, count: 12, value: 4.5 };
const STYLE_LISTINGCARD = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 10 };

storiesOf('✅ ListingCard', module)
  .add('default', () => (
    <ListingCard />
  ))
  .add('image', () => (
    <ListingCard image={LIPSUM_IMAGE} />
  ))
  .add('title', () => (
    <ListingCard title="Café Les Deux Molins - El café de Amelie con titulo súper largo la" />
  ))
  .add('category', () => (
    <ListingCard category="Restaurantes" />
  ))
  .add('description', () => (
    <ListingCard description="Es una de esas joyas de Río que no hay que perderse. Se encuentra a caballo entre Lapa y el Barrio de… " />
  ))
  .add('rating', () => (
    <ListingCard rating={RATING} />
  ))
  .add('children', () => (
    <ListingCard>
      <Button flat rounded small title="15 Actividades" style={{ alignSelf: 'flex-start', marginHorizontal: 0 }} />
    </ListingCard>
  ))
  .add('complete', () => (
    <ListingCard
      category="Restaurantes"
      description="Es una de esas joyas de Río que no hay que perderse. Se encuentra a caballo entre Lapa y el Barrio de… "
      image={LIPSUM_IMAGE}
      rating={RATING}
      title="Café Les Deux Molins - El café de Amelie con titulo súper largo la"
    >
      <View style={LAYOUT.STYLE.ROW}>
        <View style={{ marginRight: UNIT }}>
          <Text caption>desde</Text>
          <Price large value={90} symbol="$" />
        </View>
        <Text style={{ width: '50%' }}>
          Mascotas bienvenidas
        </Text>
      </View>
    </ListingCard>
  ))
  .add('styleContainer', () => (
    <ListingCard styleContainer={STYLE_LISTINGCARD} />
  ))
  .add('🏀 Playground', () => (
    <ListingCard
      category={text('category', 'category')}
      description={text('description', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,')}
      image={text('image', LIPSUM_IMAGE)}
      onPress={action('Button.onPress()')}
      rating={object('rating', RATING, 'listingcard-rating')}
      title={text('title', 'title')}
      styleContainer={object('styleContainer', STYLE_LISTINGCARD)}
    />
  ));


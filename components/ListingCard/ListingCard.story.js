import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, object } from '@storybook/addon-knobs/react';

import { THEME, STYLE } from '../../common';
import Button from '../Button';
import Price from '../Price';
import Text from '../Text';
import ResponsiveView from '../ResponsiveView';
import ListingCard from './ListingCard';

const { UNIT } = THEME;
const LIPSUM_IMAGE = 'https://picsum.photos/320/200/?random';
const RATING = { showValue: false, count: 12, value: 4.5 };

storiesOf('✅ ListingCard', module)
  .addWithJSX('Empty', () => (
    <ListingCard empty />
  ))
  .addWithJSX('default', () => (
    <ListingCard
      category="Restaurantes"
      image={LIPSUM_IMAGE}
      rating={RATING}
      ratingCount={2}
      title="Café Les Deux Molins - El café de Amelie con titulo súper largo puede..."
    />
  ))
  .addWithJSX('description', () => (
    <ListingCard
      category="Restaurantes"
      description="Es una de esas joyas de Río que no hay que perderse. Se encuentra a caballo entre Lapa y el Barrio de… "
      image={LIPSUM_IMAGE}
      rating={RATING}
      title="Café Les Deux Molins - El café de Amelie con titulo súper largo la"
    />
  ))
  .addWithJSX('button as a child', () => (
    <ListingCard
      category="Monumentos"
      image={LIPSUM_IMAGE}
      rating={RATING}
      title="Torre Eiffel Lorem ipsum dolor sit amet adipiscing "
    >
      <Button flat rounded small title="15 Actividades" style={{ alignSelf: 'flex-start', marginHorizontal: 0 }} />
    </ListingCard>
  ))
  .addWithJSX('a container as a child', () => (
    <ListingCard
      category="Monumentos"
      image={LIPSUM_IMAGE}
      rating={RATING}
      title="Torre Eiffel Lorem ipsum dolor sit amet adipiscing "
    >
      <View style={STYLE.ROW}>
        <View style={{ marginRight: UNIT }}>
          <Text tiny>desde</Text>
          <Price large value={90} symbol="$" />
        </View>
        <Text tiny bold accent style={{ width: '50%' }}>
          Mascotas bienvenidas
        </Text>
      </View>
    </ListingCard>
  ))
  .addWithJSX('style', () => (
    <ListingCard />
  ))
  .addWithJSX('🏀 Playground', () => (
    <ResponsiveView>
      <ListingCard
        category={text('category', 'category')}
        description={text('description', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,')}
        image={text('image', LIPSUM_IMAGE)}
        onPress={action('Button.onPress()')}
        rating={object('rating', RATING, 'listingcard-rating')}
        title={text('title', 'title')}
      />
    </ResponsiveView>
  ));


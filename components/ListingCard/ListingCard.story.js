import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, number } from '@storybook/addon-knobs/react';

import { THEME, STYLE } from '../../common';
import Button from '../Button';
import ListingCard from './ListingCard';
import Price from '../Price';
import Text from '../Text';

const { COLOR: { TEXT, WARNING }, FONT, UNIT } = THEME;
const LIPSUM_IMAGE = 'https://picsum.photos/320/200/?random';

storiesOf('✅ ListingCard', module)
  .addWithJSX('Empty', () => (
    <ListingCard empty />
  ))
  .addWithJSX('default', () => (
    <ListingCard
      category="Restaurantes"
      image={LIPSUM_IMAGE}
      rating={4}
      ratingCount={2}
      title="Café Les Deux Molins - El café de Amelie con titulo súper largo puede..."
    />
  ))
  .addWithJSX('with description', () => (
    <ListingCard
      category="Restaurantes"
      description="Es una de esas joyas de Río que no hay que perderse. Se encuentra a caballo entre Lapa y el Barrio de… "
      image={LIPSUM_IMAGE}
      rating={4}
      title="Café Les Deux Molins - El café de Amelie con titulo súper largo la"
    />
  ))
  .addWithJSX('with button as a child', () => (
    <ListingCard
      category="Monumentos"
      image={LIPSUM_IMAGE}
      rating={4}
      ratingCount={2}
      title="Torre Eiffel Lorem ipsum dolor sit amet adipiscing "
    >
      <Button flat rounded small title="15 Actividades" style={{ alignSelf: 'flex-start', marginHorizontal: 0 }} />
    </ListingCard>
  ))
  .addWithJSX('with a container as a child', () => (
    <ListingCard
      category="Monumentos"
      image={LIPSUM_IMAGE}
      rating={4}
      ratingCount={2}
      title="Torre Eiffel Lorem ipsum dolor sit amet adipiscing "
    >
      <View style={STYLE.ROW}>
        <View style={{ marginRight: UNIT }}>
          <Text style={{ color: TEXT, fontSize: FONT.SIZE.TINY }}>desde</Text>
          <Price value={90} symbol="$" style={{ fontSize: FONT.SIZE.LARGE }} />
        </View>
        <Text style={{
            fontSize: FONT.SIZE.TINY, fontWeight: FONT.WEIGHT.BOLD, color: WARNING, width: '50%',
          }}
        >
          Mascotas bienvenidas
        </Text>
      </View>
    </ListingCard>
  ))
  .addWithJSX('💄 Custom Style', () => (
    <ListingCard />
  ))
  .addWithJSX('🏀 Playground', () => (
    <ListingCard
      category={text('category', 'category')}
      description={text('description', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,')}
      image={text('image', LIPSUM_IMAGE)}
      onPress={action('Button.onPress()')}
      rating={number('rating', 4)}
      ratingCount={number('ratingCount', 2)}
      title={text('title', 'title')}
    />
  ));


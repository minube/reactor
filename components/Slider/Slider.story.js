import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, object } from '@storybook/addon-knobs/react';

import ListingCard from '../ListingCard';
import PictureCard from '../PictureCard';
import Slider from './Slider';

const dataSource = [...Array(16).keys()]
  .map(index => ({
    category: `Category ${index}`,
    title: `Title ${index}`,
    rating: { value: index },
    image: `https://picsum.photos/320/200?image=1${index + 1}`,
  }));

const ItemListingCard = ({ data }) => <ListingCard {...data} />;
const ItemPictureCard = ({ data }) => <PictureCard square {...data} />;
const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', padding: 20 };

storiesOf('✅ Slider', module)
  .addWithJSX('default', () => (
    <Slider dataSource={dataSource} item={ItemListingCard} />
  ))
  .addWithJSX('navigation', () => (
    <Slider dataSource={dataSource} item={ItemListingCard} navigation />
  ))
  .addWithJSX('itemMargin', () => (
    <Slider dataSource={dataSource} item={ItemListingCard} itemMargin={16} />
  ))
  .addWithJSX('steps (2)', () => (
    <Slider dataSource={dataSource} steps={2} item={ItemListingCard} />
  ))
  .addWithJSX('momentum', () => (
    <Slider dataSource={dataSource} momentum item={ItemListingCard} />
  ))
  .addWithJSX('title', () => (
    <Slider dataSource={dataSource} title="Explora nuevos destinos" item={ItemListingCard} />
  ))
  .addWithJSX('caption', () => (
    <Slider
      caption="Muy del estilo de Chiang Mai"
      dataSource={dataSource}
      title="Explora nuevos destinos"
      item={ItemListingCard}
    />
  ))
  .addWithJSX('style', () => (
    <Slider dataSource={dataSource} item={ItemPictureCard} style={STYLE} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <Slider
      caption={text('caption', 'Muy del estilo de Chiang Mai')}
      dataSource={dataSource}
      itemMargin={number('itemMargin', 10)}
      navigation={boolean('navigation', true)}
      momentum={boolean('momentum', false)}
      steps={number('steps', 1)}
      title={text('title', 'Explora nuevos destinos')}
      item={ItemPictureCard}
      style={object('style', STYLE)}
    />
  ));


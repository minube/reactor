import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs/react';

import Slider from './Slider';
import ListingCard from '../ListingCard';
import PictureCard from '../PictureCard';

const dataSource = [...Array(16).keys()]
  .map(index => ({
    category: `Category ${index}`,
    title: `Title ${index}`,
    rating: index,
    image: `https://picsum.photos/320/200?image=1${index + 1}`,
  }));

const ItemListingCard = ({ data }) => <ListingCard {...data} />;
const ItemPictureCard = ({ data }) => <PictureCard square {...data} />;

storiesOf('🛠 Slider', module)
  .addWithJSX('default', () => (
    <Slider dataSource={dataSource} item={ItemListingCard} />
  ))
  .addWithJSX('with navigation', () => (
    <Slider dataSource={dataSource} item={ItemListingCard} navigation />
  ))
  .addWithJSX('with itemMargin', () => (
    <Slider dataSource={dataSource} item={ItemListingCard} itemMargin={16} />
  ))
  .addWithJSX('with (2) steps', () => (
    <Slider dataSource={dataSource} steps={2} item={ItemListingCard} />
  ))
  .addWithJSX('with momentum', () => (
    <Slider dataSource={dataSource} momentum item={ItemListingCard} />
  ))
  .addWithJSX('with title', () => (
    <Slider dataSource={dataSource} title="Explora nuevos destinos" item={ItemListingCard} />
  ))
  .addWithJSX('with caption', () => (
    <Slider
      caption="Muy del estilo de Chiang Mai"
      dataSource={dataSource}
      title="Explora nuevos destinos"
      item={ItemListingCard}
    />
  ))
  .addWithJSX('💄 Custom Style', () => (
    <Slider
      dataSource={dataSource}
      item={ItemPictureCard}
      style={{ backgroundColor: 'orange', padding: 20 }}
    />
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
    />
  ));


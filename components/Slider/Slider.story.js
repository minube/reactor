import React from 'react';
import { storiesOf } from '@storybook/react';

import Slider from './Slider';
import ListingCard from '../ListingCard';
import PictureCard from '../PictureCard';

const dataSource = [...Array(10).keys()]
  .map(index => ({ category: `Category ${index}`, title: `Title ${index}`, rating: index }));

storiesOf('🛠 Slider', module)
  .addWithJSX('default', () => (
    <Slider
      dataSource={dataSource}
      item={({ data }) => <ListingCard {...data} style={{ padding: 10 }} />}
    />
  ))
  .addWithJSX('💄 Custom Style', () => (
    <Slider
      dataSource={dataSource}
      item={({ data }) => <PictureCard {...data} style={{ marginRight: 5 }} />}
      style={{ backgroundColor: 'orange', padding: 10 }}
    />
  ));


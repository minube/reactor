import React from 'react';
import { storiesOf } from '@storybook/react';

import { THEME } from '../../common';
import HotelCard from './HotelCard';

const LIPSUM_IMAGE = 'https://picsum.photos/320/200/?random';

storiesOf('HotelCard', module)
  .addWithJSX('default', () => (
    <HotelCard empty />
  ))
  .addWithJSX('custom color', () => (
    <HotelCard
      image={LIPSUM_IMAGE}
      title="Hotel Kurutziaga Jauregia"
      location="Mundaka, España"
      comment="Habitaciones limpias Personal maravilloso"
      value={7}
      proposals={[]}
    />
  ));

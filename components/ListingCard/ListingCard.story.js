import React from 'react';
import { storiesOf } from '@storybook/react';

import ListingCard from './ListingCard';

storiesOf('ListingCard', module)
  .addWithJSX('default', () => (
    <ListingCard />
  ));


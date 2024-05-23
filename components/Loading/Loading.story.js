import React from 'react';
import { storiesOf } from '@storybook/react';

import Loading from './Loading';


storiesOf('✅ Loading', module)
  .add('default', () => (
    <Loading />
  ));

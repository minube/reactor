import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './Input';

storiesOf('🛠 Input', module)
  .addWithJSX('default', () => (
    <Input />
  ));


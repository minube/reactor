import React from 'react';
import { storiesOf } from '@storybook/react';

import ProgressBar from './ProgressBar';

storiesOf('ProgressBar', module)
  .addWithJSX('default', () => (
    <ProgressBar />
  ))
  .addWithJSX('indeterminate', () => (
    <ProgressBar indeterminate />
  ));


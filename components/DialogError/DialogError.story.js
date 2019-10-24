import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs/react';

import DialogError from './DialogError';
import MOCKS from '../Icon/Icon.mocks';

const TEXT = 'You must complete all fields';

storiesOf('☑️ DialogError', module)
  .add('default', () => (
    <DialogError title={TEXT}/>
  ))
  .add('icon', () => (
    <DialogError title={TEXT} icon="alertColor" />
  ))
  .add('🏀 Playground', () => (
    <DialogError
      title={text('currency', TEXT)}
      icon={select('value', MOCKS.ICONS, MOCKS.VALUE)}
    />
  ));

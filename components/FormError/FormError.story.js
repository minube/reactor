import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs/react';

import FormError from './FormError';
import MOCKS from '../Icon/Icon.mocks';

const TEXT = 'You must complete all fields';

storiesOf('☑️ FormError', module)
  .add('default', () => (
    <FormError title={TEXT}/>
  ))
  .add('icon', () => (
    <FormError title={TEXT} icon="alertColor" />
  ))
  .add('🏀 Playground', () => (
    <FormError
      title={text('currency', TEXT)}
      icon={select('value', MOCKS.ICONS, MOCKS.VALUE)}
    />
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, object, text } from '@storybook/addon-knobs/react';

import PrivacyTerms from './PrivacyTerms';

const style = {
  backgroundColor: 'rgba(0,255,0,0.25)',
  padding: 10,
};

const LABEL = 'Lorem Ipsum...';

storiesOf('✅ PrivacyTerms', module)
  .add('default', () => (
    <PrivacyTerms />
  ))
  .add('label', () => (
    <PrivacyTerms label={LABEL} />
  ))
  .add('value', () => (
    <PrivacyTerms value />
  ))
  .add('rounded (false)', () => (
    <PrivacyTerms rounded={false} />
  ))
  .add('inherit:style', () => (
    <PrivacyTerms style={style} />
  ))
  .add('⚡ onChange', () => (
    <PrivacyTerms onChange={action('PrivacyTerms.onChange()')} />
  ))
  .add('🏀 Playground', () => (
    <PrivacyTerms
      label={text('label', LABEL)}
      value={boolean('value', true)}
      rounded={boolean('rounded', true)}
      onChange={action('PrivacyTerms.onChange()')}
      style={object('style', style)}
    />
  ));

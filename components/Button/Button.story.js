import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, color } from '@storybook/addon-knobs/react';

import { LayoutView, Price } from '../';
import Button from './Button';

storiesOf('✅ Button', module)
  .addWithJSX('default', () => (
    <Button />
  ))
  .addWithJSX('title', () => (
    <Button title="Press me" />
  ))
  .addWithJSX('icon', () => (
    <Button icon="apps" />
  ))
  .addWithJSX('icon & title', () => (
    <Button icon="apps" title="Press me" />
  ))
  .addWithJSX('contained (false)', () => (
    <Button contained={false} title="Press me" />
  ))
  .addWithJSX('outlined', () => (
    <Button outlined title="Press me" />
  ))
  .addWithJSX('primary', () => (
    <Button primary title="Press me" />
  ))
  .addWithJSX('accent', () => (
    <Button accent title="Press me" />
  ))
  .addWithJSX('activity', () => (
    <Button activity title="Press me" />
  ))
  .addWithJSX('children', () => (
    <Button color="red">
      <Price value={10} style={{ color: 'white' }} />
    </Button>
  ))
  .addWithJSX('color', () => (
    <Button color="red" title="Press me" />
  ))
  .addWithJSX('disabled', () => (
    <Button disabled title="Press me" />
  ))
  .addWithJSX('responsive', () => (
    <Button responsive title="Press me" />
  ))
  .addWithJSX('rounded', () => (
    <Button rounded title="Press me" />
  ))
  .addWithJSX('small', () => (
    <Button small title="Press me" />
  ))
  .addWithJSX('⚡ onPress', () => (
    <Button onPress={action('Button.onPress()')} title="Press me" />
  ))
  .addWithJSX('style', () => (
    <Button title="Press me" style={{ backgroundColor: 'orange' }} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <Button
      accent={boolean('accent', false)}
      activity={boolean('activity', false)}
      color={color('color', undefined)}
      contained={boolean('contained', true)}
      disabled={boolean('disabled', false)}
      // flat={boolean('flat', false)}
      icon={text('icon', null)}
      onPress={action('Button.onPress()')}
      outlined={boolean('outlined', false)}
      primary={boolean('primary', false)}
      responsive={boolean('responsive', false)}
      rounded={boolean('rounded', false)}
      small={boolean('small', false)}
      title={text('title', undefined)}
    />
  ));


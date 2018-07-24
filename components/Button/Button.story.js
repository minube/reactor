import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, color, object } from '@storybook/addon-knobs/react';

import { LayoutView, Price } from '../';
import Button from './Button';

const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', margin: 10 };
const NULL = () => {};

storiesOf('✅ Button', module)
  .addWithJSX('default', () => (
    <Button />
  ))
  .addWithJSX('title', () => (
    <Button title="Press me" onPress={NULL} />
  ))
  .addWithJSX('icon', () => (
    <Button icon="apps" onPress={NULL} />
  ))
  .addWithJSX('icon & title', () => (
    <Button icon="apps" title="Press me" onPress={NULL} />
  ))
  .addWithJSX('contained (false)', () => (
    <Button contained={false} title="Press me" onPress={NULL} />
  ))
  .addWithJSX('outlined', () => (
    <Button outlined title="Press me" onPress={NULL} />
  ))
  .addWithJSX('primary', () => (
    <Button primary title="Press me" onPress={NULL} />
  ))
  .addWithJSX('accent', () => (
    <Button accent title="Press me" onPress={NULL} />
  ))
  .addWithJSX('activity', () => (
    <Button activity title="Press me" onPress={NULL} />
  ))
  .addWithJSX('children', () => (
    <Button color="red">
      <Price value={10} style={{ color: 'white' }} onPress={NULL} />
    </Button>
  ))
  .addWithJSX('color', () => (
    <Button color="red" title="Press me" onPress={NULL} />
  ))
  .addWithJSX('disabled', () => (
    <Button disabled title="Press me" />
  ))
  .addWithJSX('responsive', () => (
    <Button responsive title="Press me" onPress={NULL} />
  ))
  .addWithJSX('rounded', () => (
    <Button rounded title="Press me" onPress={NULL} />
  ))
  .addWithJSX('small', () => (
    <Button small title="Press me" onPress={NULL} />
  ))
  .addWithJSX('⚡ onPress', () => (
    <Button onPress={action('Button.onPress()')} title="Press me" />
  ))
  .addWithJSX('style', () => (
    <Button title="Press me" style={STYLE} onPress={NULL} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <Button
      accent={boolean('accent', false)}
      activity={boolean('activity', false)}
      color={color('color', undefined)}
      contained={boolean('contained', true)}
      disabled={boolean('disabled', false)}
      icon={text('icon', null)}
      onPress={action('Button.onPress()')}
      outlined={boolean('outlined', false)}
      primary={boolean('primary', false)}
      responsive={boolean('responsive', false)}
      rounded={boolean('rounded', false)}
      small={boolean('small', false)}
      title={text('title', undefined)}
      style={object('style', STYLE)}
    />
  ));


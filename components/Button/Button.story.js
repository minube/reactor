import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, color, object } from '@storybook/addon-knobs/react';

import { LayoutView, Price } from '../';
import Button from './Button';

const styles = {
  button: {
    marginHorizontal: 10,
    backgroundColor: 'rgba(0,255,0,0.25)',
    opacity: 0.5,
  },
}
const _onPress = () => {};

storiesOf('✅ Button', module)
  .addWithJSX('default', () => (
    <Button />
  ))
  .addWithJSX('title', () => (
    <Button title="Press me" onPress={_onPress} />
  ))
  .addWithJSX('icon', () => (
    <Button icon="apps" onPress={_onPress} />
  ))
  .addWithJSX('icon & title', () => (
    <Button icon="apps" title="Press me" onPress={_onPress} />
  ))
  .addWithJSX('contained (false)', () => (
    <Button contained={false} title="Press me" onPress={_onPress} />
  ))
  .addWithJSX('outlined', () => (
    <Button outlined title="Press me" onPress={_onPress} />
  ))
  .addWithJSX('primary', () => (
    <Button primary title="Press me" onPress={_onPress} />
  ))
  .addWithJSX('secondary', () => (
    <Button secondary title="Press me" onPress={_onPress} />
  ))
  .addWithJSX('activity', () => (
    <Button activity title="Press me" onPress={_onPress} />
  ))
  .addWithJSX('children', () => (
    <Button color="red">
      <Price value={10} style={{ color: 'white' }} onPress={_onPress} />
    </Button>
  ))
  .addWithJSX('color', () => (
    <Button color="red" title="Press me" onPress={_onPress} />
  ))
  .addWithJSX('disabled', () => (
    <Button disabled title="Press me" />
  ))
  .addWithJSX('responsive', () => (
    <Button responsive title="Press me" onPress={_onPress} />
  ))
  .addWithJSX('rounded', () => (
    <Button rounded title="Press me" onPress={_onPress} />
  ))
  .addWithJSX('small', () => (
    <Button small title="Press me" onPress={_onPress} />
  ))
  .addWithJSX('⚡ onPress', () => (
    <Button onPress={action('Button.onPress()')} title="Press me" />
  ))
  .addWithJSX('style', () => (
    <Button title="Press me" style={styles.button} onPress={_onPress} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <Button
      secondary={boolean('secondary', false)}
      activity={boolean('activity', false)}
      color={color('color', undefined)}
      contained={boolean('contained', true)}
      disabled={boolean('disabled', false)}
      icon={text('icon', undefined)}
      onPress={action('Button.onPress()')}
      outlined={boolean('outlined', false)}
      primary={boolean('primary', false)}
      responsive={boolean('responsive', false)}
      rounded={boolean('rounded', false)}
      small={boolean('small', false)}
      title={text('title', undefined)}
      style={object('style', styles.button)}
    />
  ));


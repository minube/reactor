import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, color, object } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import { LayoutView, Price } from '../';
import Button from './Button';

const styles = {
  button: {
    paddingHorizontal: 10,
    backgroundColor: 'green',
  },
}
const _onPress = () => {};

storiesOf('✅ Button', module)
  .add('default', () => (
    <Button />
  ))
  .add('title', () => (
    <Button title="Press me" onPress={_onPress} />
  ))
  .add('icon', () => (
    <Button icon="closeContrast" onPress={_onPress} />
  ))
  .add('icon & title', () => (
    <Button icon="closeContrast" title="Press me" onPress={_onPress} />
  ))
  .add('contained (false)', () => (
    <Button contained={false} title="Press me" onPress={_onPress} />
  ))
  .add('outlined', () => (
    <Button outlined title="Press me" onPress={_onPress} />
  ))
  .add('activity', () => (
    <Button activity title="Press me" onPress={_onPress} />
  ))
  .add('children', () => (
    <Button>
      <Price headline level={6} color="white" value={19.95} symbol="$" onPress={_onPress} />
    </Button>
  ))
  .add('color', () => (
    <Button color="red" title="Press me" onPress={_onPress} />
  ))
  .add('color (COLOR.WHITE)', () => (
    <Button color={THEME.COLOR.WHITE} title="Press me" onPress={_onPress} />
  ))
  .add('disabled', () => (
    <Button disabled title="Press me" />
  ))
  .add('responsive', () => (
    <Button responsive title="Press me" onPress={_onPress} />
  ))
  .add('rounded', () => (
    <Button rounded title="Press me" onPress={_onPress} />
  ))
  .add('small', () => (
    <Button small title="Press me" onPress={_onPress} />
  ))
  .add('shadow', () => (
    <Button shadow title="Press me" onPress={_onPress} />
  ))
  .add('⚡ onPress', () => (
    <Button onPress={action('Button.onPress()')} title="Press me" />
  ))
  .add('style', () => (
    <Button title="Press me" style={styles.button} onPress={_onPress} />
  ))
  .add('🏀 Playground', () => (
    <Button
      activity={boolean('activity', false)}
      color={color('color', undefined)}
      contained={boolean('contained', true)}
      disabled={boolean('disabled', false)}
      icon={text('icon', undefined)}
      onPress={action('Button.onPress()')}
      outlined={boolean('outlined', false)}
      responsive={boolean('responsive', false)}
      rounded={boolean('rounded', false)}
      small={boolean('small', false)}
      shadow={boolean('shadow', false)}
      title={text('title', undefined)}
      style={object('style', styles.button)}
    />
  ));


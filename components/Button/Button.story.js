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
  .add('primary', () => (
    <Button primary title="Press me" onPress={_onPress} />
  ))
  .add('secondary', () => (
    <Button secondary title="Press me" onPress={_onPress} />
  ))
  .add('activity', () => (
    <Button activity title="Press me" onPress={_onPress} />
  ))
  .add('children', () => (
    <Button color="red">
      <Price value={10} style={{ color: 'white' }} onPress={_onPress} />
    </Button>
  ))
  .add('color', () => (
    <Button color="red" title="Press me" onPress={_onPress} />
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
  .add('⚡ onPress', () => (
    <Button onPress={action('Button.onPress()')} title="Press me" />
  ))
  .add('style', () => (
    <Button title="Press me" style={styles.button} onPress={_onPress} />
  ))
  .add('🏀 Playground', () => (
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


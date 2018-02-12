import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';
import { text, boolean, color } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import Button from './Button';

const { COLOR: { PRIMARY, ACCENT } } = THEME;

storiesOf('Button', module)
  .addWithJSX('with titles', () => (
    <WithNotes notes="Example of complementary notes">
      <Button onPress={action('Button.onPress()')} title="Default" />
      <Button color={PRIMARY} onPress={action('Button.onPress()')} title="Primary" />
      <Button color={ACCENT} onPress={action('Button.onPress()')} title="Accent" />
    </WithNotes>
  ))
  .addWithJSX('floating', () => (
    <Button color={PRIMARY} icon="search" onPress={action('Button.onPress()')} />
  ))
  .addWithJSX('with activity', () => (
    <WithNotes>
      <Button activity color={PRIMARY} title="with activity" onPress={action('Button.onPress()')} />
      <Button activity color={PRIMARY} icon="search" onPress={action('Button.onPress()')} />
    </WithNotes>
  ))
  .addWithJSX('disabled', () => (
    <WithNotes>
      <Button disabled color={PRIMARY} title="disabled" onPress={action('Button.onPress()')} />
      <Button disabled color={PRIMARY} icon="search" onPress={action('Button.onPress()')} />
    </WithNotes>
  ))
  .addWithJSX('custom style', () => (
    <WithNotes>
      <Button title="custom style" onPress={action('Button.onPress()')} style={{ backgroundColor: 'red' }} />
      <Button icon="search" onPress={action('Button.onPress()')} style={{ backgroundColor: 'red' }} />
    </WithNotes>
  ))
  .addWithJSX('🏀 Playground', () => (
    <Button
      activity={boolean('activity', false)}
      color={color('color', ACCENT)}
      disabled={boolean('disabled', false)}
      icon={text('icon', null)}
      onPress={action('Button.onPress()')}
      title={text('title', 'Touch me')}
    />
  ));


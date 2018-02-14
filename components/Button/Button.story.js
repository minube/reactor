import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';
import { text, boolean, color } from '@storybook/addon-knobs/react';

import Button from './Button';

storiesOf('✅ Button', module)
  .addWithJSX('with titles', () => (
    <WithNotes notes="Example of complementary notes">
      <Button onPress={action('Button.onPress()')} title="Default" />
      <Button primary onPress={action('Button.onPress()')} title="Primary" />
      <Button accent onPress={action('Button.onPress()')} title="Accent" />
    </WithNotes>
  ))
  .addWithJSX('floating', () => (
    <WithNotes notes="Example of complementary notes">
      <Button icon="search" />
      <Button primary icon="search" />
      <Button accent icon="search" />
    </WithNotes>
  ))
  .addWithJSX('flat', () => (
    <WithNotes>
      <Button flat title="Default" />
    </WithNotes>
  ))
  .addWithJSX('rounded', () => (
    <WithNotes>
      <Button rounded title="Default" />
      <Button rounded primary title="Primary" />
      <Button rounded accent title="Accent" />
    </WithNotes>
  ))
  .addWithJSX('small', () => (
    <WithNotes>
      <Button small title="Default" />
      <Button small primary title="Primary" />
      <Button small accent title="Accent" />
    </WithNotes>
  ))
  .addWithJSX('disabled', () => (
    <WithNotes>
      <Button disabled title="disabled" />
      <Button disabled icon="search" />
    </WithNotes>
  ))
  .addWithJSX('with activity', () => (
    <WithNotes>
      <Button activity title="with activity" />
      <Button activity icon="search" />
    </WithNotes>
  ))
  .addWithJSX('with icon', () => (
    <WithNotes>
      <Button icon="search" title="with activity" />
      <Button icon="search" />
    </WithNotes>
  ))
  .addWithJSX('💄 Custom Style', () => (
    <WithNotes>
      <Button title="custom style" style={{ backgroundColor: 'orange' }} />
      <Button icon="search" style={{ backgroundColor: 'orange' }} />
    </WithNotes>
  ))
  .addWithJSX('🏀 Playground', () => (
    <Button
      accent={boolean('accent', false)}
      activity={boolean('activity', false)}
      color={color('color', undefined)}
      disabled={boolean('disabled', false)}
      flat={boolean('flat', false)}
      icon={text('icon', null)}
      onPress={action('Button.onPress()')}
      primary={boolean('primary', false)}
      rounded={boolean('rounded', false)}
      small={boolean('small', false)}
      title={text('title', 'Touch me')}
    />
  ));


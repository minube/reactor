import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';
import { text, boolean, color } from '@storybook/addon-knobs/react';

import WebView from '../WebView';
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
      <Button icon="base" />
      <Button primary icon="base" />
      <Button accent icon="base" />
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
      <Button disabled icon="base" />
    </WithNotes>
  ))
  .addWithJSX('with activity', () => (
    <WithNotes>
      <Button activity title="with activity" />
      <Button activity icon="base" />
    </WithNotes>
  ))
  .addWithJSX('with icon', () => (
    <WithNotes>
      <Button icon="base" title="with activity" />
      <Button icon="base" />
    </WithNotes>
  ))
  .addWithJSX('with responsive', () => (
    <WithNotes>
      <Button responsive title="with activity" />
    </WithNotes>
  ))
  .addWithJSX('💄 Custom Style', () => (
    <WithNotes>
      <Button title="custom style" style={{ backgroundColor: 'orange' }} />
      <Button icon="base" style={{ backgroundColor: 'orange' }} />
    </WithNotes>
  ))
  .addWithJSX('🏀 Playground', () => (
    <WebView>
      <Button
        accent={boolean('accent', false)}
        activity={boolean('activity', false)}
        color={color('color', undefined)}
        disabled={boolean('disabled', false)}
        flat={boolean('flat', false)}
        icon={text('icon', null)}
        onPress={action('Button.onPress()')}
        primary={boolean('primary', false)}
        responsive={boolean('responsive', false)}
        rounded={boolean('rounded', false)}
        small={boolean('small', false)}
        title={text('title', 'Touch me')}
      />
    </WebView>
  ));


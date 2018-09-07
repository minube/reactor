import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { date, text, boolean, color, object } from '@storybook/addon-knobs/react';

import { LayoutView, Price } from '../';
import Calendar from './Calendar';


const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', width: '100%' };
const TODAY = new Date();
const TOMORROW = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 1);
const IN_7_DAYS = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 7);
const IN_10_DAYS = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 10);
const LOCALE = {
  dayNames: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
  months: [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Agosto',
  ],
};

storiesOf('☑️ Calendar', module)
  .addWithJSX('default', () => (
    <Calendar />
  ))
  .addWithJSX('locale', () => (
    <Calendar locale={LOCALE} />
  ))
  .addWithJSX('value (tomorrow)', () => (
    <Calendar value={TOMORROW} />
  ))
  .addWithJSX('disabledDates', () => (
    <Calendar disabledDates={[IN_7_DAYS, IN_10_DAYS]} />
  ))
  .addWithJSX('disabledPast', () => (
    <Calendar disabledPast />
  ))
  .addWithJSX('⚡ onChange', () => (
    <Calendar onChange={action('Calendar.onChange()')} />
  ))
  .addWithJSX('style', () => (
    <Calendar style={STYLE} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <Calendar
      // value={date('value', TOMORROW)}
      onChange={action('Calendar.onChange()')}
      style={object('style', STYLE)}
    />
  ));


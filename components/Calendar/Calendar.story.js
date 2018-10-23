import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { date, text, boolean, color, object } from '@storybook/addon-knobs/react';

import { LayoutView, Price } from '../';
import Calendar from './Calendar';

const STYLE = {
  borderWidth: 1,
  borderColor: 'lightgrey',
  minWidth: 500,
};
const TODAY = new Date();
const YESTERDAY = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 1);
const TOMORROW = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 1);
const DATES = [
  new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 3),
  new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 4),
  new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 5),
];

const LOCALE = {
  DAY_NAMES: ['lu', 'ma', 'mi', 'ju', 'vi', 'sá', 'do'],
  MONTHS: [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'agosto',
  ],
};

class CalendarHOC extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  _onSelect = (value) => {
    const { props: { onSelect } } = this;
    onSelect(value);
    this.setState({ value });
  }

  render() {
    const { _onSelect, props, state: { value } } = this;
    return <Calendar {...props} value={value} onSelect={_onSelect} />
  }
}

storiesOf('✅ Calendar', module)
  .addWithJSX('default', () => (
    <Calendar />
  ))
  .addWithJSX('busy', () => (
    <Calendar busy />
  ))
  .addWithJSX('locale', () => (
    <Calendar locale={LOCALE} />
  ))
  .addWithJSX('value', () => (
    <Calendar value={TOMORROW} />
  ))
  .addWithJSX('range', () => (
    <Calendar range value={[YESTERDAY, TOMORROW]} />
  ))
  .addWithJSX('availableDates', () => (
    <Calendar value={TOMORROW} availableDates={DATES} />
  ))
  .addWithJSX('disabledDates', () => (
    <Calendar disabledDates={DATES} />
  ))
  .addWithJSX('disabledPast', () => (
    <Calendar disabledPast />
  ))
  .addWithJSX('⚡ onSelect', () => (
    <CalendarHOC disabledDates={DATES} onSelect={action('Calendar.onSelect()')} />
  ))
  .addWithJSX('⚡ onSelect (range)', () => (
    <CalendarHOC disabledDates={DATES} range onSelect={action('Calendar.onSelect()')} />
  ))
  .addWithJSX('⚡ onChange', () => (
    <Calendar onChange={action('Calendar.onChange()')} />
  ))
  .addWithJSX('style', () => (
    <Calendar style={STYLE} />
  ))
  .addWithJSX('🏀 Playground', () => (
    <CalendarHOC
      busy={boolean('busy', false)}
      disabledPast={boolean('disabledPast', false)}
      locale={object('locale', LOCALE)}
      // value={date('value', TOMORROW)}
      onChange={action('Calendar.onChange()')}
      onSelect={action('Calendar.onSelect()')}
      range={boolean('range', false)}
      style={object('style', STYLE)}
    />
  ));


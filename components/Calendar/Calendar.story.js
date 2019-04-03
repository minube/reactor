import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  date, text, boolean, color, object,
} from '@storybook/addon-knobs/react';

import { LayoutView, Price } from '..';
import Calendar from './Calendar';

const STYLE = {
  borderWidth: 1,
  borderColor: 'lightgrey',
  minWidth: 500,
  backgroundColor: 'white',
};
const TODAY = new Date();
const YESTERDAY = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 1);
const TOMORROW = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 1);
const NEXT_MONTH = new Date(TODAY.getFullYear(), TODAY.getMonth() + 1);
const DATES = [
  new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 3),
  new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 4),
  new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 5),
];
const CAPTIONS = [
  { date: DATES[1], value: '$10' },
  { date: DATES[2], value: '$19' },
];

const LOCALE = {
  DAY_NAMES: ['lu', 'ma', 'mi', 'ju', 'vi', 'sá', 'do'],
  MONTHS: [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
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
    return <Calendar {...props} value={value} onSelect={_onSelect} />;
  }
}

storiesOf('✅ Calendar', module)
  .add('default', () => (
    <Calendar />
  ))
  .add('busy', () => (
    <Calendar busy />
  ))
  .add('locale', () => (
    <Calendar locale={LOCALE} />
  ))
  .add('date', () => (
    <Calendar date={NEXT_MONTH} />
  ))
  .add('value', () => (
    <Calendar value={TOMORROW} />
  ))
  .add('range', () => (
    <Calendar range value={[YESTERDAY, TOMORROW]} />
  ))
  .add('availableDates', () => (
    <Calendar value={TOMORROW} availableDates={DATES} />
  ))
  .add('disabledDates', () => (
    <Calendar disabledDates={DATES} />
  ))
  .add('disabledPast', () => (
    <Calendar disabledPast />
  ))
  .add('edges={false}', () => (
    <Calendar edges={false} />
  ))
  .add('captions', () => (
    <Calendar captions={CAPTIONS} />
  ))
  .add('⚡ onSelect', () => (
    <CalendarHOC disabledDates={DATES} onSelect={action('Calendar.onSelect()')} />
  ))
  .add('⚡ onSelect (range)', () => (
    <CalendarHOC disabledDates={DATES} range onSelect={action('Calendar.onSelect()')} />
  ))
  .add('⚡ onChange', () => (
    <Calendar onChange={action('Calendar.onChange()')} />
  ))
  .add('style', () => (
    <Calendar style={STYLE} />
  ))
  .add('🏀 Playground', () => (
    <CalendarHOC
      busy={boolean('busy', false)}
      captions={CAPTIONS}
      disabledPast={boolean('disabledPast', false)}
      locale={object('locale', LOCALE)}
      // value={date('value', TOMORROW)}
      onChange={action('Calendar.onChange()')}
      onSelect={action('Calendar.onSelect()')}
      range={boolean('range', false)}
      style={object('style', STYLE)}
    />
  ));

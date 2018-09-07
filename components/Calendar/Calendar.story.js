import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { date, text, boolean, color, object } from '@storybook/addon-knobs/react';

import { LayoutView, Price } from '../';
import Calendar from './Calendar';


const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', width: '100%' };
const TODAY = new Date();
const YESTERDAY = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 1);
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

storiesOf('☑️ Calendar', module)
  .addWithJSX('default', () => (
    <Calendar />
  ))
  .addWithJSX('busy', () => (
    <Calendar busy />
  ))
  .addWithJSX('locale', () => (
    <Calendar locale={LOCALE} />
  ))
  .addWithJSX('value (tomorrow)', () => (
    <Calendar value={TOMORROW} />
  ))
  .addWithJSX('range (3 days)', () => (
    <Calendar range value={[YESTERDAY, TOMORROW]} />
  ))
  .addWithJSX('disabledDates', () => (
    <Calendar disabledDates={[IN_7_DAYS, IN_10_DAYS]} />
  ))
  .addWithJSX('disabledPast', () => (
    <Calendar disabledPast />
  ))
  .addWithJSX('⚡ onSelect', () => (
    <CalendarHOC onSelect={action('Calendar.onSelect()')} />
  ))
  .addWithJSX('⚡ onSelect (range)', () => (
    <CalendarHOC range onSelect={action('Calendar.onSelect()')} />
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


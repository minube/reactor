import {
  arrayOf, bool, func, oneOfType, shape,
} from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import Activity from '../Activity';
import { DayNames, Selector, Week } from './components';
import styles from './Calendar.style';

const L10N_DEFAULT = {
  dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  months: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ],
};
const WEEKS = Array.from(Array(6).keys());

class Calendar extends PureComponent {
  static propTypes = {
    busy: bool,
    disabledDates: arrayOf(shape),
    disabledPast: bool,
    locale: shape({}),
    onChange: func,
    onSelect: func,
    range: bool,
    value: oneOfType([shape, arrayOf(shape)]),
  };

  static defaultProps = {
    busy: false,
    disabledDates: [],
    disabledPast: false,
    locale: L10N_DEFAULT,
    onChange() {},
    onSelect() {},
    range: false,
    value: undefined,
  };

  constructor(props) {
    super(props);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let { value = new Date() } = props;
    if (Array.isArray(value)) [value] = value;

    this.state = {
      month: value.getMonth(),
      year: value.getFullYear(),
      today,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { props } = this;
    let { value } = nextProps;

    if (value === props.value) return;
    if (Array.isArray(value)) [value] = value;
    this.setState({
      month: value.getMonth(),
      year: value.getFullYear(),
    });
  }

  _onPrevious = () => {
    const { _onChange } = this;
    let { state: { month, year } } = this;

    if (month === 0) {
      month = 12;
      year -= 1;
    }
    month -= 1;
    _onChange(month, year);
  }

  _onNext = () => {
    const { _onChange } = this;
    let { state: { month, year } } = this;

    if (month === 11) {
      month = -1;
      year += 1;
    }
    month += 1;
    _onChange(month, year);
  }

  _onChange = (month, year) => {
    const { props: { onChange } } = this;

    onChange(month, year);
    this.setState({ month, year });
  }

  render() {
    const {
      _onNext, _onPrevious,
      props: {
        busy, locale: { dayNames, months }, onSelect, ...props
      },
      state,
    } = this;

    const startDate = new Date(state.year, state.month);
    const weekNumber = Math.ceil((((startDate - new Date(state.year, 0, 1)) / 8.64e7)) / 7);

    return (
      <View style={[styles.container, props.style]}>
        { busy && <Activity size="large" style={styles.activity} /> }
        <View style={busy && styles.busy}>
          <Selector {...state} locale={months} onNext={_onNext} onPrevious={_onPrevious} />
          <DayNames locale={dayNames} />
          { WEEKS.map(weekIndex => (
            <Week
              {...props}
              {...state}
              key={weekNumber + weekIndex}
              firstDate={new Date(state.year, 0, 1 + ((weekNumber + weekIndex) - 1) * 7)}
              onSelect={!busy ? onSelect : undefined}
            />
          ))}
        </View>
      </View>
    );
  }
}

export default Calendar;

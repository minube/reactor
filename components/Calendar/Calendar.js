import {
  arrayOf, bool, date, func, oneOfType, shape,
} from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import { DayNames, Selector, Week } from './components';
import styles from './Calendar.style';

const L10N_DEFAULT = {
  dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  months: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ],
};

const WEEKS = 6;

class Calendar extends PureComponent {
  static propTypes = {
    disabledDates: arrayOf(date),
    disabledPast: bool,
    locale: shape({}),
    onChange: func,
    value: oneOfType([date, arrayOf(String)]),
  };

  static defaultProps = {
    disabledDates: [],
    disabledPast: false,
    locale: L10N_DEFAULT,
    onChange: undefined,
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
      selected: value,
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
      selected: value,
    });
  }

  _onPrevious = () => {
    let { state: { month, year } } = this;

    if (month === 0) {
      month = 12;
      year -= 1;
    }
    month -= 1;

    this.setState({ month, year });
  }

  _onNext = () => {
    let { state: { month, year } } = this;

    if (month === 11) {
      month = -1;
      year += 1;
    }
    month += 1;
    this.setState({ month, year });
  }

  _onPress = (selected) => {
    const { props: { onChange } } = this;

    if (onChange) onChange(selected);
    this.setState({ selected });
  }

  render() {
    const {
      _onNext, _onPress, _onPrevious,
      props: {
        locale: { dayNames, months }, onChange, ...inherit
      },
      state,
    } = this;

    const startDate = new Date(state.year, state.month);
    const weekNumber = Math.ceil((((startDate - new Date(state.year, 0, 1)) / 8.64e7)) / 7);
    // const dayStart = startDate.getUTCDay();
    // const daysMonth = new Date(year, month + 1, 0).getDate();

    return (
      <View style={[styles.container, inherit.style]}>
        <Selector {...state} locale={months} onNext={_onNext} onPrevious={_onPrevious} />
        <DayNames locale={dayNames} />
        { [...Array(WEEKS)].map((week, index) => (
          <Week
            {...state}
            {...inherit}
            key={index}
            startDate={new Date(state.year, 0, 1 + ((weekNumber + index) - 1) * 7)}
            onPress={_onPress}
          />
        ))}
      </View>
    );
  }
}

export default Calendar;

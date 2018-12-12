import {
  arrayOf, bool, func, oneOfType, shape,
} from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import { ENV } from '../../common';
import Activity from '../Activity';
import { DayNames, Selector, Week } from './components';
import { decomposeDate, LOCALE } from './modules';
import styles from './Calendar.style';

const VISIBLE_WEEKS = Array.from(Array(6).keys());

class Calendar extends PureComponent {
  static propTypes = {
    availableDates: arrayOf(shape()),
    busy: bool,
    captions: arrayOf(shape()),
    disabledDates: arrayOf(shape()),
    disabledPast: bool,
    locale: shape(),
    onChange: func,
    onSelect: func,
    range: bool,
    value: oneOfType([shape(), arrayOf(shape())]),
  };

  static defaultProps = {
    availableDates: undefined,
    busy: false,
    captions: undefined,
    disabledDates: undefined,
    disabledPast: false,
    locale: LOCALE,
    onChange() {},
    onSelect() {},
    range: false,
    value: undefined,
  };

  constructor(props) {
    super(props);

    const today = !ENV.IS_TEST ? new Date() : new Date(1980, 3, 10);
    today.setHours(0, 0, 0, 0);

    this.state = {
      today,
      ...decomposeDate(props.value || today),
    };
  }

  componentWillReceiveProps({ value }) {
    const { props } = this;
    if (value && value !== props.value) this.setState({ ...decomposeDate(value) });
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
        busy, locale: { DAY_NAMES, MONTHS }, onSelect, ...props
      },
      state,
    } = this;

    const startDate = new Date(state.year, state.month);
    const weekNumber = Math.ceil((((startDate - new Date(state.year, 0, 1)) / 8.64e7)) / 7);

    return (
      <View style={[styles.container, props.style]}>
        { busy && <Activity size="large" style={styles.activity} /> }
        <View style={busy && styles.busy}>
          <Selector {...state} locale={MONTHS} onNext={_onNext} onPrevious={_onPrevious} />
          <DayNames locale={DAY_NAMES} />
          { VISIBLE_WEEKS.map(weekIndex => (
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

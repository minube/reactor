import {
  arrayOf, bool, func, oneOfType, shape, string,
} from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import { LAYOUT } from '../../common';
import Calendar from '../Calendar';
import { LOCALE } from '../Calendar/modules';
import Icon from '../Icon';
import { InputHint, InputLabel } from '../Input';
import Motion from '../Motion';
import Text from '../Text';
import Touchable from '../Touchable';
import styles from './InputDate.style';
import verboseValue from './modules/verboseValue';

class InputDate extends PureComponent {
  static propTypes = {
    disabled: bool,
    error: oneOfType([bool, string]),
    hint: string,
    label: string,
    locale: shape(),
    onChange: func,
    range: bool,
    value: oneOfType([shape(), arrayOf(shape())]),
  };

  static defaultProps = {
    disabled: false,
    error: undefined,
    hint: undefined,
    label: undefined,
    locale: LOCALE,
    onChange() {},
    range: false,
    value: undefined,
  };

  constructor(props) {
    super(props);
    this.state = {
      active: false,
      calendar: props.value,
    };
  }

  componentWillReceiveProps({ value }) {
    this.setState({ calendar: value });
  }

  _onSelect = (value) => {
    const { _onToggle, props: { onChange, range } } = this;

    this.setState({ calendar: value });
    if (!range || (value[0] && value[1])) {
      if (!range) _onToggle();
      onChange(value);
    }
  }

  _onToggle = () => {
    const { state: { active } } = this;

    this.setState({ active: !active });
  }

  render() {
    const {
      _onSelect, _onToggle,
      props: {
        disabled, error, hint, label, locale, onChange, range, value, ...inherit
      },
      state: { active, calendar },
    } = this;
    const { VIEWPORT: { REGULAR, LARGE } } = LAYOUT;

    return (
      <View style={[styles.container, active && styles.active, inherit.style]}>
        { label && <InputLabel>{label}</InputLabel> }

        <Touchable onPress={!disabled ? _onToggle : undefined}>
          <View
            style={[
              styles.border,
              disabled && styles.disabled,
              !disabled && error && styles.error,
              active && styles.focus,
            ]}
          >
            <Text input lighten={disabled} numberOfLines={1} style={styles.value}>
              {verboseValue(value, locale)}
            </Text>

            { !disabled && !error && (
              <Motion
                style={[styles.button, label && styles.withLabel]}
                timeline={[{ property: 'rotate', value: active ? '180deg' : '0deg' }]}
              >
                <Icon value="navDown" style={[styles.icon, styles.iconNav]} />
              </Motion>
            )}

            { !disabled && error && <Icon value="error" style={styles.icon} /> }
          </View>
        </Touchable>

        { hint && <InputHint>{hint}</InputHint> }

        { active && (
          <Calendar
            box={false}
            disabledPast
            expanded={REGULAR || LARGE}
            locale={locale}
            range={range}
            onSelect={_onSelect}
            style={[styles.calendar, label && styles.withLabel]}
            value={calendar}
          />
        )}
      </View>
    );
  }
}

export default InputDate;

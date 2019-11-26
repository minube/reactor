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
    placeholder: string,
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
    placeholder: undefined,
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

  _onToggle = (event) => {
    const { state: { active }, _onToggleOutside } = this;
    if (event) this.touchable = event.currentTarget.parentElement;

    if (!active) document.addEventListener('click', _onToggleOutside, false);
    else document.removeEventListener('click', _onToggleOutside, false);

    this.setState({ active: !active });
  }

  _onToggleOutside = (e) => {
    const { _onToggle } = this;
    if (this.touchable.contains(e.target)) return;
    _onToggle();
  }

  render() {
    const {
      _onSelect, _onToggle,
      props: {
        disabled, error, hint, label, locale, onChange, placeholder, range, value, ...inherit
      },
      state: { active, calendar },
    } = this;
    const { VIEWPORT: { REGULAR, LARGE } } = LAYOUT;

    return (
      <View style={[styles.container, active && styles.active, inherit.style]}>
        { label && <InputLabel>{label}</InputLabel> }

        <Touchable onPress={!disabled ? event => _onToggle(event) : undefined}>
          <View
            style={[
              styles.border,
              disabled && styles.disabled,
              !disabled && error && styles.error,
              active && styles.focus,
            ]}
          >
            <Text input lighten={disabled || !value} numberOfLines={1} style={styles.value}>
              {verboseValue(value, locale) || placeholder}
            </Text>

            { !disabled && !error && (
              <Motion timeline={[{ property: 'rotate', value: active ? '180deg' : '0deg' }]}>
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
            disabledPast={inherit.disabledPast}
            edges={inherit.edges}
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

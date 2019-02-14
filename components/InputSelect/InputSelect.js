import {
  arrayOf, bool, func, number, shape, string,
} from 'prop-types';
import React, { createRef, PureComponent } from 'react';
import { ScrollView, View } from 'react-native';

import Button from '../Button';
import { InputHint, InputLabel } from '../Input';
import Motion from '../Motion';
import { INPUT_HEIGHT } from '../Input/Input.style';
import Template from './InputSelectTemplate';
import { TEMPLATE_HEIGHT } from './InputSelectTemplate.style';
import styles from './InputSelect.style';

class InputSelect extends PureComponent {
  static propTypes = {
    dataSource: arrayOf(shape({})),
    disabled: bool,
    error: string,
    hint: string,
    label: string,
    onChange: func,
    ItemTemplate: func,
    value: number,
  };

  static defaultProps = {
    dataSource: [],
    disabled: false,
    error: undefined,
    hint: undefined,
    label: undefined,
    onChange: undefined,
    ItemTemplate: Template,
    value: 0,
  };

  constructor(props) {
    super(props);
    this.scrollview = createRef();
    this.state = {
      active: false,
    };
  }

  _onToggleDataSource = () => {
    const { scrollview, props: { dataSource, value = 0 }, state: { active } } = this;

    this.setState({ active: !active }, () => {
      if (!active) {
        const height = dataSource[0].caption ? TEMPLATE_HEIGHT : INPUT_HEIGHT;
        scrollview.current.scrollTo({ y: (value - 2) * height, animated: false });
      }
    });
  }

  _onItem = (index) => {
    const { _onToggleDataSource, props: { onChange } } = this;

    _onToggleDataSource();
    if (onChange) onChange(index);
  }

  render() {
    const {
      _onToggleDataSource, _onItem,
      props: {
        dataSource = [], disabled, error, hint, label, onChange, ItemTemplate, value = 0, ...inherit
      },
      state: { active },
    } = this;
    const hasDataSource = dataSource.length > 1;
    const event = !disabled && hasDataSource ? _onToggleDataSource : undefined;
    const caption = hasDataSource && dataSource[0].caption;

    return (
      <View style={[styles.container, active && styles.active, inherit.style]}>
        { label && (
          <InputLabel error={error}>
            {label}
          </InputLabel>)}

        { !disabled && hasDataSource && (
          <Motion
            style={[styles.button, caption && styles.buttonWithCaption, label && styles.withLabel]}
            timeline={[{ property: 'rotate', value: active ? '180deg' : '0deg' }]}
          >
            <Button contained={false} icon="expand" onPress={event} />
          </Motion>)}

        <View style={[styles.border, !disabled && error && styles.error, disabled && styles.disabled]}>
          <ItemTemplate {...dataSource[value]} disabled={disabled} onPress={event} selected />
        </View>
        { hint && (
          <InputHint>
            {hint}
          </InputHint>)}

        <ScrollView
          ref={this.scrollview}
          style={[
            styles.border,
            styles.dataSource,
            !active && styles.dataSourceHidden,
            caption && styles.dataSourceWithCaption,
            label && styles.withLabel,
          ]}
        >
          { dataSource.map((item, index) => (
            <ItemTemplate key={item.title} {...item} onPress={() => _onItem(index)} selected={index === value} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default InputSelect;

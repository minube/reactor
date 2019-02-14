import {
  arrayOf, bool, func, number, oneOfType, shape, string,
} from 'prop-types';
import React, { createRef, PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import { Picker, ScrollView, View } from 'react-native';

import { LAYOUT } from '../../common';
import Button from '../Button';
import { InputHint, InputLabel } from '../Input';
import Motion from '../Motion';
import { INPUT_HEIGHT } from '../Input/Input.style';
import Template from './InputSelectTemplate';
import { TEMPLATE_HEIGHT } from './InputSelectTemplate.style';
import styles from './InputSelect.style';

class InputSelect extends PureComponent {
  static propTypes = {
    dataSource: arrayOf(oneOfType([string, shape({})])),
    disabled: bool,
    error: string,
    hint: string,
    label: string,
    onChange: func,
    ItemTemplate: func,
    value: oneOfType([string, number]),
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
    const { dataSource: [firstValue] = [] } = props;

    this.component = createRef();
    this.scrollview = createRef();
    this.state = { active: false, regular: true, schema: typeof firstValue === 'object' };
  }

  _onToggleDataSource = () => {
    const {
      component, scrollview, props: { dataSource, value = 0 }, state: { active },
    } = this;
    const { VIEWPORT: { H } } = LAYOUT;
    const { y } = findDOMNode(component.current).getBoundingClientRect(); // @TODO

    this.setState({ active: !active, regular: y < (H / 2) }, () => {
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
      state: { active, regular, schema },
    } = this;
    const hasDataSource = dataSource.length > 1;
    const event = !disabled && hasDataSource ? _onToggleDataSource : undefined;
    const caption = hasDataSource && dataSource[0].caption;

    return (
      <View ref={this.component} style={[styles.container, active && styles.active, inherit.style]}>
        { label && (
          <InputLabel error={error}>
            {label}
          </InputLabel>)}

        { schema && hasDataSource && !disabled && (
          <Motion
            style={[styles.button, caption && styles.buttonWithCaption, label && styles.withLabel]}
            timeline={[{ property: 'rotate', value: active ? '180deg' : '0deg' }]}
          >
            <Button contained={false} icon="expand" onPress={event} />
          </Motion>)}

        <View style={[styles.border, !disabled && error && styles.error, disabled && styles.disabled]}>
          { schema
            ? <ItemTemplate {...dataSource[value]} disabled={disabled} onPress={event} selected />
            : (
              <Picker
                mode="dropdown"
                {...inherit}
                enabled={!disabled}
                onValueChange={onChange}
                selectedValue={value}
                style={[styles.picker, disabled && styles.pickerDisabled]}
              >
                { dataSource.map(item => <Picker.Item key={item} label={item} value={item} />)}
              </Picker>)}
        </View>

        { hint && (
          <InputHint>
            {hint}
          </InputHint>)}

        { schema && (
          <ScrollView
            ref={this.scrollview}
            style={[
              styles.border,
              styles.dataSource,
              !active && styles.dataSourceHidden,
              !regular && styles.dataSourceBottom,
              caption && styles.dataSourceWithCaption,
              label && styles.withLabel,
            ]}
          >
            { dataSource.map((item, index) => (
              <ItemTemplate key={item.title} {...item} onPress={() => _onItem(index)} selected={index === value} />
            ))}
          </ScrollView>)}
      </View>
    );
  }
}

export default InputSelect;

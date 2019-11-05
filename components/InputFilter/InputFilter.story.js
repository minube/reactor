import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  text, boolean, color, object,
} from '@storybook/addon-knobs/react';
import InputFilter from './InputFilter';

const DATA = [
  {name: 'Aba Travel', id: 1, subtitle: 'Comunidad de Madrid, España'},
  {name: 'Abc4events', id: 2, subtitle: 'Comunidad de Madrid, España'},
  {name: 'Abrera Madrid', id: 3, subtitle: 'Comunidad de Madrid, España'},
  {name: 'Abrera', id: 4, subtitle: 'Comunidad de Madrid, España'},
];

const STYLE = { padding: 10, width: 256 };

_onChange = () => DATA;
_onClickItem = () => {};

class HOC extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: props.data };
  }

  _onChange = () => {
    const { onChange } = this.props;
    this.setState({ data: onChange() });
  }

  render() {
    const { _onChange, props, state: { data } } = this;
    return <InputFilter {...props} dataSource={data} onChange={_onChange} />;
  }
}

storiesOf('✅ InputFilter', module)
  .add('default', () => (
    <InputFilter />
  ))
  .add('color', () => (
    <InputFilter color="green" />
  ))
  .add('dataSource', () => (
    <InputFilter dataSource={DATA} />
  ))
  .add('disabled', () => (
    <InputFilter disabled />
  ))
  .add('hint', () => (
    <InputFilter hint="Optional field" />
  ))
  .add('label', () => (
    <InputFilter label="InputFilter" />
  ))
  .add('placeholder', () => (
    <InputFilter placeholder={"Looking for..."} />
  ))
  .add('value', () => (
    <InputFilter value="Madrid" />
  ))
  .add('onChange', () => (
    <HOC onChange={_onChange} data={DATA} />
  ))
  .add('onClickItem', () => (
    <HOC onChange={_onChange} onClickItem={_onClickItem} dataSource={this.data} />
  ))
  .add('🏀 Playground', () => (
    <InputFilter
      color={color('color', undefined)}
      hint={text('hint', 'This is a hint')}
      disabled={boolean('disabled', false)}
      label={text('label', 'This is a label')}
      value={text('value', 'Madrid')}
      onChange={action('InputFilter.onChange()')}
      style={object('style', STYLE)}
    />
  ));

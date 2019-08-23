import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  text, boolean, color, object,
} from '@storybook/addon-knobs/react';
import InputSearcher from './InputSearcher';

const DATA = [
  {name: 'Madrid', id: 23},
  {name: 'Madrid Snowzone', id: 12},
  {name: 'Comunidad Madrid', id: 65},
  {name: 'San Lorenzo del escorial', id: 76},
  {name: 'Alcalá de Henares', id: 132},
  {name: 'Aranjuez', id: 73},
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
    console.log(this.state)
    const { _onChange, props, state: { data } } = this;
    return <InputSearcher {...props} dataSource={data} onChange={_onChange} />;
  }
}

storiesOf('✅ InputSearcher', module)
  .add('default', () => (
    <InputSearcher />
  ))
  .add('color', () => (
    <InputSearcher color="green" />
  ))
  .add('dataSource', () => (
    <InputSearcher dataSource={DATA} />
  ))
  .add('disabled', () => (
    <InputSearcher disabled />
  ))
  .add('hint', () => (
    <InputSearcher hint="Optional field" />
  ))
  .add('label', () => (
    <InputSearcher label="InputSearcher" />
  ))
  .add('placeholder', () => (
    <InputSearcher placeholder={"Looking for..."} />
  ))
  .add('value', () => (
    <InputSearcher value="Madrid" />
  ))
  .add('onChange', () => (
    <HOC onChange={_onChange} dataSource={this.data} />
  ))
  .add('onClickItem', () => (
    <HOC onChange={_onChange} onClickItem={_onClickItem} dataSource={this.data} />
  ))
  .add('🏀 Playground', () => (
    <InputSearcher
      color={color('color', undefined)}
      hint={text('hint', 'This is a hint')}
      disabled={boolean('disabled', false)}
      label={text('label', 'This is a label')}
      value={text('value', 'Madrid')}
      onChange={action('InputSearcher.onChange()')}
      style={object('style', STYLE)}
    />
  ));

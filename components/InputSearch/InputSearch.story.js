import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  text, boolean, color, object,
} from '@storybook/addon-knobs/react';
import InputSearch from './InputSearch';

const DATA = [
  {name: 'Madrid', id: 23, subtitle: 'Comunidad de Madrid, España'},
  {name: 'Madrid Snowzone', id: 12, subtitle: 'Comunidad de Madrid, España'},
  {name: 'Comunidad Madrid', id: 65, subtitle: 'Comunidad de Madrid, España'},
  {name: 'San Lorenzo del escorial', id: 76, subtitle: 'Comunidad de Madrid, España'},
  {name: 'Alcalá de Henares', id: 132, subtitle: 'Comunidad de Madrid, España'},
  {name: 'Aranjuez', id: 73, subtitle: 'Comunidad de Madrid, España'},
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
    return <InputSearch {...props} dataSource={data} onChange={_onChange} />;
  }
}

storiesOf('✅ InputSearch', module)
  .add('default', () => (
    <InputSearch />
  ))
  .add('color', () => (
    <InputSearch color="green" />
  ))
  .add('dataSource', () => (
    <InputSearch dataSource={DATA} />
  ))
  .add('disabled', () => (
    <InputSearch disabled />
  ))
  .add('hint', () => (
    <InputSearch hint="Optional field" />
  ))
  .add('label', () => (
    <InputSearch label="InputSearch" />
  ))
  .add('placeholder', () => (
    <InputSearch placeholder={"Looking for..."} />
  ))
  .add('value', () => (
    <InputSearch value="Madrid" />
  ))
  .add('onChange', () => (
    <HOC onChange={_onChange} dataSource={this.data} />
  ))
  .add('onClickItem', () => (
    <HOC onChange={_onChange} onClickItem={_onClickItem} dataSource={this.data} />
  ))
  .add('🏀 Playground', () => (
    <InputSearch
      color={color('color', undefined)}
      hint={text('hint', 'This is a hint')}
      disabled={boolean('disabled', false)}
      label={text('label', 'This is a label')}
      value={text('value', 'Madrid')}
      onChange={action('InputSearch.onChange()')}
      style={object('style', STYLE)}
    />
  ));

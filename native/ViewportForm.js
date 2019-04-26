import { bool, func } from 'prop-types';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import { Form, Text, Viewport } from '../components';
import { ATTRIBUTES } from '../components/Form/Form.mocks';
import Header from './Header';
import styles from './Viewport.style';

export default class App extends Component {
  static propTypes = {
    visible: bool,
    onBack: func.isRequired,
  };

  static defaultProps = {
    visible: false,
  };

  state = {
    valid: undefined,
    value: undefined,
  }

  render() {
    const { props: { onBack, visible }, state } = this;

    return (
      <Viewport onBack={onBack} scroll={false} style={styles.container} visible={visible}>
        <Header title="Form" onBack={onBack}>
          <Text>{state.valid ? 'valid' : 'invalid' }</Text>
        </Header>
        <ScrollView contentContainerStyle={styles.content}>
          <Form
            attributes={ATTRIBUTES}
            onChange={value => this.setState({ value })}
            onValid={valid => this.setState({ valid })}
            value={state.value}
          />
        </ScrollView>
      </Viewport>
    );
  }
}

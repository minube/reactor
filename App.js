import React, { Component, Fragment } from 'react';
import { View } from 'react-native';

import { Button, Text } from './components';
import { Provider } from './context';

import PKG from './package.json';
import { ViewportEmpty, ViewportForm, ViewportKitchensink } from './native';
import styles from './App.style';

if (typeof global.self === 'undefined') global.self = global;

const DICTIONARY = {
  'es-ES': {
    GREETINGS: 'Hola Mundo...',
  },

  'en-EN': {
    GREETINGS: 'Hello World...',
  },
};

export default class App extends Component {
  state = {
    form: false,
    kitchensink: false,
  }

  onViewport = (key, value) => this.setState({ [key]: value })

  render() {
    const { onViewport, state } = this;
    console.log(Object.values(state));

    return (
      <Provider dictionary={DICTIONARY} language="en-EN">
        <Fragment>
          <ViewportEmpty
            backward={false}
            visible
            title={`${PKG.name} v${PKG.version}`}
          >
            <Text headline level={5}>Examples</Text>
            <Text caption lighten>Here you have some basic components examples.</Text>
            <View style={styles.buttons}>
              <Button outlined title="<Form>" onPress={() => onViewport('form', true)} />
              <Button outlined title="<Kitchensink>" onPress={() => onViewport('kitchensink', true)} />
            </View>
          </ViewportEmpty>

          <ViewportForm onBack={() => onViewport('form', false)} visible={state.form} />
          <ViewportKitchensink onBack={() => onViewport('kitchensink', false)} visible={state.kitchensink} />
        </Fragment>
      </Provider>
    );
  }
}

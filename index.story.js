import React from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, color, object } from '@storybook/addon-knobs/react';

import { STYLE, THEME } from './common';
import {
  Button, Dialog, Text, Image,
} from './components';
import { Consumer, Provider } from './context';

const { COLOR, OFFSET, UNIT } = THEME;

const styles = StyleSheet.create({
  dialog: {
    width: '100%',
    padding: 0,
  },

  dialogContainer: {
    justifyContent: 'flex-start',
  },

  content: {
    ...STYLE.ROW,
    marginTop: OFFSET,
  },

  texts: {
    flex: 1,
    marginHorizontal: UNIT,
  },

  icon: {
    height: UNIT * 4,
    width: UNIT * 4,
  },
});

storiesOf('🏀 Playground', module)
  .addWithJSX('Dialog: download app', () => (
    <Dialog
      background={false}
      scroll={false}
      style={styles.dialog}
      styleContainer={styles.dialogContainer}
      visible={boolean('visible', true)}
    >
      <View style={styles.content}>
        <Image
          source={{ uri: 'http://soyjavi.com/assets/images/soyjavi.jpg' }}
          style={styles.icon}
        />
        <View style={styles.texts}>
          <Text small>{text('title', 'Exprime al maximo tu viaje')}</Text>
          <Text tiny lighten>{text('subtitle', 'Con la app de minube')}</Text>
        </View>
        <Button
          small
          color={color('color', COLOR.TEXT)}
          onPress={action('Button.onPress()')}
          outlined
          title={text('button', 'Descargar')}
        />
      </View>
    </Dialog>
  ))
  .addWithJSX('Amplitude v3', () => (
    <Provider>
      <Consumer>
        { ({ logEvent }) => (
            <Button
              title="Press me"
              onPress={() => logEvent({ type: 'reactor:demo', hello: 'world' })}
            />
        )}
        </Consumer>
    </Provider>
  ));


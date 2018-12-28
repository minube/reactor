import React from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, color, object } from '@storybook/addon-knobs/react';

import { LAYOUT, THEME } from './common';
import {
  Button, Dialog, Text, Image,
} from './components';
import { ConsumerAmplitude, ProviderAmplitude } from './context';

const styles = StyleSheet.create({
  dialog: {
    width: '100%',
    padding: 0,
  },

  dialogContainer: {
    justifyContent: 'flex-start',
  },

  content: {
    ...LAYOUT.STYLE.ROW,
    marginTop: THEME.OFFSET,
  },

  texts: {
    flex: 1,
    marginHorizontal: THEME.UNIT,
  },

  icon: {
    height: THEME.UNIT * 4,
    width: THEME.UNIT * 4,
  },
});


storiesOf('🏀 Playground', module)
  .add('Dialog: download app', () => (
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
          <Text subtitle level={3}>{text('title', 'Exprime al maximo tu viaje')}</Text>
          <Text level={3} lighten>{text('subtitle', 'Con la app de minube')}</Text>
        </View>
        <Button
          small
          color={color('color', THEME.COLOR.TEXT)}
          onPress={action('Button.onPress()')}
          outlined
          title={text('button', 'Descargar')}
        />
      </View>
    </Dialog>
  ))
  .add('Amplitude v3', () => (
    <ProviderAmplitude>
      <ConsumerAmplitude>
        { ({ logEvent }) => (
            <Button
              title="Press me"
              onPress={() => logEvent({ type: 'reactor:demo', hello: 'world' })}
            />
        )}
        </ConsumerAmplitude>
    </ProviderAmplitude>
  ));


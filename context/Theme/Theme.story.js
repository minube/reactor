import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, color, object } from '@storybook/addon-knobs/react';

import { Button, Text } from '../../components';
import { ConsumerTheme, ProviderTheme } from './Theme';


const style = {
  COLOR: { PRIMARY: 'red' },
  FONT: { FAMILY: 'Courier' },
};

class ThemeHOC extends Component {
  state = {
    night: false,
  };

  render() {
    const { _onChange, state: { night } } = this;

    console.log('>>>>>', this.state);

    return (
      <ProviderTheme style={night ? style : undefined}>
        <Fragment>
          <Button primary title="Switch Mode" onPress={() => this.setState({ night: !night })} />
          <Text>
            Hello World
          </Text>
        </Fragment>
      </ProviderTheme>
    );
  }
}


storiesOf('☑️ contextTheme', module)
  .addWithJSX('default', () => (
    <ThemeHOC />
  ))
  // .addWithJSX('style', () => (
  //   <ProviderTheme title="Press me" style={styles.button} onPress={_onPress} />
  // ))
  // .addWithJSX('🏀 Playground', () => (
  //   <ProviderTheme
  //     secondary={boolean('secondary', false)}
  //     activity={boolean('activity', false)}
  //     color={color('color', undefined)}
  //     contained={boolean('contained', true)}
  //     disabled={boolean('disabled', false)}
  //     icon={text('icon', undefined)}
  //     onPress={action('Button.onPress()')}
  //     outlined={boolean('outlined', false)}
  //     primary={boolean('primary', false)}
  //     responsive={boolean('responsive', false)}
  //     rounded={boolean('rounded', false)}
  //     small={boolean('small', false)}
  //     title={text('title', undefined)}
  //     style={object('style', styles.button)}
  //   />
  // ));


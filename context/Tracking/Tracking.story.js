import React, { PureComponent, Fragment } from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  text, boolean, color, object,
} from '@storybook/addon-knobs/react';

import { Button, Text } from '../../components';
import { ConsumerTracking, ProviderTracking } from './Tracking';

class HOC extends PureComponent {
  state = {
    signup: undefined,
  }

  render() {
    const { props, state } = this;
    const signup = props.signup === false && !state.signup;

    return (
      <ProviderTracking {...props} signup={!signup}>
        <ConsumerTracking>
          { ({ logEvent, fingerprint, session }) => (
            <View>
              { fingerprint && (
              <Fragment>
                <Text subtitle level={3}>Fingerprint</Text>
                <Text level={3}>{JSON.stringify(fingerprint)}</Text>
              </Fragment>
              )}

              { session && (
              <Fragment>
                <Text subtitle level={3}>Session</Text>
                <Text level={3}>{JSON.stringify(session)}</Text>
              </Fragment>
              )}

              { session && (
              <Button
                title="event"
                onPress={() => logEvent({ type: 'reactor:demo', hello: 'world' })}
                style={{ marginTop: 10 }}
              />
              )}


              { signup && (
              <Button title="signup" onPress={() => this.setState({ signup: true })} style={{ marginTop: 10 }} />
              )}

            </View>
          )}
        </ConsumerTracking>
      </ProviderTracking>
    );
  }
}

storiesOf('✅ ContextTracking', module)
  .add('default', () => (
    <HOC />
  ))
  .add('signup={false}', () => (
    <HOC signup={false} />
  ));

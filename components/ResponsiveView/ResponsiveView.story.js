import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';

import ResponsiveView, { ResponsiveStyle } from './ResponsiveView';
import Text from '../Text';

storiesOf('✅ ResponsiveView', module)
  .addWithJSX('default', () => (
    <ResponsiveView />
  ))
  .addWithJSX('⚡ onLayout', () => (
    <ResponsiveView onLayout={action('ResponsiveView.onLayout()')} />
  ))
  .addWithJSX('🏀 Playground', withState({ timestamp: new Date() }, store => (
    <ResponsiveView {...store.state} onLayout={() => store.set({ timestamp: new Date() })}>
      <Text bold large>VIEWPORT</Text>

      <ResponsiveStyle>
        {({ viewport }) =>
          <View>
            <Text small>{`${viewport.W} x ${viewport.H}`}</Text>
            { viewport.PORTRAIT && <Text tiny>PORTRAIT</Text> }
            { viewport.LANDSCAPE && <Text tiny>LANDSCAPE</Text> }
            { viewport.IPHONEX && <Text tiny>IPHONEX</Text> }
            { viewport.TINY && <Text tiny>TINY</Text> }
            { viewport.PHONE && <Text tiny>PHONE</Text> }
            { viewport.TABLET && <Text tiny>TABLET</Text> }
            { viewport.SMALL && <Text tiny>SMALL</Text> }
            { viewport.REGULAR && <Text tiny>REGULAR</Text> }
            { viewport.LARGE && <Text tiny>LARGE</Text> }
          </View>
        }
      </ResponsiveStyle>
    </ResponsiveView>
  )));


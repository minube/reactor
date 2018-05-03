import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';

import LayoutView, { LayoutStyle } from './Layout';
import Text from '../Text';

storiesOf('✅ LayoutView', module)
  .addWithJSX('default', () => (
    <LayoutView />
  ))
  .addWithJSX('⚡ onLayout', () => (
    <LayoutView onLayout={action('LayoutView.onLayout()')} />
  ))
  .addWithJSX('🏀 Playground', withState({ timestamp: new Date() }, store => (
    <LayoutView {...store.state} onLayout={() => store.set({ timestamp: new Date() })}>
      <Text bold large>VIEWPORT</Text>

      <LayoutStyle>
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
      </LayoutStyle>
    </LayoutView>
  )));


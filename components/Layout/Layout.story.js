import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';

import { LAYOUT } from '../../common';
import LayoutView, { LayoutConsumer } from './Layout';
import Text from '../Text';

storiesOf('🛠 Layout', module)
  .addWithJSX('default', () => (
    <LayoutView />
  ))
  .addWithJSX('⚡ onLayout (WEB)', () => (
    <LayoutView onLayout={action('LayoutView.onLayout()')} />
  ))
  .addWithJSX('🛠 <LayoutConsumer>', () => (
    <LayoutView>
      <Text bold large>{'<LayoutConsumer />'}</Text>
      <LayoutConsumer>
        { ({ viewport }) =>
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
      </LayoutConsumer>
    </LayoutView>
  ))
  .addWithJSX('common/LAYOUT', withState({ timestamp: new Date() }, store => (
    <LayoutView {...store.state} onLayout={() => store.set({ timestamp: new Date() })}>
      <Text bold large>common/LAYOUT</Text>
      <Text small>{`${LAYOUT.VIEWPORT.W} x ${LAYOUT.VIEWPORT.H}`}</Text>
      { LAYOUT.VIEWPORT.PORTRAIT && <Text tiny>PORTRAIT</Text> }
      { LAYOUT.VIEWPORT.LANDSCAPE && <Text tiny>LANDSCAPE</Text> }
      { LAYOUT.VIEWPORT.IPHONEX && <Text tiny>IPHONEX</Text> }
      { LAYOUT.VIEWPORT.TINY && <Text tiny>TINY</Text> }
      { LAYOUT.VIEWPORT.PHONE && <Text tiny>PHONE</Text> }
      { LAYOUT.VIEWPORT.TABLET && <Text tiny>TABLET</Text> }
      { LAYOUT.VIEWPORT.SMALL && <Text tiny>SMALL</Text> }
      { LAYOUT.VIEWPORT.REGULAR && <Text tiny>REGULAR</Text> }
      { LAYOUT.VIEWPORT.LARGE && <Text tiny>LARGE</Text> }
    </LayoutView>
  )));


import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';

import { LAYOUT } from '../../common';
import ResponsiveView from './ResponsiveView';
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
    </ResponsiveView>
  )));


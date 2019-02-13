import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';

import { LAYOUT } from '../../common';
import LayoutView, { LayoutConsumer } from './Layout';
import Text from '../Text';

const LayoutInfo = ({ title, viewport }) => (
  <View style={{ alignSelf: 'center', marginTop: '33vh' }}>
    <Text headline level={5}>{title}</Text>
    <Text headline level={6}>{`${viewport.W} x ${viewport.H}`}</Text>
    { viewport.PORTRAIT && <Text level={3} lighten>PORTRAIT</Text> }
    { viewport.LANDSCAPE && <Text level={3} lighten>LANDSCAPE</Text> }
    { viewport.IPHONEX && <Text level={3} lighten>IPHONEX</Text> }
    { viewport.TINY && <Text level={3} lighten>TINY</Text> }
    { viewport.PHONE && <Text level={3} lighten>PHONE</Text> }
    { viewport.TABLET && <Text level={3} lighten>TABLET</Text> }
    { viewport.SMALL && <Text level={3} lighten>SMALL</Text> }
    { viewport.REGULAR && <Text level={3} lighten>REGULAR</Text> }
    { viewport.LARGE && <Text level={3} lighten>LARGE</Text> }
  </View>
);

const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)' };

storiesOf('✅ LayoutView', module)
  .add('default', () => (
    <LayoutView />
  ))
  .add('⚡ onLayout (WEB)', () => (
    <LayoutView onLayout={action('LayoutView.onLayout()')} />
  ))
  .add('<LayoutConsumer>', () => (
    <LayoutView>
      <LayoutConsumer>
        { ({ viewport }) => <LayoutInfo title="<LayoutConsumer />" viewport={viewport} /> }
      </LayoutConsumer>
    </LayoutView>
  ))
  .add('style', () => (
    <LayoutView style={STYLE} />
  ))
  .add('common/LAYOUT', withState({ timestamp: new Date() }, store => (
    <LayoutView {...store.state} onLayout={() => store.set({ timestamp: new Date() })}>
      <LayoutInfo viewport={LAYOUT.VIEWPORT} title="common/LAYOUT" />
    </LayoutView>
  )));


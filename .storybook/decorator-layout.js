import React from 'react';
import { View, StyleSheet } from 'react-native';

import { LAYOUT, THEME } from '../common';
import { LayoutConsumer, LayoutView, Text } from '../components';

const { COLOR, UNIT, OFFSET } = THEME;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: OFFSET,
    backgroundImage: "linear-gradient(45deg, #ddd 25%, transparent 25%), linear-gradient(-45deg, #ddd 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ddd 75%), linear-gradient(-45deg, transparent 75%, #ddd 75%)",
    backgroundSize: '32px 32px',
    backgroundPosition: '0 0, 0 16px, 16px -16px, -16px 0px',
  },

  info: {
    backgroundColor: 'rgba(0,0,0,0.25)',
    padding: UNIT,
    position: 'absolute',
    left: OFFSET,
    top: OFFSET,
  },
})

export default (storyFn) => (
  <LayoutView style={styles.container}>
    <LayoutConsumer>
    { ({ viewport }) =>
      <View style={styles.info}>
        <View style={LAYOUT.STYLE.ROW}>
          <Text color={COLOR.WHITE} bold small>{viewport.PORTRAIT ? 'PORTRAIT ' : 'LANDSCAPE '}</Text>
          { viewport.IPHONEX && <Text color={COLOR.WHITE} tiny>IPHONEX</Text> }
          { viewport.TINY && <Text color={COLOR.WHITE} tiny>TINY</Text> }
          { viewport.PHONE && <Text color={COLOR.WHITE} tiny>PHONE</Text> }
          { viewport.TABLET && <Text color={COLOR.WHITE} tiny>TABLET</Text> }
          { viewport.SMALL && <Text color={COLOR.WHITE} tiny>SMALL</Text> }
          { viewport.REGULAR && <Text color={COLOR.WHITE} tiny>REGULAR</Text> }
          { viewport.LARGE && <Text color={COLOR.WHITE} tiny>LARGE</Text> }
        </View>
        <Text tiny color={COLOR.WHITE}>{`${viewport.W} x ${viewport.H}`}</Text>
      </View>
    }
    </LayoutConsumer>
    { storyFn() }
  </LayoutView>
);

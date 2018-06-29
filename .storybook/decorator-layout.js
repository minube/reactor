import React from 'react';
import { View, StyleSheet } from 'react-native';

import { LAYOUT, STYLE, THEME } from '../common';
import { LayoutView, Text } from '../components';

const { COLOR: { WHITE }, UNIT, OFFSET } = THEME;

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
  <LayoutView
    style={styles.container}
  >
    <View style={styles.info}>
      <View style={STYLE.ROW}>
        <Text color={WHITE} bold small>{LAYOUT.VIEWPORT.PORTRAIT ? 'PORTRAIT ' : 'LANDSCAPE '}</Text>
        { LAYOUT.VIEWPORT.IPHONEX && <Text color={WHITE} tiny>IPHONEX</Text> }
        { LAYOUT.VIEWPORT.TINY && <Text color={WHITE} tiny>TINY</Text> }
        { LAYOUT.VIEWPORT.PHONE && <Text color={WHITE} tiny>PHONE</Text> }
        { LAYOUT.VIEWPORT.TABLET && <Text color={WHITE} tiny>TABLET</Text> }
        { LAYOUT.VIEWPORT.SMALL && <Text color={WHITE} tiny>SMALL</Text> }
        { LAYOUT.VIEWPORT.REGULAR && <Text color={WHITE} tiny>REGULAR</Text> }
        { LAYOUT.VIEWPORT.LARGE && <Text color={WHITE} tiny>LARGE</Text> }
      </View>
      <Text tiny color={WHITE}>{`${LAYOUT.VIEWPORT.W} x ${LAYOUT.VIEWPORT.H}`}</Text>
    </View>
    { storyFn() }
  </LayoutView>
);

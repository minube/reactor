import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
import LayoutView from '../Layout';
import Link from './Link';

storiesOf('✅ Link', module)
  .addWithJSX('default', () => (
    <Link href="http://minube.com">minube.com</Link>
  ))
  .addWithJSX('without href', () => (
    <Link>minube.com</Link>
  ))
  .addWithJSX('style', () => (
    <Link
      href="http://minube.com"
      style={{ fontSize: THEME.FONT.SIZE.LARGE, fontWeight: THEME.FONT.WEIGHT.BOLD }}
      styleHover={{ color: 'red' }}
    >
      minube.com
    </Link>
  ))
  .addWithJSX('🏀 Playground', () => (
    <LayoutView>
      <Link href={text('href', 'http://minube.com')}>
        {text('title', 'minube.com')}
      </Link>
    </LayoutView>
  ));

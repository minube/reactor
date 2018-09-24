import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { THEME } from '../../common';
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
      style={{ fontSize: 20, fontWeight: THEME.FONT.WEIGHT.BOLD }}
      styleHover={{ color: 'red' }}
    >
      minube.com
    </Link>
  ))
  .addWithJSX('🏀 Playground', () => (
    <Link href={text('href', 'http://minube.com')}>
      {text('title', 'minube.com')}
    </Link>
  ));

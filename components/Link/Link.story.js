import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import Link from './Link';

storiesOf('✅ Link', module)
  .add('default', () => (
    <Link href="http://minube.com">minube.com</Link>
  ))
  .add('without href', () => (
    <Link>minube.com</Link>
  ))
  .add('style', () => (
    <Link
      href="http://minube.com"
      style={{ fontSize: 20, fontWeight: '700' }}
      styleHover={{ color: 'red' }}
    >
      minube.com
    </Link>
  ))
  .add('🏀 Playground', () => (
    <Link href={text('href', 'http://minube.com')}>
      {text('title', 'minube.com')}
    </Link>
  ));

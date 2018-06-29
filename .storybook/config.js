import { addDecorator, configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs/react';
import JSXAddon from 'storybook-addon-jsx';
import styles from '@sambego/storybook-styles';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';

import './addon-viewport';
import { THEME } from '../common';
import PKG from '../package.json';

addDecorator(withKnobs);
addDecorator(styles({
  alignItems: 'center',
  backgroundImage: "linear-gradient(45deg, #ddd 25%, transparent 25%), linear-gradient(-45deg, #ddd 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ddd 75%), linear-gradient(-45deg, transparent 75%, #ddd 75%)",
  backgroundSize: '32px 32px',
  backgroundPosition: '0 0, 0 16px, 16px -16px, -16px 0px',
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
}));
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
setAddon(JSXAddon);
setOptions({
  name: `🚀 reactor ${PKG.version}`,
  url: 'github.com/minube/reactor',
  addonPanelInRight: true,
});
setConsoleOptions({ panelExclude: [] });

const stories = require.context('../components', true, /\.story\.js$/);
configure(() => stories.keys().forEach(stories), module);

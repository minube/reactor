import { addDecorator, configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs/react';
import JSXAddon from 'storybook-addon-jsx';
import styles from '@sambego/storybook-styles';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';

import './addon-viewport';
import decoratorLayout from './decorator-layout';
import { THEME } from '../common';
import PKG from '../package.json';

addDecorator(decoratorLayout);
addDecorator(withKnobs);
addDecorator(styles({
  height: '100vh',
  width: '100%',
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

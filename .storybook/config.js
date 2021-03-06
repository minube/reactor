import { addDecorator, configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs/react';
import styles from '@sambego/storybook-styles';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';

import './addon-viewport';
import decoratorLayout from './decorator-layout';
import PKG from '../package.json';

addDecorator(decoratorLayout);
addDecorator(withKnobs);
addDecorator(styles({
  height: '100vh',
  width: '100%',
}));
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
setOptions({
  name: `🚀 reactor ${PKG.version}`,
  url: 'github.com/minube/reactor',
  addonPanelInRight: true,
});
setConsoleOptions({ panelExclude: [] });

const stories = require.context('../components', true, /\.story\.js$/);
stories.playground = require('../index.story.js');
stories.theme = require('../context/Theme/Theme.story.js');
stories.theme = require('../context/Tracking/Tracking.story.js');
configure(() => stories.keys().forEach(stories), module);

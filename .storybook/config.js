import { addDecorator, configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs/react';
import JSXAddon from 'storybook-addon-jsx';
import styles from '@sambego/storybook-styles';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';

import { THEME } from '../common';

addDecorator(withKnobs);
addDecorator(styles({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: THEME.OFFSET,
  height: '100%',
}));
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
setAddon(JSXAddon);
setOptions({
  name: 'minube/reactor',
  url: 'github.com/minube/reactor',
  addonPanelInRight: true,
});
setConsoleOptions({ panelExclude: [] });

const stories = require.context('../components', true, /\.story\.js$/);
configure(() => stories.keys().forEach(stories), module);

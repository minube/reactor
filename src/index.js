import { AppRegistry } from 'react-native';

import Storybook from './Storybook';

AppRegistry.registerComponent('Storybook', () => Storybook);
AppRegistry.runApplication('Storybook', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});

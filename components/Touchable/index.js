import { createElement } from 'react';
import { ENV } from '../../common';
import Touchable from './Touchable';

export default props => ENV.IS_SERVER ? props.children : createElement(Touchable, props); // eslint-disable-line

import { createElement } from 'react';
import { View } from 'react-native';

export default ({ children, style }) => createElement(View, { style }, children);

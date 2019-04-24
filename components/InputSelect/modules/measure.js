import { findDOMNode } from 'react-dom';
import { ENV } from '../../../common';

export default async component => new Promise((resolve) => {
  if (ENV.IS_NATIVE) {
    component.measure((x, y, height, width) => resolve({
      height, width, x, y,
    }));
  } else {
    resolve(findDOMNode(component).getBoundingClientRect()); // eslint-disable-line
  }
});

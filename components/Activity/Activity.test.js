import React from 'react';
import ReactDOM from 'react-dom';
import Activity from './Activity';

describe('<Activity>', () => {
  let div;

  beforeEach(() => {
    div = document.createElement('div');
  });

  test('renders', () => {
    ReactDOM.render(<Activity />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});


import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';

import { ConsumerL10N, ProviderL10N } from './L10N';

global.fetch = () => {};

describe('<ProviderL10N>', () => {
  it('renders', () => {
    const tree = TestRenderer.create(<ProviderL10N />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProviderL10N />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});


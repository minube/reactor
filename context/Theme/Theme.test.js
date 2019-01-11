import React from 'react';
import TestRenderer from 'react-test-renderer';

import { ConsumerTheme, ProviderTheme } from './Theme';
import THEME from '../../common/theme';

const theme = {
  COLOR: { PRIMARY: 'green' },
};

describe('<ProviderTheme>', () => {
  it('renders', () => {
    const tree = TestRenderer.create(<ProviderTheme />).toJSON();
    expect(tree).toMatchSnapshot();
  });

   it('when {style}', () => {
    expect(THEME.COLOR.PRIMARY).toEqual('#10c0bc');
    const tree = TestRenderer.create(<ProviderTheme style={theme} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(THEME.COLOR.PRIMARY).toEqual(theme.COLOR.PRIMARY);
  });
});


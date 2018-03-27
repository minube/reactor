import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Breadcrumbs from './Breadcrumbs';

const dataSource = [
  { caption: 'Spain', href: '/' },
  { caption: 'Basque Country', href: '/' },
  { caption: 'Bilbao', href: '/' },
];

describe('<Breadcrumbs>', () => {
  it('renders', () => {
    const tree = renderer.create(<Breadcrumbs />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {dataSource}', () => {
    const tree = renderer.create(<Breadcrumbs dataSource={dataSource} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<Breadcrumbs dataSource={dataSource} color={THEME.COLOR.PRIMARY} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onPress}', () => {
    // @TODO: Test <Breadcrumbs /> {onPress}
  });

  it('when {style}', () => {
    const style = {
      padding: THEME.OFFSET,
      backgroundColor: 'rgba(0,0,0,0.25)',
      fontSize: THEME.FONT.SIZE.REGULAR,
    };
    const tree = renderer.create(<Breadcrumbs dataSource={dataSource} style={style} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Breadcrumbs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});


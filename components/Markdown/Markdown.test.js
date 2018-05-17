import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Markdown from './Markdown';

describe('<Markdown>', () => {
  it('renders', () => {
    const tree = renderer.create(<Markdown />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when simple text', () => {
    const tree = renderer.create(<Markdown>Hello World</Markdown>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when including *', () => {
    const tree = renderer.create(<Markdown>hello *world*</Markdown>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when including **', () => {
    const tree = renderer.create(<Markdown>hello **world**</Markdown>).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('when combining * & **', () => {
    const tree = renderer.create(<Markdown>hello *world*, I'm **javi**.</Markdown>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('including a <Text> property', () => {
    const tree = renderer.create(<Markdown accent>Hello *World*</Markdown>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Markdown />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});


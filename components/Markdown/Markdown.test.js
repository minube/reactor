import React from 'react';
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
});


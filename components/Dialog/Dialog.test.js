import React from 'react';
import renderer from 'react-test-renderer';

import Dialog from './Dialog';
import Text from '../Text';

const EVENT = () => {};

const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)' };

describe('<Dialog>', () => {
  it('renders', () => {
    const tree = renderer.create(<Dialog />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {visible}', () => {
    const tree = renderer.create(<Dialog visible />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {reverse}', () => {
    const tree = renderer.create(<Dialog visible reverse />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {title}', () => {
    const tree = renderer.create(<Dialog title="Hello world" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {children}', () => {
    const tree = renderer.create(<Dialog><Text>Hello World</Text></Dialog>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {background}', () => {
    const tree = renderer.create(<Dialog background={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Dialog style={STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {styleContainer}', () => {
    const tree = renderer.create(<Dialog styleContainer={STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onClose}', () => {
    const tree = renderer.create(<Dialog onClose={EVENT} />).toJSON();
    expect(tree).toMatchSnapshot();
    // @TODO: Test <Dialog /> {onClose}
  });

  it('when {highlight}', () => {
    const tree = renderer.create(<Dialog title="Hello world" onClose={EVENT} highlight />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


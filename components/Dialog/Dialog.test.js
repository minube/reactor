import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Dialog from './Dialog';

describe('<Dialog>', () => {
  it('renders', () => {
    const tree = renderer.create(<Dialog />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {title}', () => {
    const tree = renderer.create(<Dialog title="Hello world" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {visible}', () => {
    const tree = renderer.create(<Dialog visible />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onClose}', () => {
    // @TODO: Test <Dialog /> {onClose}
  });

  it('when {onSubmit}', () => {
    // @TODO: Test <Dialog /> {onSubmit}
  });

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dialog />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});


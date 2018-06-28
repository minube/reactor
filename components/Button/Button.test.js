import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { Price } from '../';
import Button from './Button';

describe('<Button>', () => {
  it('renders', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {title}', () => {
    const tree = renderer.create(<Button title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {icon}', () => {
    const tree = renderer.create(<Button icon="apps" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {icon} & {title}', () => {
    const tree = renderer.create(<Button icon="apps" title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {contained}', () => {
    const tree = renderer.create(<Button contained title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {outlined}', () => {
    const tree = renderer.create(<Button outlined title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {accent}', () => {
    const tree = renderer.create(<Button contained accent title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {primary}', () => {
    const tree = renderer.create(<Button contained primary title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {activity}', () => {
    const tree = renderer.create(<Button activity title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {children}', () => {
    const tree = renderer.create(<Button><Price value={10} /></Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {color}', () => {
    const tree = renderer.create(<Button color="red" title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabled}', () => {
    const tree = renderer.create(<Button disabled title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {responsive}', () => {
    const tree = renderer.create(<Button responsive title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {rounded}', () => {
    const tree = renderer.create(<Button rounded title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {small}', () => {
    const tree = renderer.create(<Button small title="Press me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {onPress}', () => {
    // @TODO: Test <Button /> {onPress}
  });

  it('when {style}', () => {
    const tree = renderer.create(<Button title="Press me" style={{ backgroundColor: 'orange' }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders in DOM environment', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});


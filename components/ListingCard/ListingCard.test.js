import React from 'react';
import renderer from 'react-test-renderer';

import { THEME } from '../../common';
import Button from '../Button';
import ListingCard from './ListingCard';

const { COLOR, SPACE } = THEME;
const LIPSUM_IMAGE = 'https://picsum.photos/320/200/?random';
const RATING = { showValue: false, count: 12, value: 4.5 };

describe('<ListingCard>', () => {
  it('renders', () => {
    const tree = renderer.create(<ListingCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {image}', () => {
    const tree = renderer.create(<ListingCard image={LIPSUM_IMAGE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {title}', () => {
    const tree = renderer.create(<ListingCard title="Hello world" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {category}', () => {
    const tree = renderer.create(<ListingCard category="Hello world" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {description}', () => {
    const tree = renderer.create(<ListingCard description="Hello world" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {rating}', () => {
    const tree = renderer.create(<ListingCard rating={RATING} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {children}', () => {
    const tree = renderer.create(
      <ListingCard>
        <Button flat rounded small title="15 Actividades" style={{ alignSelf: 'flex-start', marginHorizontal: 0 }} />
      </ListingCard>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {styleContainer}', () => {
    const tree = renderer.create(<ListingCard styleContainer={{ backgroundColor: COLOR.PRIMARY, paddingTop: SPACE.XS }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

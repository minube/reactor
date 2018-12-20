import React from 'react';
import renderer from 'react-test-renderer';

import Calendar from './Calendar';
// import {
//   STYLE, TODAY, TOMORROW, IN_7_DAYS, IN_10_DAYS, LOCALE,
// } from './Calendar.story';
const STYLE = { backgroundColor: 'rgba(0,255,0,0.25)', width: '100%' };
const TODAY = new Date(1980, 10, 4);
const YESTERDAY = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 1);
const TOMORROW = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 1);
const IN_7_DAYS = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 7);
const IN_10_DAYS = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + 10);
const LOCALE = {
  DAY_NAMES: ['lu', 'ma', 'mi', 'ju', 'vi', 'sá', 'do'],
  MONTHS: [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
  ],
};

const CAPTIONS = [
  { date: TOMORROW, value: '$10' },
  { date: IN_7_DAYS, value: '$19' },
];

describe('<Calendar>', () => {
  it('renders', () => {
    const tree = renderer.create(<Calendar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

   it('when {busy}', () => {
    const tree = renderer.create(<Calendar busy />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {locale}', () => {
    const tree = renderer.create(<Calendar locale={LOCALE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value}', () => {
    const tree = renderer.create(<Calendar value={TOMORROW} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {value} & {range}', () => {
    const tree = renderer.create(<Calendar range value={[YESTERDAY, TOMORROW]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {availableDates}', () => {
    const tree = renderer.create(<Calendar availableDates={[IN_7_DAYS, IN_10_DAYS]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabledDates}', () => {
    const tree = renderer.create(<Calendar disabledDates={[IN_7_DAYS, IN_10_DAYS]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {disabledPast}', () => {
    const tree = renderer.create(<Calendar disabledPast />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {captions}', () => {
    const tree = renderer.create(<Calendar captions={CAPTIONS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {style}', () => {
    const tree = renderer.create(<Calendar style={STYLE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

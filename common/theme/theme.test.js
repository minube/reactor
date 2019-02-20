import theme from './theme';

const KEYS =  [
  'BORDER_RADIUS',
  'COLOR',
  'ELEVATION',
  'FONT',
  'MOTION',
  'OFFSET',
  'UNIT',
  'SPACE',
];

describe('theme', () => {
  it('default', () => {
    expect(Object.keys(theme)).toEqual(KEYS);
  });
});

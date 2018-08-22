import screenStyle from './screenStyle';

describe('screenStyle', () => {
  it('default', () => {
    const style = screenStyle();
    expect(style).toBeDefined();
    expect(Object.keys(style)).toEqual(['BUTTON', 'CARD', 'SHARE', 'TEXT']);
  });
});


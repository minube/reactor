import serverSideStyle from './serverSideStyle';

describe('serverSideStyle', () => {
  it('default', () => {
    const value = serverSideStyle();
    expect(value).toEqual({});
  });

  it('receives a compiled style (number)', () => {
    const STYLE_COMPILED = 128;
    const value = serverSideStyle(STYLE_COMPILED);
    expect(value).toEqual({});
  });

  it('receives a object style', () => {
    const STYLE_OBJ = { backgroundColor: 'green' };
    const value = serverSideStyle(STYLE_OBJ);
    expect(value).toEqual(STYLE_OBJ);
  });
});

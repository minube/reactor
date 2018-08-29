import environment from './environment';

const KEYS =  [
  'IS_NATIVE', 'IS_SERVER', 'IS_WEB', 'IS_MOBILE', 'IS_PRODUCTION', 'IS_DEVELOPMENT', 'NODE_ENV', 'REACT_APP_ENV',
];

describe('environment', () => {
  it('default', () => {
    const env = environment;
    expect(Object.keys(env)).toEqual(KEYS);
    expect(env.IS_NATIVE).toEqual(true);
    expect(env.IS_SERVER).toEqual(false);
    expect(env.IS_WEB).toEqual(false);
    expect(env.IS_MOBILE).toEqual(true);
    expect(env.IS_PRODUCTION).toEqual(false);
    expect(env.IS_DEVELOPMENT).toEqual(true);
    expect(env.NODE_ENV).toEqual('test');
    expect(env.REACT_APP_ENV).toEqual('development');
  });
});

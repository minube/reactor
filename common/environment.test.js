import environment from './environment';

const KEYS =  [
  'IS_NATIVE',
  'IS_SERVER',
  'IS_WEB',
  'IS_MOBILE_WEB',
  'IS_PRODUCTION',
  'IS_DEVELOPMENT',
  'IS_TEST',
  'NODE_ENV',
  'PKG',
  'REACT_APP_ENV',
];

describe('environment', () => {
  it('default', () => {
    const env = environment;
    expect(Object.keys(env)).toEqual(KEYS);
    expect(env.IS_NATIVE).toEqual(true);
    expect(env.IS_SERVER).toEqual(false);
    expect(env.IS_WEB).toEqual(false);
    expect(env.IS_MOBILE_WEB).toEqual(false);
    expect(env.IS_PRODUCTION).toEqual(false);
    expect(env.IS_DEVELOPMENT).toEqual(true);
    expect(env.IS_TEST).toEqual(true);
    expect(env.NODE_ENV).toEqual('test');
    expect(env.PKG).toEqual({ name: 'reactor', version: '0.11' });
    expect(env.REACT_APP_ENV).toEqual('development');
  });
});

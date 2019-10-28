import fetchMethod from './fetch';

global.fetch = require('jest-fetch-mock');
const SERVICE = 'auth';
const ENDPOINT = `https://staging.mapi.minube.com/${SERVICE}`;
const ENDPOINT_SECURE = `https://staging.mapi.minube.com/${SERVICE}`;

describe('fetch()', () => {

  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify({ data: 'success' }));
  })

  it('default', () => {
    fetchMethod({ service: SERVICE })
      .then(response => expect(response.data).toEqual('success') );
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(ENDPOINT);
  });

  it('send parameters', () => {
    fetchMethod({ service: SERVICE, username: 'soyjavi' })
      .then(response => expect(response.data).toEqual('success') );
    expect(fetch.mock.calls.length).toEqual(1);
    const [ uri, result = {} ] = fetch.mock.calls[0];
    expect(uri).toEqual(ENDPOINT);
    expect(result.username).toEqual('soyjavi');
  });

  it('use secure request', () => {
    fetchMethod({ secure: true, service: SERVICE, username: 'soyjavi' })
      .then(response => expect(response.data).toEqual('success') );
    expect(fetch.mock.calls.length).toEqual(1);
    const [ uri, result = {} ] = fetch.mock.calls[0];
    expect(uri).toEqual(ENDPOINT_SECURE);
    expect(result.username).toEqual('soyjavi');
  });

  it('use as POST', () => {
    fetchMethod({ service: SERVICE, method: 'POST' })
      .then(response => expect(response.data).toEqual('success') );
    expect(fetch.mock.calls.length).toEqual(1);
    const [ uri, result = {} ] = fetch.mock.calls[0];
    expect(uri).toEqual(ENDPOINT);
    expect(result.method).toEqual('POST');
  });

  it('overwrite headers', () => {
    fetchMethod({ service: SERVICE, headers: { timeout: 1000 } })
      .then(response => expect(response.data).toEqual('success') );
    expect(fetch.mock.calls.length).toEqual(1);
    const [ uri, result = {} ] = fetch.mock.calls[0];
    expect(uri).toEqual(ENDPOINT);
    expect(result.headers.timeout).toEqual(1000);
  });
});

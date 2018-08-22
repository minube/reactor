import isMobile from './isMobile';

describe('isMobile', () => {
  it('default', () => {
    const value = isMobile();
    expect(value).not.toBeTruthy()
  });

  it('when desktop agent', () => {
    const value = isMobile('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246');
    expect(value).not.toBeTruthy()
  });

  it('when android', () => {
    const value = isMobile('Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/60.0.3112.107 Mobile Safari/537.36');
    expect(value).toBeTruthy()
  });

  it('when android tablet', () => {
    const value = isMobile('Mozilla/5.0 (Linux; Android 6.0.1; SGP771 Build/32.2.A.0.253; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Safari/537.36');
    expect(value).toBeTruthy()
  });

  it('when iPhone X', () => {
    const value = isMobile('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1');
    expect(value).toBeTruthy()
  });

  it('when iPad', () => {
    const value = isMobile('Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10');
    expect(value).toBeTruthy()
  });
});


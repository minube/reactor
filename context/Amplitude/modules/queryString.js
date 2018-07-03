export default (props = {}) => (
  Object.keys(props).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(props[key])}`).join('&') // eslint-disable-line
);

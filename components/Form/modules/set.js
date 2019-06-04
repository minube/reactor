const clone = (base) => {
  const copy = {};

  Object.keys(base).forEach((key) => {
    const value = base[key];
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) copy[key] = clone(value);
    else if (Object.prototype.hasOwnProperty.call(base, key)) copy[key] = value;
  });

  return copy;
};

export default (base = {}, path = '', value) => {
  // const schema = JSON.parse(JSON.stringify(base));
  const schema = clone(base);
  const keyMap = path.split('.');
  let level = 0;

  keyMap.reduce((a, b) => {
    level += 1;

    if (typeof a[b] === 'undefined' && level !== keyMap.length) {
      a[b] = {}; // eslint-disable-line
      return a[b];
    }

    if (level === keyMap.length) {
      a[b] = value; // eslint-disable-line
      return value;
    }
    return a[b];
  }, schema);

  return schema;
};

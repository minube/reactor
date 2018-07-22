export default (dataSource = [], value = '') => {
  if (value.length < 1) return dataSource;
  const isString = typeof dataSource[0] === 'string';

  return dataSource.filter(item => (
    isString
      ? item.toLowerCase().search(value) > -1
      : JSON.stringify(Object.values(item)).toLowerCase().search(value) > -1
  ));
};

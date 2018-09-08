export default (value) => {
  const date = Array.isArray(value) ? value[0] : value;

  return {
    month: date.getMonth(),
    year: date.getFullYear(),
  };
};

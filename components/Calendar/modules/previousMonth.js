export default (date) => {
  const month = date.getMonth();
  const year = date.getFullYear();

  return {
    month: month === 0 ? 11 : month - 1,
    year: month === 0 ? year - 1 : year,
  };
};

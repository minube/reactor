export default (date) => {
  const month = date.getMonth();
  const year = date.getFullYear();

  return {
    month: month === 11 ? 0 : month + 1,
    year: month === 11 ? year + 1 : year,
  };
};

export default (value, { min = 0, max, avg }) => {
  if (value === 0) return value;

  return Math.floor((value * 100) / max);

  // @TODO AVG Algorythm
  // let percent = Math.floor(((value - min) * 100) / (avg - min));
  // if (percent > 100) percent = 100 + Math.floor(((value - min) * 100) / (max - min));

  // return Math.floor(percent / 2);
};

const DAY_MS = 24 * 60 * 60 * 1000;
const WEEK_MS = 7 * DAY_MS;

export default (week = 15, year = 1980) => {
  const date = new Date(year, 0, 1, 0, 0, 0);
  const offsetTimeStart = DAY_MS * (date.getDay() - 1);

  return new Date(date.getTime() + WEEK_MS * (week - 1) - offsetTimeStart);
};

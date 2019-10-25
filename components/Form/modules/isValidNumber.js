
export default (number = '', { minChar = 0 }) => {
  const REGEXP = new RegExp(`^[0-9]{${minChar}}`);
  return number !== '' ? REGEXP.test(number) : true;
};

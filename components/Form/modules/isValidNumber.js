
export default (number = '', { minChar = 0 }, maxChar = 999) => {
  const REGEXP = new RegExp(`^[0-9]{${minChar},${maxChar}}$`);
  return number !== '' ? REGEXP.test(number) : true;
};

export default (phone = '', { countryCode = false } = {}) => {
  if (phone === '') return true;
  const minLength = countryCode ? 10 : 8;

  const { length } = phone.replace(/\D/g, '');
  return length >= minLength && length <= 15;
};

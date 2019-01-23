export default (phone = '') => {
  if (phone === '') return true;

  const { length } = phone.replace(/\D/g, '');
  return length >= 10 && length <= 15;
};

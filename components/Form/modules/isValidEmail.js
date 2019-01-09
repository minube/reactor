const REGEXP = /\S+@\S+\.\S+/;

export default (email = '') => (email !== '' ? REGEXP.test(email) : true);

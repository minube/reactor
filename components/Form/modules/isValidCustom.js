// eslint-disable-next-line no-unused-vars,no-eval
export default (input = '', { validator }) => (input !== '' ? eval(validator) : true);

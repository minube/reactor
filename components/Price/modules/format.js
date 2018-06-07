export default (value, fixed) =>
  parseFloat(Math.abs(value))
    .toFixed(fixed)
    // .replace(/\B(?=(\d{3})+(?!\d))/g, ',') // @TODO: Another option
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
